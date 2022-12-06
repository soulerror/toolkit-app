<template>
  <!-- 侧边栏 -->
  <div class="sidebar">
    <div class="sidebar-title"><a-icon type="fire" class="ico" /> 热门工具</div>
    <div class="hot-list">
      <div
        class="hot-list-item"
        v-for="(item, index) in hotList"
        :key="index"
        @click="handleSkip(item.path)"
      >
        {{ item.name }}
      </div>
    </div>
    <div class="sidebar-title"><a-icon type="history" /> 最近使用</div>
    <div class="hot-list">
      <div
        class="hot-list-item"
        v-for="(item, index) in hisArr"
        :key="index"
        @click="handleSkip(item.path)"
      >
        {{ item.name }}
      </div>
    </div>
    <img src="@/assets/images/animation.gif" />
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import { hisPathKey } from "@/configs/store.config";
import { hotList } from "@/configs/hot.config";
import { Page } from "~/configs/route.config";
import { getArrayStore } from "@/utils/utils";

interface DataType {
  hisArr: Array<Page>;
  hotList: Array<Page>;
}

export default Vue.extend({
  data(): DataType {
    return {
      hisArr: [],
      hotList: [...hotList],
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
      this.hisArr = getArrayStore(hisPathKey);
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
  width: 240px;
  min-height: 200px;
  // height: fit-content;
  background-color: #fff;
  border-radius: 12px;
  border: 1px solid @borderColor;
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
  .hot-list {
    margin-bottom: 20px;

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
}
</style>