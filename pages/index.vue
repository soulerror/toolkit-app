<template>
  <div>
    <!-- 工具集 -->
    <div class="card-box scroll-style">
      <div
        class="card"
        v-for="item in routeArr"
        :key="item.path"
        @click="skipTo(item.path)"
      >
        <div class="card-header">
          <img :src="require(`@/assets/svg/${item.icon}.svg`)" />
          <div class="card-title">
            <span>{{ item.abbr }}</span>
            <p>{{ item.name }}</p>
          </div>
        </div>
        <div class="card-content">
          <div class="card-content-desc">
            <p>{{ item.desc }}</p>
          </div>
          <span class="card-content-tag">{{
            item.status == ToolStatus.DEVELOPING ? "开发中 . . ." : ""
          }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

import { routeArr, ToolStatus } from "@/configs";

export default Vue.extend({
  name: "IndexPage",
  layout: "default",
  data() {
    return {
      routeArr,
      ToolStatus,
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
// 卡片高度
@card-h: 150px;
// 卡片宽度
@card-w: 200px;

.card-box {
  height: 100%;
  display: grid;
  justify-content: space-around;
  grid-template-columns: repeat(auto-fill, @card-w);
  grid-template-rows: repeat(auto-fill, @card-h);
  padding: 10px;
  grid-row-gap: 30px;
  grid-column-gap: 10px;
}

.card {
  height: @card-h;
  width: @card-w;
  border: @border;
  border-radius: 12px;
  margin: 10px 0;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  box-shadow: @shadowColor;
  transition: all 200ms ease-in-out;
  box-sizing: content-box;

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
    box-sizing: border-box;
    border-bottom: @border;
    align-items: center;
    padding: 0 5px;

    img {
      height: 36px;
      width: 36px;
    }
  }

  &-title {
    // width: fit-content;
    display: flex;
    flex: auto;
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
    height: @card-h - @header-3th-h;
    width: 100%;
    text-indent: 1.5em;
    padding: 5px;
    display: flex;
    flex-direction: column;

    &-desc {
      flex: 1;
    }

    &-tag {
      height: 24px;
      display: block;
      margin-left: auto;
      float: right;
      text-align: right;
      text-indent: 2em;
    }
  }
}
</style>
