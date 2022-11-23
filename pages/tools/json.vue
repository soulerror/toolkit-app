<template>
  <!-- json格式化 -->
  <div class="json">
    <textarea class="json-input"></textarea>
    <div class="json-output">111</div>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  layout: "default",
});
</script>
<style lang="less" scoped>
.json {
  display: flex;
  justify-content: space-between;

  & > textarea,
  div {
    width: calc(50% - 20px);
    height: 100%;
    border: 1px solid #dcdfe6;
    border-radius: 12px;
    padding: 10px;
    overflow-y: auto;

    /*chrome滚动条样式修改*/
    &::-webkit-scrollbar {
      width: 8px;
      height: 8px;
      /*background-color: #ddd;*/
    }

    /*滑块*/
    &::-webkit-scrollbar-thumb {
      background-color: #c7c8cb;
      border-radius: 4px;
    }

    &::-webkit-scrollbar-thumb:hover {
      background-color: #b6b8b9;
    }

    /*滑道*/
    &::-webkit-scrollbar-track {
      border-radius: 4px;
    }
  }

  &-input {
    resize: none;
  }
}
</style>