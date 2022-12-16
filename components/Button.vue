<template>
  <div :class="`cp-button shape-${shape}`" @click="_click">
    <slot />
  </div>
</template>
<script lang="ts">
import Vue from "vue";

const enum Shape {
  //矩形
  SQUARE = "square",
  //圆角
  RADIUS = "radius",
  //圆形
  CIRCLE = "circle",
}

export default Vue.extend({
  props: {
    shape: {
      type: String,
      default: "circle",
    },
  },
  methods: {
    _click() {
      this.$emit("click");
    },
  },
});
</script>
<style lang="less" scoped>
@import url("~/assets/css/variable.less");
.cp-button {
  height: @button-h;
  line-height: @button-h;
  min-width: 60px;
  width: fit-content;
  padding: 0 12px;
  letter-spacing: 0.04em;
  transition: all 0.1s linear 0s;
  cursor: pointer;
}
.shape-square {
  border-radius: 0;
}
.shape-circle {
  border-radius: @button-h / 2;
}
.shape-radius {
  border-radius: 12px;
}
.cp-button:hover {
  background: @buttonColor;
  color: #fff;
}
</style>
