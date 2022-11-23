<template>
  <!-- json格式化 -->
  <div class="json">
    <section class="tool-header">1111</section>
    <div class="tool-box">
      <div class="input-box">
        <div
          class="json-input"
          contenteditable="true"
          aria-multiline="true"
          white-space="pre-wap"
          placeholder="请输入需要格式化的Json"
        ></div>
        <a-button type="primary" shape="round">格式转换</a-button>
      </div>
      <div class="json-output">111</div>
    </div>
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
  .tool-header {
    height: 56px;
    width: 100%;
    line-height: 56px;
    padding: 0 12px;
    border-bottom: 1px solid rgb(242, 243, 245);
  }
  .tool-box {
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 100%;

    & > div {
      width: 50%;
      height: 100%;

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

    .input-box {
      border-right: 1px solid rgb(242, 243, 245);
    }

    .json-input {
      white-space: pre-wrap;
      outline: none;
      height: calc(100% - 100px);
      padding: 10px;
      overflow-y: auto;
      font-size: 20px;
      color: #000;
    }
  }

  &-input {
    resize: none;
  }
}
</style>