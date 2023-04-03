<template>
  <!-- 侧边栏 -->
  <div class="sidebar">
    <div class="sidebar-title"><a-icon type="fire" class="ico" /> 热门工具</div>
    <div class="sidebar-list">
      <div
        class="sidebar-list-item"
        v-for="(item, index) in hotList"
        :key="index"
        @click="handleSkip(item.path)"
      >
        {{ item.name }}
      </div>
    </div>
    <div class="sidebar-title"><a-icon type="clock-circle" /> 最近使用</div>
    <div class="sidebar-list recent-list scroll-style">
      <div
        class="sidebar-list-item"
        v-for="(item, index) in hisArr"
        :key="index"
        @click="handleSkip(item.path)"
      >
        {{ item.name }}
      </div>
    </div>
    <!-- <img src="@/assets/images/animation.gif" /> -->
    <img src="https://cdn.icuzz.com/image/animation.gif" />
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import { PathHisKey, Page, hotList } from "@/configs";

interface DataType {
  hisArr: Array<Page>;
  hotList: Array<Page>;
}

export default Vue.extend({
  data(): DataType {
    return {
      hisArr: [],
      hotList: hotList,
    };
  },
  mounted() {
    this.loadHisPath();
  },
  watch: {
    $route: function () {
      this.loadHisPath();
    },
  },
  methods: {
    loadHisPath() {
      let hisArr: Array<Page> = this.$getArrayStore(PathHisKey);
      if (hisArr.length > 10) {
        hisArr.splice(10);
      }
      this.hisArr = hisArr;
    },
    handleSkip(path: string) {
      this.$router.push({ path });
    },
  },
});
</script>
<style lang="less" scoped>
@import url("~assets/css/variable.less");
.sidebar {
  height: 100%;
  width: 240px;
  min-height: 200px;
  // height: fit-content;
  background-color: #fff;
  border-radius: 12px;
  border: @border;
  box-shadow: rgba(35, 46, 67, 6%) 0px 4px 10px;
  position: relative;

  img {
    height: 120px;
    position: absolute;
    bottom: -20px;
    right: 0px;
  }
  &-title {
    line-height: 30px;
    border-bottom: @border;
    border-radius: 0 0 4px 4px;
    text-indent: 0.5em;

    .ico {
      color: red;
    }
  }
  &-list {
    margin-bottom: 20px;
    height: @header-3th-h * 4;

    &-item {
      height: @header-3th-h;
      line-height: @header-3th-h;
      width: 100%;
      border-radius: @header-3th-h / 3 0 0 @header-3th-h / 3;
      text-indent: 1em;
      cursor: pointer;
      position: relative;
    }

    &-item:hover {
      background: @themeColor;
      color: #fff;
    }
  }

  .recent-list {
    height: calc(100% - (@header-3th-h * 4) - 150px);
    overflow-y: auto;
  }
}
</style>