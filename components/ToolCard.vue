<template>
  <div class="tool-body">
    <div class="tool-header">
      <slot name="title" />
    </div>
    <div class="tool-box">
      <slot />
    </div>
    <transition name="fade">
      <div class="tool-sidebar" v-show="drawerVisible">
        <div class="clean-btn" @click="_drawerClose">
          <a-icon type="close" />
        </div>
        <slot name="drawer" />
      </div>
    </transition>
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
<style lang="less">
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
  right: 0;
  top: 0;
  border-left: 1px @borderColor solid;
  background-color: #fff;
  box-shadow: @shadowColor;
}

.mask {
  height: 100%;
  width: 100%;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>