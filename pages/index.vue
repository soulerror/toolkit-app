<template>
  <div>
    <!-- 工具集 -->
    <div class="card-box">
      <Card
        v-for="(item, index) in routeArr"
        :key="index"
        @click="skipTo(item.path)"
      >
        <img :src="require(`@/assets/svg/${item.icon}.svg`)" />
        {{ item.name }}
      </Card>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Card from "@/pages/components/Card.vue";
import { routeArr } from "@/configs";

export default Vue.extend({
  head() {
    return {
      title:"在线工具"
    };
  },
  name: "IndexPage",
  components: {
    Card,
  },
  layout: "default",
  data() {
    return {
      routeArr,
    };
  },
  methods: {
    skipTo(path: string) {
      this.$router.push({ path });
    },
  },
});
</script>
<style lang="less" scoped>
.card-box {
  display: flex;
  flex-wrap: wrap;
}
</style>
