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
@import url("@/assets/css/variable.less");
.card {
  height: 100px;
  width: 120px;
  background-color: #fff;
  cursor: pointer;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    height: 60px;
    width: 60px;
    border-radius: 12px;
  }
}
.card::after {
  content: "";
  width: 0;
  height: 4px;
  border-radius: 2px;
  background: @themeColor;
  margin: 0 auto;
  transition: width 500ms ease-in;
}
.card:hover::after {
  width: 100%;
}
</style>