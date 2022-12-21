<template>
  <div class="card">
    <div v-if="!$slots.title" class="card-header">{{ title }}</div>
    <slot name="title"></slot>
    <div :class="`${bodyClass} card-body`" v-if="$slots.default">
      <slot />
    </div>
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
    bodyClass: {
      type: String,
      default: "",
    },
  },
});
</script>
<style lang="less" scoped>

.card {
  border: @border;
  border-radius: 12px;
  display: flex;
  flex-direction: column;

  &-header {
    height: 48px;
    line-height: 48px;
    text-indent: 1em;
    border-bottom: @border;
  }

  &-body {
    flex: 1;
  }
}
</style>