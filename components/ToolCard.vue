<template>
  <div class="tool-body">
    <div class="tool-header">
      <section v-if="!$slots.title" class="tool-title">
        <TextTag :cover="title" :hider="SITE_NAME_EN"></TextTag>
      </section>
    </div>
    <div class="tool-box">
      <slot />
      <div :class="`tool-sidebar-mask ${drawerVisible ? 'tool-sidebar-mask-show' : 'tool-sidebar-mask-hide'
        }`" @click="_drawerClose" />
      <div :class="`tool-sidebar ${drawerVisible ? 'tool-sidebar-show' : 'tool-sidebar-hide'
        }`">
        <CloseButton @click="_drawerClose"></CloseButton>
        <div class="scroll-style his-box">
          <p class="his-list" v-for="(item, index) in drawerData" :key="index" @click="_drawerItemClick(item, index)"
            :title="item">
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
<script lang="tsx">
import Vue from "vue";
import { SITE_NAME_EN } from "~/configs/modules/site.config";
import CloseButton from "./CloseButton.vue";
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
    confirmable: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      SITE_NAME_EN,
    };
  },
  methods: {
    _drawerClose() {
      this.$emit("drawerClose");
    },
    _drawerItemClick(item: any, index: number) {
      console.log(index, "index");
      this.$emit("clickDrawerItem", item, index);
    },
    _clean() {
      if (this.confirmable) {
        const modal = this.$confirm({
          content: "删除后不可恢复，确认删除？",
          onOk: () => {
            this.$emit("confirmClean");
            modal.destroy();
          },
        });
      }
      else
        this.$emit("clean");
    },
  },
  components: { CloseButton }
});
</script>
<style lang="less" scoped>
@import url("@/assets/css/common.less");
@width: 240px;

.tool-body {
  height: 100%;
  position: relative;
  overflow: hidden;
}

.tool-header {
  height: @header-2nd-h;
  width: 100%;
  padding: 0 12px;
  border-bottom: @border;
  display: flex;
  align-items: center;
  cursor: default;
}

.tool-box {
  width: 100%;
  height: calc(100% - @header-2nd-h);
  position: relative;
}

.tool-sidebar {
  position: absolute;
  height: 100%;
  width: @width;
  padding-top: 36px;
  top: 0;
  border-left: @border;
  background-color: #fff;
  box-shadow: @shadowColor;
  border-radius: 14px 0 0 14px;
  transition: all 300ms ease;
}

.tool-sidebar-mask {
  height: 100%;
  width: 100%;
  position: absolute;
  background: rgba(83, 62, 249, 0.1);
  top: 0;
  transition: all 300ms ease;
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