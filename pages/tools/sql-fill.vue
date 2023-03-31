<template>
  <div>
    <ToolCard
      title="SQL参数填充工具"
      @drawerClose="onClose"
      :drawerVisible="drawerVisible"
    >
      <div class="sql-content">
        <section class="fill-part sql-box-half">
          <div class="fill-part-sql">
            <div class="clean-btn" v-show="sql" @click="clean(CLEAN_TYPE.SQL)">
              <a-icon type="close" />
            </div>
            <textarea
              v-model="sql"
              class="input-box scroll-style"
              placeholder="请输入Mybatis/Ibatis日志语句"
            ></textarea>
          </div>
          <div class="fiil-part-params">
            <div
              class="clean-btn"
              v-show="params"
              @click="clean(CLEAN_TYPE.PARMS)"
            >
              <a-icon type="close" />
            </div>
            <textarea
              v-model="params"
              class="input-box scroll-style"
              placeholder="请输入Mybatis/Ibatis参数"
            ></textarea>
          </div>
        </section>
        <section class="bottom-btns">
          <Button @click="paramsfill"><a-icon type="sync" /> 参数替换</Button>
          <Button @click="onCopyText"><a-icon type="copy" /> 一键复制 </Button>
          <Button @click="clean(CLEAN_TYPE.ALL)"
            ><a-icon type="stop" /> 一键清除
          </Button>
          <Button><a-icon type="history" /> 历史记录 </Button>
        </section>
        <section class="preview-part">
          <pre class="scroll-style">
            {{ content }}
          </pre>
        </section>
      </div>
    </ToolCard>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import { clipboard } from "~/utils";

enum CLEAN_TYPE {
  SQL,
  PARMS,
  ALL,
}

interface DataType {
  drawerVisible: boolean;
  sql: string | null | undefined;
  params: string | null | undefined;
  content: string | null | undefined;
  CLEAN_TYPE: typeof CLEAN_TYPE;
}

export default Vue.extend({
  data(): DataType {
    return {
      drawerVisible: false,
      sql: "",
      params: "",
      content: "",
      CLEAN_TYPE,
    };
  },
  methods: {
    onClose() {
      this.drawerVisible = false;
    },
    clean(type: CLEAN_TYPE) {
      console.log(type, 222);
      switch (type) {
        case CLEAN_TYPE.SQL:
          this.sql = null;
          break;
        case CLEAN_TYPE.PARMS:
          this.params = null;
          break;
        case CLEAN_TYPE.ALL:
          console.log(111111);

          this.sql = null;
          this.params = null;
          this.content = null;
          break;
      }
    },
    paramsfill() {
      let { sql, params } = this;
      let paramsArr = params?.split(",");
      paramsArr?.forEach((param) => {
        sql = sql?.replace("?", param);
      });
      this.content = sql;
    },
    onCopyText() {
      this.content && clipboard(this.content);
    },
  },
});
</script>
<style lang="less" scoped>
.sql-content {
  height: 100%;
}

.fill-part {
  display: flex;
  border-bottom: @border;
  height: calc(45% - 20px);

  &-sql {
    border-right: @border;
  }

  & > div {
    height: 100%;
    width: 50%;
    position: relative;
  }

  .input-box {
    white-space: pre-wrap;
    outline: none;
    border: none;
    resize: none;
    width: 100%;
    height: 100%;
    padding: 10px 20px;
    overflow-y: auto;
    font-size: 14px;
    color: #000;
  }
}

.preview-part {
  height: 50%;

  & > pre {
    height: 100%;
    overflow-y: auto;
    padding: 0 20px;
    counter-reset: line;
  }
}

.bottom-btns {
  justify-content: flex-end;
}
</style>

