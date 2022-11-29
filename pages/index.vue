<template>
  <div>
    <!-- 工具集 -->
    <div class="card-box">
      <Card v-for="(item, index) in tools" :key="index" @click.native="skipTo(item)" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Card from "~/pages/components/Card.vue";

const tools = ["/tools/JsonPretty"];

export default Vue.extend({
  name: "IndexPage",
  components: {
    Card,
  },
  layout: "default",
  data() {
    return {
      tools,
    };
  },
  methods: {
    skipTo(val: string) {
      this.$router.push({ path: val });
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
