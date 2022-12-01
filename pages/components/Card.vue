<template>
  <div class="card" @click="_click">
    <slot />
  </div>
</template>
<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  data() {
    return {};
  },
  methods: {
    _click() {
      this.$emit("click");
    },
  },
});
</script>
<style lang="less" scoped>
.card {
  height: 100px;
  // width: 100px;
  width: fit-content;
  background-color: #fff;
  cursor: pointer;
  text-align: center;

  img {
    height: 60px;
    width: 60px;
    border-radius: 12px;
  }
}
</style>