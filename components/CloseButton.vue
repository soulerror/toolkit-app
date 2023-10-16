<template>
  <div class="clean-btn" @click="_click">
    <a-icon type="close" />
  </div>
</template>
<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  methods: {
    _click() {
      this.$emit("click");
    },
  },
});
</script>
<style lang="less" scoped>
@margin: 5px;
@size: 30px;
.clean-btn {
  position: absolute;
  right: @margin;
  top: @margin;
  height: @size;
  width: @size;
  line-height: @size;
  text-align: center;
  border-radius: 50%;
  color: #333;
  cursor: pointer;
  background-color: #fff;
}
.clean-btn:hover {
  background: @themeColor;
  color: #fff;
}
</style>