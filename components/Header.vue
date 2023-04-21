<template>
  <div class="header">
    <div @click="handleClickIcon" class="logo-box">
      <img class="logo" src="@/assets/svg/home.svg" />
      <TextTag
        :hider="SITE_NAME_EN"
        class="title"
        @click="handleClickIcon"
        :cover="SITE_NAME"
      ></TextTag>
    </div>
    <!-- <img class="hello" src="https://cdn.icuzz.com/image/hello.gif" /> -->
  </div>
</template>
<script lang="tsx">
import { SITE_NAME, SITE_NAME_EN } from "@/configs/index";
import Vue from "vue";
export default Vue.extend({
  data() {
    return {
      SITE_NAME,
      SITE_NAME_EN,
    };
  },
  methods: {
    handleClickIcon() {
      this.$router.push({ path: "/" });
    },
  },
});
</script>
<style lang="less" scoped>
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
  justify-content: space-between;

  .logo-box {
    display: flex;
    align-items: center;
    cursor: pointer;
    .logo {
      width: 40px;
      height: 40px;
      margin: 0 10px;
    }
  }
  .hello {
    height: @header-1st-h;
  }
}
</style>
