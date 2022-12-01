<template>
  <div>
    <!-- 工具集 -->
    <div class="card-box">
      <Card
        v-for="(item, index) in tools"
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

interface Tool {
  path: string;
  name: string;
}

const tools: Tool[] = [
  {
    path: "/tools/JsonPretty",
    name: "Json格式化工具",
  },
  {
    path: "/tools/UrlCodec",
    name: "Url编解码工具",
  },
  {
    path: "/tools/Regular",
    name: "正则表达式验证",
  },
    {
    path: "/tools/RgbHex",
    name: "RGB HEX互转",
  },
];

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
