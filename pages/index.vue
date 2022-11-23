<template>
  <div>
    <!-- 工具集 -->
    <div class="card-box">
      <Card v-for="i in 4" :key="i" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Card from "~/pages/components/Card.vue";

export default Vue.extend({
  name: "IndexPage",
  components: {
    Card,
  },
  layout: "default",
});
</script>
<style lang="less" scoped>
.card-box {
  display: flex;
  flex-wrap: wrap;
}
</style>
