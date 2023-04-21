<template>
  <div :class="`cp-button shape-${shape}`" @click="_click">
    <a-icon v-if="type" :type="type" />
    <slot />
  </div>
</template>
<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  props: {
    shape: {
      type: String,
      default: "circle",
    },
    type: {
      type: String,
      default: undefined,
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
.cp-button {
  height: @button-h;
  line-height: @button-h;
  min-width: 60px;
  width: fit-content;
  padding: 0 12px;
  letter-spacing: 0.04em;
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
  background: @themeColor;
  color: #fff;
}
</style>
