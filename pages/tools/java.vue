<template>
  <div>
    <ToolCard
      title="Java实体生成工具"
      :drawerVisible="drawerVisible"
      @drawerClose="onClose"
      :drawerData="hisTextArr"
      @clickDrawerItem="setParams"
      @confirmClean="confirmClean"
    >
      <div>
        <div class="bottom-btns bottom-btns-right">
          <Button @click="showHistory" type="history"> 历史记录 </Button>
        </div>
      </div>
    </ToolCard>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import { clipboard } from "~/utils";

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
    };
  },
  methods: {
    onClose() {
      this.drawerVisible = false;
    },
    clean() {},
    showHistory() {
      this.drawerVisible = true;
    },
    setParams(sql: string) {},
    confirmClean() {},
  },
});
</script>
<style lang="less" scoped>
.content-box {
  height: 100%;
  display: flex;
}
</style>