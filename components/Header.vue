<template>
  <div class="header">
    <div @click="handleClickIcon" class="logo-box">
      <img class="logo" src="@/assets/svg/tool.svg" />
      <div class="head-tab">
        <span>Useful Tools</span>
        <p>实用小工具</p>
      </div>
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
  .head-tab {
    display: flex;
    flex-direction: column;
    p,
    span {
      margin: 0;
      transition: all 100ms ease-in-out;
    }
    span {
      display: block;
      opacity: 0;
      transform: translateY(10px);
    }
    p {
      transform: translateY(-10px);
    }
    &:hover {
      color: @mainColor;
    }
    &:hover > p {
      transform: translateY(0px);
    }
    &:hover > span {
      opacity: 1;
      transform: translateY(0px);
    }
  }
}
</style>