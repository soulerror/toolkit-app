<template>
  <div class="header">
    <div @click="handleClickIcon" class="logo-box">
      <img class="logo" src="@/assets/svg/home.svg" />
      <TextTag
        hider="Tuch's Toolkit"
        class="title"
        @click="handleClickIcon"
        cover="塔奇の工具箱"
      ></TextTag>
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
    position: relative;

    .logo {
      width: 40px;
      height: 40px;
      left: 10px;
      transition: 200ms ease-in-out;
      position: absolute;
    }
    .logo:hover {
      width: 48px;
      height: 48px;
      left: 6px;
    }
    .title {
      margin-left: 60px;
      // font-weight: bold;
      // font-size: 1.2em;
    }
  }
}
</style>