<template>
  <div class="layout">
    <Header />
    <div class="layout-content">
      <nuxt class="route-box" />
      <Sidebar/>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
export default Vue.extend({});
</script>
<style lang="less" scoped>
.layout {
  background: rgb(250, 250, 252);
  height: 100%;
  width: 100%;

  &-content {
    display: flex;
    justify-content: space-between;
    padding-top: 20px;
    width: calc(100% - 200px);
    min-width: 1200px;
    margin: 0 auto;

    .route-box {
      width: calc(100% - 280px);
      background: #fff;
      padding: 20px;
      border-radius: 12px;
      box-sizing: border-box;
      border: 1px solid rgb(242, 243, 245);
      box-shadow: rgba(35, 46, 67, 6%) 0px 4px 10px;
    }
  }
}
</style>