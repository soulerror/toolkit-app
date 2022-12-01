<template>
  <a-config-provider :locale="locale">
    <div class="layout">
      <Header />
      <div class="layout-content">
        <nuxt class="route-box" />
        <Sidebar />
      </div>
    </div>
  </a-config-provider>
</template>
<script lang="ts">
import Vue from "vue";
import zhCN from "@/plugins/antd-ui";

export default Vue.extend({
  data() {
    return {
      locale: zhCN,
    };
  },
});
</script>
<style lang="less" scoped>
.layout {
  background: rgb(250, 250, 252);
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;

  &-content {
    display: flex;
    justify-content: space-between;
    padding-top: 20px;
    width: calc(100% - 60px);
    min-width: 1200px;
    height: calc(100% - 100px);
    margin: 0 auto;

    .route-box {
      width: calc(100% - 280px);
      background: #fff;
      border-radius: 12px;
      box-sizing: border-box;
      overflow: hidden;
      border: 1px solid rgb(242, 243, 245);
      box-shadow: rgba(35, 46, 67, 6%) 0px 4px 10px;
    }
  }
}
</style>