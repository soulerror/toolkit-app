<template>
  <ToolCard title="时间戳转换">
    <Card title="当前时间戳" class="time-card" bodyClass="time-card-body">
      <TimeUnit v-for="item in 10" :key="item">{{
        curentTimestampe(item - 1)
      }}</TimeUnit>
      <Button><a-icon type="copy" /> 点击复制</Button>
    </Card>
  </ToolCard>
</template>
<script lang="tsx">
import Vue from "vue";

//时间单元格
const TimeUnit = Vue.extend({
  render() {
    return <div class="time-unit-box">{this.$slots.default}</div>;
  },
});

interface DataType {
  timestamp: number | null;
  timer: NodeJS.Timer | null;
}

export default Vue.extend({
  components: { TimeUnit },
  data(): DataType {
    return {
      timestamp: new Date().valueOf(),
      timer: null,
    };
  },
  mounted() {
    this.timer = setInterval(() => {
      if (this.timestamp) this.timestamp += 1000;
    }, 1000);
  },
  destroyed() {
    this.timer && clearInterval(this.timer);
  },
  computed: {
    curentTimestampe() {
      return (index: number) =>
        this.timestamp ? this.timestamp.toString().split("")[index] : null;
    },
  },
});
</script>
<style lang="less" scoped>
.time-card {
  width: fit-content;
  margin: 20px auto;

  /deep/ &-body {
    display: flex;
    padding: 20px;
  }
}
@unitLength: 36px;

.time-unit-box {
  height: @unitLength;
  width: @unitLength;
  border: @border;
  line-height: @unitLength;
  text-align: center;
  font-weight: bolder;
  font-size: 24px;
}
</style>