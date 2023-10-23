<template>
  <ToolCard
    title="Java实体生成工具"
    :drawerVisible="drawerVisible"
    @drawerClose="onClose"
    :drawerData="hisTextArr"
    @clickDrawerItem="setParams"
    @confirmClean="confirmClean"
  >
    <div class="content-box">
      <div>
        <CloseButton v-show="createSql" @click="clean(CLEAN_TYPE.TEMPLATE)" />
        <textarea
          class="entity-input scroll-style"
          contenteditable="true"
          aria-multiline="true"
          white-space="pre-wap"
          placeholder="请输入数据库建表语句"
          v-model="createSql"
        ></textarea>
        <div class="bottom-btns bottom-btns-right">
          <Button type="history"> 历史记录 </Button>
          <Button type="copy" @click="onClick"> 复制文本 </Button>
        </div>
      </div>
    </div>
  </ToolCard>
</template>
<script lang="ts">
import Vue from "vue";
import { clipboard } from "~/utils";

enum CLEAN_TYPE {
  CREATE_SQL,
  TEMPLATE,
}

export default Vue.extend({
  data() {
    return {
      drawerVisible: false,
      // 建表语句
      createSql: "",
      //模板
      template: "",
      params: "",
      content: "",
      history: [],
      hisTextArr: [],
      CLEAN_TYPE,
    };
  },
  methods: {
    onClose() {
      this.drawerVisible = false;
    },
    clean(type: CLEAN_TYPE) {
      this.createSql = "";
    },
    showHistory() {
      this.drawerVisible = true;
    },
    setParams(sql: string) {},
    confirmClean() {},
    async onClick() {},
  },
});
</script>
<style lang="less" scoped>
.content-box {
  height: 100%;
  display: flex;

  & > div:first-of-type {
    border-right: @border;
  }

  & > div {
    height: 100%;
    width: 50%;
    border-right: @border;
    position: relative;
    display: flex;
    flex-direction: column;

    .entity-input {
      white-space: pre-wrap;
      outline: none;
      border: none;
      width: 100%;
      flex: 1;
      padding: 10px;
      overflow-y: auto;
      font-size: 14px;
      color: #000;
      resize: none;
    }
  }
}
</style>