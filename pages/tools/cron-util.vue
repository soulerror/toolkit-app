<template>
  <ToolCard title="Cron表达式工具">
    <div>
      <div class="time-options-box">
        <FormItem label="秒">
          <a-input class="time-input"></a-input>
        </FormItem>
        <FormItem label="秒">
          <a-input class="time-input"></a-input>
        </FormItem>
        <FormItem label="秒">
          <a-input class="time-input"></a-input>
        </FormItem>
      </div>
    </div>
  </ToolCard>
</template>
<style lang="less" scoped>
.time-options-box {
  display: flex;
  gap: 10px;

  .time-input{
    width: 80px;
  }
}
</style>