<template>
  <div class="tool-body">
    <div class="tool-header">
      <slot name="title" />
    </div>
    <div class="tool-box">
      <slot />
      <div
        :class="`tool-sidebar ${
          drawerVisible ? 'tool-sidebar-show' : 'tool-sidebar-hide'
        }`"
      >
        <div class="clean-btn" @click="_drawerClose">
          <a-icon type="close" />
        </div>
        <slot name="drawer" />
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  props: {
    drawerVisible: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    _drawerClose() {
      this.$emit("drawerClose");
    },
  },
});
</script>
<style lang="less" scoped>
@import url("@/assets/css/variable.less");
@width: 240px;
.tool-body {
  position: relative;
  overflow: hidden;
}
.tool-sidebar {
  position: absolute;
  height: 100%;
  width: @width;
  padding-top: 30px;
  top: 0;
  border-left: 1px @borderColor solid;
  background-color: #fff;
  box-shadow: @shadowColor;
  border-radius: 14px 0 0 14px;
  transition: all 1s ease;
}
.tool-sidebar-show {
  right: 0;
}
.tool-sidebar-hide {
  right: -@width;
}
.clean-btn {
  position: absolute;
  right: 6px;
  top: 6px;
  height: 24px;
  width: 24px;
  line-height: 24px;
  text-align: center;
  border-radius: 50%;
  cursor: pointer;
}
.clean-btn:hover {
  background-color: #dcdfe6;
}
.drawer-transition-enter-active,
.drawer-transition-leave-active {
  right: 0;
  transition: all 1s ease;
}

.drawer-transition-enter-from,
.drawer-transition-leave-to {
  right: -@width;
  transition: all 1s ease;
}
</style>