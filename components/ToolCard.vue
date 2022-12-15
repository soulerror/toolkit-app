<template>
  <div class="tool-body">
    <div class="tool-header">
      <section v-if="!$slots.title" class="tool-title">{{ title }}</section>
      <slot name="title" />
    </div>
    <div class="tool-box">
      <slot />
      <div
        :class="`tool-sidebar-mask ${
          drawerVisible ? 'tool-sidebar-mask-show' : 'tool-sidebar-mask-hide'
        }`"
        @click="_drawerClose"
      />
      <div
        :class="`tool-sidebar ${
          drawerVisible ? 'tool-sidebar-show' : 'tool-sidebar-hide'
        }`"
      >
        <div class="clean-btn" @click="_drawerClose">
          <a-icon type="close" />
        </div>
        <div class="scroll-style his-box">
          <p
            class="his-list"
            v-for="(item, index) in drawerData"
            :key="index"
            @click="_drawerItemClick(item)"
            :title="item"
          >
            {{ item }}
          </p>
        </div>
        <div class="bottom-btns bottom-btns-right">
          <Button @click="_clean"><a-icon type="delete" /> 清空历史 </Button>
        </div>
        <slot name="drawer" />
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  props: {
    drawerVisible: {
      type: Boolean,
      default: false,
    },
    drawerData: {
      type: Array,
      default: () => [],
    },
    title: {
      type: String,
      default: "",
    },
  },
  methods: {
    _drawerClose() {
      this.$emit("drawerClose");
    },
    _drawerItemClick(item: any) {
      this.$emit("clickDrawerItem", item);
    },
    _clean() {
      this.$emit("clean");
    },
  },
});
</script>
<style lang="less" scoped>
@import url("@/assets/css/variable.less");
@import url("@/assets/css/common.less");
@width: 240px;
.tool-body {
  position: relative;
  overflow: hidden;
}
.tool-box {
  position: relative;
}
.tool-sidebar {
  position: absolute;
  height: 100%;
  width: @width;
  padding-top: 30px;
  top: 0;
  border-left: @border;
  background-color: #fff;
  box-shadow: @shadowColor;
  border-radius: 14px 0 0 14px;
  transition: all 1s ease;
}
.tool-sidebar-mask {
  height: 100%;
  width: 100%;
  position: absolute;
  background: rgba(0, 0, 0, 0.2);
  top: 0;
  transition: all 350ms ease;
}
.tool-sidebar-mask-hide {
  right: -100%;
}
.tool-sidebar-mask-show {
  right: 0;
}
.tool-sidebar-show {
  right: 0;
}
.tool-sidebar-hide {
  right: -@width;
}
.clean-btn {
  position: absolute;
  right: 6px;
  top: 6px;
  height: 24px;
  width: 24px;
  line-height: 24px;
  text-align: center;
  border-radius: 50%;
  cursor: pointer;
}
.clean-btn:hover {
  background-color: #dcdfe6;
}
.his-box {
  height: calc(100% - @button-h - 20px);
}

.his-list {
  padding: 12px;
  margin: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  cursor: pointer;
  border-radius: 12px 0 0 12px;
}
.his-list:hover {
  background: @themeColor;
  color: #fff;
}
</style>