<template>
  <div class="header">
    <div @click="handleClickIcon" class="logo-box">
      <img class="logo" src="@/assets/svg/tool.svg" />
      <TextTag hider="Tools.icuzz.com" @click="handleClickIcon" cover="实用小工具"></TextTag>
    </div>
  </div>
</template>
<script lang="tsx">
import Vue from "vue";
export default Vue.extend({
  methods: {
    handleClickIcon() {
      this.$router.push({ path: "/" });
    },
  },
});
</script>
<style lang="less" scoped>
@import url("~assets/css/variable.less");
.header {
  width: 100%;
  min-width: 1200px;
  height: @header-1st-h;
  background-color: #fff;
  color: #333;
  border-bottom: 1px solid rgb(242, 243, 245);
  padding: 0 30px;
  display: flex;
  align-items: center;

  .logo-box {
    display: flex;
    align-items: center;
    cursor: pointer;
  }

  .logo {
    width: @header-1st-h;
    height: @header-1st-h;
  }
}
</style>