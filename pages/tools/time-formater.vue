<template>
  <ToolCard title="时间戳转换">
    <Card title="当前时间戳" class="time-card" bodyClass="time-card-body">
      <TimeUnit v-for="item in 10" :key="item">{{
        curentDate(item - 1)
      }}</TimeUnit>
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

export default Vue.extend({
  components: { TimeUnit },
  data() {
    return {
      time: 1671704255,
    };
  },
  mounted() {
    setInterval(() => {
      this.time = new Date().valueOf();
    }, 1000);
  },
  computed: {
    curentDate() {
      return (index: number) => {
        return this.time.toString().split("")[index];
      };
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
  }
}
@unitLength: 30px;

.time-unit-box {
  height: @unitLength;
  width: @unitLength;
  border: @border;
  line-height: @unitLength;
  text-align: center;
  font-weight: bolder;
}
</style>