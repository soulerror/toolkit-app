<template>
  <!-- Url编解码工具 -->
  <ToolCard title="Base64编解码工具" :drawerVisible="visible" @drawerClose="onClose" :drawerData="history"
    @clickDrawerItem="setContent" @confirmClean="confirmDel">
    <div class="url-box">
      <div class="input-box">
        <CloseButton v-show="content" @click="setContent" />
        <textarea class="url-input scroll-style" contenteditable="true" aria-multiline="true" white-space="pre-wap"
          placeholder="请输入需要编解码的内容" v-model="content"></textarea>
        <div class="bottom-btns bottom-btns-right">
          <Button @click="contentCodec(Codec.ENCODE)" type="lock">
            Base64编码
          </Button>
          <Button @click="contentCodec(Codec.DECODE)" type="unlock">
            Base64解码
          </Button>
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
import { Base64StoreKey, UrlCodecMeta } from "@/configs";
import { encode, decode } from "js-base64";

interface DataType {
  content: string;
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
      content: "",
      result: "",
      visible: false,
      history: [],
      Codec
    };
  },
  methods: {
    setContent(val: string) {
      this.content = val ? val : "";
      this.result = "";
    },
    /**
     * 解码
     */
    contentCodec(type: Codec) {
      try {
        switch (type) {
          case Codec.DECODE:
            this.result = decode(this.content);
            return;
          case Codec.ENCODE:
            this.result = encode(this.content);
            return;
        }
      } catch (e) {
        this.$message.error("格式错误, 无法对内容加解密");
      }
    },
    /**
     * 点击拷贝按钮
     */
    onCopyText() {
      let text = this.content;
      let flag: boolean = this.setClipboardText(this.result);
      if (flag) {
        this.$storeArrayItem(Base64StoreKey, text);
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
      this.history = this.$getArrayStore(Base64StoreKey);
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
      this.$storeLocal(Base64StoreKey, []);
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
      height: calc(100% - @button-h - 20px);
      margin: 0;
    }
  }
}
</style>
