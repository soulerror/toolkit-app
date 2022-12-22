<template>
  <div class="form-item-component">
    <div class="label" v-if="!$slots.label">
      <a-icon v-if="icon" :type="icon" />
      {{ label }}
    </div>
    <div class="label" v-if="$slots.label">
      <slot name="label" />
    </div>
    <div>
      <slot />
    </div>
  </div>
</template>
<script lang="ts">
export default {
  props: {
    icon: {
      type: String,
      default: null,
    },
    label: {
      type: String,
      default: null,
    },
  },
  data() {
    return {};
  },
};
</script>
<style lang="less" scoped>

.form-item-component {
  display: flex;
  width: fit-content;
  align-items: center;
  flex-direction: column;
  gap: 10px;

  i {
    color: @mainColor;
  }

  .label {
    color: #333;
  }
}
</style>
