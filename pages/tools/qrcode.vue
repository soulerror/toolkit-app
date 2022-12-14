<template>
  <ToolCard
    title="二维码生成识别工具"
    :drawerVisible="drawerVisibility"
    @drawerClose="onClose"
    :drawerData="generateHis"
    @clickDrawerItem="setQrCodeText"
  >
    <div class="qr-code-box">
      <div class="input-box">
        <a-textarea
          v-model="text"
          :maxLength="1000"
          :resize="false"
          class="code-input"
        ></a-textarea>
        <div class="config-card">
          <span>二维码配置</span>
          <a-form mode="inline">
            <a-form-item label="大小"></a-form-item>
          </a-form>
        </div>
      </div>
      <div class="output-box">
        <canvas id="code" v-show="visibility"></canvas>
      </div>
    </div>
    <Button @click="generateQrCode"><a-icon type="qrcode" /> 生成二维码</Button>
    <Button @click="downloadPng"><a-icon type="download" /> 下载二维码</Button>
    <Button @click="showHistory"><a-icon type="history" /> 查看历史</Button>
  </ToolCard>
</template>
<script lang="ts">
import Vue from "vue";
import QrCode from "qrcode";
import { QrCodeStoreKey } from "@/configs";
var canvas: any = null;
interface DataType {
  width: number | undefined;
  text: string;
  visibility: boolean;
  drawerVisibility: boolean;
  generateHis: Array<string>;
}

const defaultOption: QrCode.QRCodeRenderersOptions = {
  width: 200,
  margin: 1,
  scale: 1,
  color: {
    dark: "",
  },
};

export default Vue.extend({
  data(): DataType {
    return {
      width: 200,
      text: "",
      visibility: false,
      drawerVisibility: false,
      generateHis: [],
    };
  },
  mounted() {
    canvas = document.getElementById("code");
  },
  watch: {
    text() {
      this.visibility = false;
    },
  },
  methods: {
    generateQrCode(text?: string) {
      text = text ? text : this.text;
      if (text)
        QrCode.toCanvas(canvas, text, defaultOption, (error) => {
          console.log(error);
          if (error) this.$message.error("生成二维码失败,请重试");
          else {
            this.visibility = true;
            this.$storeArrayItem(QrCodeStoreKey, text);
          }
        });
      else this.$message.error("请输入需要生成二维码的字符");
    },
    downloadPng() {
      let { width, text } = this;
      let cav: any = document.createElement("canvas");
      if (text)
        QrCode.toCanvas(cav, text, { width }, (error) => {
          if (!error) {
            let doc = document.createElement("a");
            doc.href = cav.toDataURL();
            doc.download = "二维码.png";
            doc.click();
          }
        });
      else this.$message.error("请输入需要生成二维码的字符");
    },
    setQrCodeText(text: string) {
      this.text = text;
    },
    onClose() {
      this.drawerVisibility = false;
    },
    showHistory() {
      this.generateHis = this.$getArrayStore(QrCodeStoreKey);
      this.drawerVisibility = true;
    },
  },
});
</script>
<style lang="less" scoped>
@import url("@/assets/css/variable.less");
.qr-code-box {
  height: 100%;
  display: flex;

  .input-box,
  .output-box {
    width: 50%;
    padding: 30px 20px;
  }
  .input-box {
    border-right: @border;
    display: flex;
    flex-direction: column;

    .code-input {
      height: 50%;
      resize: none;
      margin: 0 auto;
      display: block;
    }
  }

  .config-card {
    margin-top: 30px;
    flex: 1;
    border: @border;
    // box-shadow: @shadowColor;
    padding: 10px;
    border-radius: 12px;

    & > span {
      width: 100%;
      display: block;
      line-height: 30px;
      font-weight: bold;
      border-bottom: @border;
    }
  }
}
</style>