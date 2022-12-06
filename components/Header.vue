<template>
  <div class="header">
    <span @click="handleClickIcon">
      <img class="logo" src="@/assets/svg/tool.svg" />
      <p>常用小工具</p>
    </span>
  </div>
</template>
<script lang="ts">
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
  line-height: @header-1st-h;

  span {
    cursor: pointer;
    display: flex;
  }

  .logo {
    width: @header-1st-h;
    height: @header-1st-h;
  }
}
</style>