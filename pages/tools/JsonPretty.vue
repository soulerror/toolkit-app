<template>
  <!-- json格式化 -->
  <ToolCard class="json" :drawerVisible="visible" @drawerClose="onClose">
    <section slot="title">Json格式化工具</section>
    <div class="json-box">
      <div class="input-box">
        <div class="clean-btn" v-show="jsonStr" @click="cleanJson">
          <a-icon type="close" />
        </div>
        <textarea
          class="json-input scroll-style"
          contenteditable="true"
          aria-multiline="true"
          white-space="pre-wap"
          placeholder="请输入需要格式化的Json"
          v-model="jsonStr"
        ></textarea>
        <div class="bottom-btns"></div>
      </div>
      <div class="json-output">
        <pre :class="`scroll-style ${formatError ? 'error-text' : ''}`">{{
          prettyStr
        }}</pre>
        <div class="bottom-btns">
          <Button @click="showHistory"
            ><a-icon type="history" /> 历史记录
          </Button>
          <Button @click="onCopyText"> <a-icon type="copy" /> 复制文本 </Button>
        </div>
      </div>
    </div>
    <div slot="drawer" class="drawer-box">
      <div class="scroll-style his-box">
        <p
          class="his-list"
          v-for="(item, index) in parseHistory"
          :key="index"
          @click="setJsonStrText(item)"
        >
          {{ item }}
        </p>
      </div>
      <div class="bottom-btns">
        <Button @click="confirmDel"><a-icon type="delete" /> 清空历史 </Button>
      </div>
    </div>
  </ToolCard>
</template>
<script lang="ts">
import Vue from "vue";
import { clipboard, debounce } from "~/utils/utils";

const storeKey: string = "joson-pretty-history";

//声明Data
interface DataType {
  jsonStr: string;
  prettyStr: string;
  formatError: boolean;
  visible: boolean;
  parseHistory: Array<string>;
}

export default Vue.extend({
  layout: "default",
  components: {},
  data(): DataType {
    return {
      jsonStr: "",
      prettyStr: "",
      formatError: false,
      visible: false,
      parseHistory: [],
    };
  },
  watch: {
    jsonStr() {
      debounce(() => this.prettyJson(), 200);
    },
  },
  methods: {
    /**
     * json格式化
     */
    prettyJson() {
      let prettyStr: string = "";
      try {
        prettyStr =
          this.jsonStr && JSON.stringify(JSON.parse(this.jsonStr), null, "\t");
        this.formatError = false;
      } catch (e) {
        this.formatError = true;
        prettyStr = "JSON格式错误";
      }
      this.prettyStr = prettyStr;
    },
    /**
     * 点击拷贝按钮
     */
    onCopyText() {
      let text = this.jsonStr;
      let flag: boolean = this.setClipboardText(this.prettyStr);
      if (flag) {
        let oldHis: string = this.$getLocal(storeKey);
        let hisArr: Array<string> = oldHis ? JSON.parse(oldHis) : [];
        if (hisArr) {
          let index = hisArr.findIndex((item) => item == text);
          index != -1 && hisArr.splice(index, 1);
        }
        hisArr.unshift(text);
        console.log(hisArr);
        this.$storeLocal(storeKey, JSON.stringify(hisArr));
      }
    },
    setJsonStrText(text: string) {
      this.jsonStr = text;
    },
    /**
     * 设置粘贴板
     */
    setClipboardText(text: string) {
      return clipboard(text);
    },
    /**
     * 清除左侧Json
     */
    cleanJson() {
      this.jsonStr = "";
      this.formatError = false;
    },
    /**
     * 点击展示历史记录
     */
    showHistory() {
      let hisStr: string = this.$getLocal(storeKey);
      let hisArr: any = hisStr ? JSON.parse(hisStr) : [];
      this.parseHistory = hisArr;
      this.visible = true;
    },
    /**
     * 关闭历史记录
     */
    onClose() {
      this.visible = false;
    },
    /**
     * 确认删除记录
     */
    confirmDel() {
      this.$confirm({
        title: "确认删除？",
        content: "删除后不可恢复，确认删除？",
        onOk: () => {
          this.$storeLocal(storeKey, []);
          this.showHistory();
        },
      });
    },
  },
});
</script>
<style lang="less" scoped>
@import url("~assets/css/variable.less");
.json {
  .clean-btn {
    position: absolute;
    right: 6px;
    top: 6px;
    height: 24px;
    width: 24px;
    line-height: 24px;
    text-align: center;
    border-radius: 50%;
    cursor: pointer;
  }
  .clean-btn:hover {
    background-color: #dcdfe6;
  }
  .json-box {
    height: 100%;
    display: flex;
    justify-content: space-between;

    & > div {
      width: 50%;
      height: 100%;
    }

    .input-box {
      border-right: 1px solid @borderColor;
      position: relative;
    }

    .error-text {
      color: #f56c6c !important;
    }

    .json-input {
      white-space: pre-wrap;
      outline: none;
      border: none;
      width: 100%;
      height: calc(100% - @button-h - 20px);
      padding: 10px;
      overflow-y: auto;
      font-size: 14px;
      color: #000;
      resize: none;
    }

    .json-output {
      position: relative;
      overflow: hidden;
      pre {
        padding: 10px;
        height: calc(100% - @button-h - 20px);
        margin: 0;
      }
    }
  }
}

.bottom-btns {
  height: 60px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 0 20px;
}

.his-title {
  font-size: 14px;
}

.drawer-box {
  height: 100%;
}

.his-box {
  height: calc(100% - @button-h - 20px);
}

.his-list {
  padding: 12px;
  margin: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  cursor: pointer;
  border-radius: 12px 0 0 12px;
}
.his-list:hover {
  background: @themeColor;
  color: #fff;
}
</style>