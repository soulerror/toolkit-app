<template>
  <!-- json格式化 -->
  <div class="json">
    <section class="tool-header">Json格式化工具</section>
    <div class="tool-box json-box">
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
        <pre :class="`scroll-style ${formatError?'error-text':''}`">{{ prettyStr }}</pre>
        <div class="bottom-btns">
          <Button @click="storeInLocal"
            ><a-icon type="history" /> 历史记录
          </Button>
          <Button @click="setClipboardText">
            <a-icon type="copy" /> 复制文本
          </Button>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import { clipboard, debounce } from "~/utils/utils";
export default Vue.extend({
  layout: "default",
  components: {},
  data() {
    return {
      jsonStr: "",
      prettyStr: "",
      formatError: false,
    };
  },
  watch: {
    jsonStr() {
      debounce(() => this.prettyJson());
    },
  },
  methods: {
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
    storeInLocal(){
      localStorage.setItem("json",this.prettyStr)
    },
    setClipboardText() {
      clipboard(this.prettyStr);
    },
    cleanJson() {
      this.jsonStr = "";
      this.formatError = false;
    },
  },
});
</script>
<style lang="less" scoped>
@import url("~assets/css/variable.less");
.json {
  // .tool-header {
  //   height: 56px;
  //   width: 100%;
  //   line-height: @header-2nd-h;
  //   padding: 0 12px;
  //   border-bottom: 1px solid @borderColor;
  // }
  .clean-btn {
    position: absolute;
    right: 12px;
    top: 12px;
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

    .bottom-btns {
      height: 60px;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      padding: 0 20px;
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
      pre {
        padding: 10px;
        height: calc(100% - @button-h - 20px);
        margin: 0;
      }
    }
  }
}
</style>