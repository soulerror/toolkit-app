<template>
  <div class="cp-button" @click="_click">
    <slot />
  </div>
</template>
<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  methods: {
    _click: function () {
      this.$emit("click", null);
    },
  },
});
</script>
<style lang="less" scoped>
@import url("~/assets/css/variable.less");
.cp-button {
  border-radius: @button-h / 2;
  height: @button-h;
  line-height: @button-h;
  min-width: 60px;
  width: fit-content;
  padding: 0 12px;
  letter-spacing: 0.04em;
  transition: all 0.1s linear 0s;
  cursor: pointer;
}
.cp-button:hover {
  background: @buttonColor;
  color: #fff;
}
</style>
