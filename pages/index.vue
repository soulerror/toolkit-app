<template>
  <div>
    <!-- 工具集 -->
    <div class="card-box">
      <div
        class="card"
        v-for="(item, index) in routeArr"
        :key="index"
        @click="skipTo(item.path)"
      >
        <div class="card-title">
          <span>{{ item.abbr }}</span>
          <p>{{ item.name }}</p>
        </div>
      </div>
      <i v-for="i in 10" :key="i" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

import { routeArr } from "@/configs";

export default Vue.extend({
  name: "IndexPage",
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
  justify-content: space-around;
}
// 卡片及占位符间距
@card-margin:20px 10px;

.card {
  height: 200px;
  width: 200px;
  background-color: #fff;
  border: @border;
  border-radius: 12px;
  margin: @card-margin;
  cursor: pointer;
  text-align: center;
  display: flex;
  flex-direction: column;
  // justify-content: center;
  align-items: center;
  position: relative;
  box-shadow: @shadowColor;

  img {
    height: 60px;
    width: 60px;
    border-radius: 12px;
  }

  &:hover {
    color: @mainColor;
  }

  &:hover .card-title > p {
    transform: none;
  }

  &:hover .card-title > span {
    opacity: 1;
    transform: none;
  }
}
i {
  width: 200px;
  margin: @card-margin;
}
.card::after {
  content: "";
  width: 0;
  height: 4px;
  border-radius: 0 0 12px 12px;
  background: @themeColor;
  margin: 0 auto;
  transition: width 400ms ease-in-out;
  position: absolute;
  bottom: 0;
}
.card:hover::after {
  width: 100%;
}
.card-title {
  display: flex;
  flex-direction: column;
  width: fit-content;
  justify-content: center;
  align-items: center;
  border-bottom: @border;
  width: 100%;
  font-weight: bold;

  p,
  span {
    margin: 0;
    transition: all 100ms ease-in-out;
  }

  span {
    display: block;
    opacity: 0;
    transform: translateY(10px);
  }

  p {
    transform: translateY(-10px);
    width: fit-content;
  }
}
</style>
