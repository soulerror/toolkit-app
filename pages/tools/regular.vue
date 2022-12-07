<template>
  <ToolCard title="正则表达式校验">
    <div class="tool-box">
      <div class="reg-input-box"></div>
      <a-form layout="inline">
        <a-form-item label="正则表达式">
          <a-input class="reg-input"></a-input>
        </a-form-item>
      </a-form>
    </div>
  </ToolCard>
</template>
<style lang="less" scoped>
.tool-box {
  .reg-input-box {
    display: flex;
    justify-content: center;
    align-items: center;
    .reg-input {
      width: 800px;
      margin: 0 auto;
    }
    /deep/ .ant-form-inline {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
}
</style>