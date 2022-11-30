<template>
  <div class="card">
    <slot />
  </div>
</template>
<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  data() {
    return {
      hehe: "xxxxxx",
    };
  },
});
</script>
<style lang="less" scoped>
.card {
  height: 100px;
  width: 100px;
  background-color: #fff;
  cursor: pointer;
  text-align: center;
  line-height: 60px;

  img {
    height: 60px;
    width: 60px;
    border-radius: 12px;
  }
}
</style>