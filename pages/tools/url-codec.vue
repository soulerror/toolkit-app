<template>
  <!-- Url编解码工具 -->
  <ToolCard title="Url编解码工具" :drawerVisible="visible" @drawerClose="onClose" :drawerData="history"
    @clickDrawerItem="setUrl" @confirmDel="confirmDel">
    <template #title> </template>
    <div class="url-box">
      <div class="input-box">
        <CloseButton v-show="url" @click="setUrl" />
        <textarea class="url-input scroll-style" contenteditable="true" aria-multiline="true" white-space="pre-wap"
          placeholder="请输入需要编解码的URL" v-model="url"></textarea>
        <div class="bottom-btns bottom-btns-right">
          <Button @click="urlCodec(Codec.ENCODE)" type="lock"> URL编码 </Button>
          <Button @click="urlCodec(Codec.DECODE)" type="unlock"> URL解码 </Button>
        </div>
      </div>
      <div class="url-output">
        <pre class="scroll-style">{{ result }}</pre>
        <div class="bottom-btns">
          <Button @click="showHistory" type="history"> 历史记录 </Button>
          <Button @click="onCopyText" type="copy"> 复制文本 </Button>
        </div>
      </div>
    </div>
  </ToolCard>
</template>
<script lang="ts">
import Vue from "vue";
import { clipboard } from "~/utils";
import { UrlStoreKey, UrlCodecMeta } from "@/configs";

interface DataType {
  url: string;
  result: string;
  visible: boolean;
  history: Array<string>;
  Codec: typeof Codec
}


enum Codec {
  DECODE,
  ENCODE,
}

export default Vue.extend({
  head() {
    return UrlCodecMeta;
  },
  data(): DataType {
    return {
      url: "",
      result: "",
      visible: false,
      history: [],
      Codec
    };
  },
  methods: {
    setUrl(val: string) {
      this.url = val ? val : "";
      this.result = "";
    },

    /**
     * 解码
     */
    urlCodec(type: Codec) {
      try {
        switch (type) {
          case Codec.DECODE:
            this.result = decodeURI(this.url);
            return;
          case Codec.ENCODE:
            this.result = encodeURI(this.url);
            return;
        }
      } catch (e) {
        this.$message.error("URL格式错误, 无法解析的URL");
      }
    },
    /**
     * 点击拷贝按钮
     */
    onCopyText() {
      let text = this.url;
      let flag: boolean = this.setClipboardText(this.result);
      if (flag) {
        this.$storeArrayItem(UrlStoreKey, text);
      }
    },
    /**
     * 设置粘贴板
     */
    setClipboardText(text: string) {
      return clipboard(text);
    },
    /**
     * 点击展示历史记录
     */
    showHistory() {
      this.history = this.$getArrayStore(UrlStoreKey);
      this.visible = true;
    },
    /**
     * 关闭历史记录
     */
    onClose() {
      this.visible = false;
    },
    /**
     * 确认删除记录
     */
    confirmDel() {
      this.$storeLocal(UrlStoreKey, []);
      this.showHistory();
    },
  },
});
</script>
<style lang="less" scoped>
.url-box {
  display: flex;
  height: 100%;

  .input-box {
    border-right: @border;
    position: relative;
    display: flex;
    flex-direction: column;
  }

  &>div {
    width: 50%;
  }

  &>div:first-of-type {
    border-right: @border;
  }

  .url-input {
    white-space: pre-wrap;
    outline: none;
    border: none;
    width: 100%;
    flex: 1;
    padding: 10px;
    overflow-y: auto;
    font-size: 14px;
    color: #000;
    resize: none;
  }

  .url-output {
    position: relative;
    overflow: hidden;

    pre {
      padding: 10px;
      height: calc(100% - 60px);
      margin: 0;
    }
  }
}
</style>
