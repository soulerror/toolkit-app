<template>
  <div>
    <!-- 工具集 -->
    <div class="card-box scroll-style">
      <div
        class="card"
        v-for="item in route"
        :key="item.path"
        @click="skipTo(item.path)"
      >
        <div class="card-header">
          <img
            :src="require(`@/assets/svg/${item.icon}.svg`)"
            class="card-icon"
          />
          <div class="card-title">
            <span>{{ item.abbr }}</span>
            <p>{{ item.name }}</p>
          </div>
        </div>
        <div class="card-content"></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

import { routeArr } from "@/configs";

let route = routeArr.concat(routeArr).concat(routeArr).concat(routeArr);

export default Vue.extend({
  name: "IndexPage",
  layout: "default",
  data() {
    return {
      route,
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
  height: 100%;
  display: grid;
  // flex-wrap: wrap;
  justify-content: space-around;
  grid-template-columns: repeat(auto-fill, 200px);
  padding: 10px;
  grid-gap: 10px;
}

.card {
  height: 200px;
  width: 200px;
  border: @border;
  border-radius: 12px;
  margin: 10px 0;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  box-shadow: @shadowColor;
  transition: all 200ms ease-in-out;

  &:hover {
    color: @mainColor;
    transform: translateY(-5px);
  }

  &:hover .card-title > p {
    transform: none;
  }

  &:hover .card-title > span {
    opacity: 1;
    transform: none;
  }

  &::after {
    content: "";
    display: block;
    width: 0;
    height: 4px;
    border-radius: 0 0 12px 12px;
    background: @mainColor;
    margin: 0 auto;
    transition: width 400ms ease-in-out;
  }

  &:hover::after {
    width: 100%;
  }

  &-header {
    display: flex;
    height: @header-3th-h;
    border-bottom: @border;
    align-items: center;

    img {
      height: 36px;
      width: 36px;
      margin: 0 5px;
    }
  }

  &-title {
    width: fit-content;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-weight: bold;

    p,
    span {
      margin: 0;
      transition: all 200ms ease-in-out;
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

  &-content {
    flex: 1;
    width: 100%;
  }
}
</style>
