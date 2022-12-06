<template>
  <div>
    <!-- 工具集 -->
    <div class="card-box">
      <Card
        v-for="(item, index) in routeArr"
        :key="index"
        @click="skipTo(item.path)"
      >
        <Button> {{ item.name }}</Button>
      </Card>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Card from "@/pages/components/Card.vue";
import { routeArr } from "@/configs/route.config";

export default Vue.extend({
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
