<template>
  <div class="card">
    <div v-if="!$slots.title" class="card-header">{{ title }}</div>
    <slot name="title"></slot>
    <slot />
  </div>
</template>
<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  props: {
    title: {
      type: String,
      default: "",
    },
  },
});
</script>
<style lang="less" scoped>
@import url("@/assets/css/variable.less");
.card {
  height: 100%;
  width: 100%;
  border: @border;
  border-radius: 12px;

  &-header {
    height: 48px;
    line-height: 48px;
    text-indent: 1em;
    border-bottom: @border;
  }
}
</style>