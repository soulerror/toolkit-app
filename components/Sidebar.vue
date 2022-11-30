<template>
  <!-- 侧边栏 -->
  <div class="sidebar">
    <img
      src="@/assets/images/animation.gif"
    />
  </div>
</template>
<style lang="less" scoped>
@import url('~assets/css/variable.less');
.sidebar {
  width: 240px;
  min-height: 200px;
  // height: fit-content;
  background-color: #fff;
  border-radius: 12px;
  border: 1px solid @borderColor;
  box-shadow: rgba(35, 46, 67, 6%) 0px 4px 10px;
  position: relative;

  img {
    height: 120px;
    position: absolute;
    bottom: -20px;
    right: 0px;
  }
}
</style>