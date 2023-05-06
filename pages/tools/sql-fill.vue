<template>
  <div>
    <ToolCard
      title="SQL参数填充工具"
      :drawerVisible="drawerVisible"
      @drawerClose="onClose"
      :drawerData="hisTextArr"
      @clickDrawerItem="setParams"
      @confirmClean="confirmClean"
    >
      <div class="sql-content">
        <section class="fill-part sql-box-half">
          <div class="fill-part-sql">
            <CloseButton
              v-show="sql"
              @click="clean(CLEAN_TYPE.SQL)"
            ></CloseButton>
            <textarea
              v-model="sql"
              class="input-box scroll-style"
              placeholder="请输入Mybatis/Ibatis日志语句"
            ></textarea>
          </div>
          <div class="fiil-part-params">
            <CloseButton
              v-show="params"
              @click="clean(CLEAN_TYPE.PARMS)"
            ></CloseButton>
            <textarea
              v-model="params"
              class="input-box scroll-style"
              placeholder="请输入Mybatis/Ibatis参数"
            ></textarea>
          </div>
        </section>
        <section class="bottom-btns">
          <Button @click="paramsfill" type="sync"> 参数替换</Button>
          <Button @click="onCopyText" type="copy"> 一键复制 </Button>
          <Button @click="clean(CLEAN_TYPE.ALL)" type="delete"
            >一键清除
          </Button>
          <Button type="history" @click="showHistory"> 历史记录 </Button>
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
import { SQLFillStoreKey } from "@/configs";

enum CLEAN_TYPE {
  SQL,
  PARMS,
  ALL,
}

interface DataType {
  drawerVisible: boolean;
  sql: string|undefined ;
  params: string|undefined ;
  content: string|undefined;
  CLEAN_TYPE: typeof CLEAN_TYPE;
  history: Array<StoreType>;
  hisTextArr:Array<string>
}

interface StoreType {
  sql:string,
  params:string
}

export default Vue.extend({
  data(): DataType {
    return {
      drawerVisible: false,
      sql: "",
      params: "",
      content: "",
      CLEAN_TYPE,
      history: [],
      hisTextArr:[]
    };
  },
  methods: {
    onClose() {
      this.drawerVisible = false;
    },
    clean(type: CLEAN_TYPE) {
      switch (type) {
        case CLEAN_TYPE.SQL:
          this.sql = undefined
          break;
        case CLEAN_TYPE.PARMS:
          this.params =undefined;
          break;
        case CLEAN_TYPE.ALL:
          this.sql = undefined;
          this.params = undefined;
          this.content = undefined;
          break;
      }
    },
    paramsfill() {
      let { sql, params } = this;
      try {
        let paramsArr = params?.split(",");
        paramsArr?.forEach((param) => {
          sql = sql?.replace("?", param);
        });
      } catch (e) {}
      this.content = sql;
      this.$storeArrayItem(SQLFillStoreKey,{sql,params}) as StoreType
    },
    onCopyText() {
      this.content && clipboard(this.content);
    },
    showHistory() {
      const history = this.$getArrayStore(SQLFillStoreKey) as Array<StoreType>;
      this.history = history
      this.hisTextArr = history?.map(item=>item.sql)
      this.drawerVisible = true;
    },
    setParams(sql:string){
      const hisArr = this.history
      const sqlHis = hisArr.find(item=>sql===item.sql)
      this.sql = sqlHis?.sql
      this.params = sqlHis?.params
      this.paramsfill()
    },
    confirmClean(){
      console.log(11111);
      this.$storeLocal(SQLFillStoreKey, []);
      this.showHistory();
    }
    
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
    height: calc(100% - 8px);
    overflow-y: auto;
    padding: 0 20px;
    counter-reset: line;
  }
}

.bottom-btns {
  justify-content: flex-end;
}
</style>
