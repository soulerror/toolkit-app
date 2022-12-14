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
        <div class="clean-btn" v-show="text" @click="setQrCodeText()">
          <a-icon type="close" />
        </div>
        <a-textarea
          v-model="text"
          :maxLength="1000"
          class="code-input"
          placeholder="请输入需要生成二维码的文本 最多1000个字符"
        ></a-textarea>
        <div class="config-card">
          <span>二维码配置</span>
          <div class="config-form">
            <a-form layout="inline">
              <a-form-item label="颜色">
                <ColorPicker v-model="downloadConfig.color.dark" />
              </a-form-item>
              <a-form-item label="大小">
                <a-select style="width: 120px" v-model="downloadConfig.width">
                  <a-select-option
                    v-for="(size, index) in sizeOptions"
                    :key="index"
                    :value="size"
                  >
                    {{ size }}
                  </a-select-option>
                </a-select>
              </a-form-item>
              <a-form-item label="像素间隔">
                <a-input v-model="downloadConfig.margin"></a-input>
              </a-form-item>
              <a-form-item label="大小">
                <a-input></a-input>
              </a-form-item>
            </a-form>
          </div>
        </div>
        <div class="bottom-btns bottom-btns-right">
          <Button @click="generateQrCode"
            ><a-icon type="qrcode" /> 生成二维码</Button
          >
        </div>
      </div>
      <div class="output-box">
        <div class="code-box">
          <div class="canvas-box">
            <canvas id="code" v-show="visibility"></canvas>
          </div>
        </div>
        <div class="bottom-btns">
          <Button @click="downloadPng"
            ><a-icon type="download" /> 下载二维码</Button
          >
          <Button @click="showHistory"
            ><a-icon type="history" /> 历史记录</Button
          >
        </div>
      </div>
    </div>
  </ToolCard>
</template>
<script lang="ts">
import { QrCodeStoreKey } from "@/configs";
import QrCode from "qrcode";
import Vue from "vue";
import { ColorPicker } from "element-ui";
var canvas: any = null;

interface DataType {
  width: number | undefined;
  text: string;
  visibility: boolean;
  drawerVisibility: boolean;
  generateHis: Array<string>;
  downloadConfig: QrCode.QRCodeRenderersOptions;
  sizeOptions: Array<Number>;
}

const defaultOption: QrCode.QRCodeRenderersOptions = {
  width: 400,
  scale: 1,
  color: {
    dark: "",
  },
};

const sizeOptions: Array<Number> = [
  100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 1100, 1200,
];

export default Vue.extend({
  components: {
    ColorPicker,
  },
  data(): DataType {
    return {
      width: 200,
      text: "",
      visibility: false,
      drawerVisibility: false,
      generateHis: [],
      downloadConfig: {
        ...defaultOption,
      },
      sizeOptions,
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
        QrCode.toCanvas(cav, text, this.downloadConfig, (error) => {
          if (!error) {
            let doc = document.createElement("a");
            doc.href = cav.toDataURL();
            doc.download = "二维码.png";
            doc.click();
          }
        });
      else this.$message.error("请输入需要生成二维码的字符");
    },
    setQrCodeText(text?: string) {
      this.text = text ? text : "";
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
    height: 100%;
    width: 50%;
    padding: 0 20px;
  }
  .input-box {
    border-right: @border;
    display: flex;
    flex-direction: column;
    position: relative;
    padding-top: 30px;

    .code-input {
      height: 40%;
      resize: none;
      margin: 0 auto;
      display: block;
    }
  }
  .output-box {
    height: 10;
    display: flex;
    justify-content: center;
    flex-direction: column;

    .code-box {
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: center;

      .canvas-box {
        width: 402px;
        height: 402px;
        border-radius: 12px;
        border: @border;
      }
      #code {
        z-index: -1;
      }
    }
  }

  .config-card {
    margin:30px 0;
    flex: 1;
    border: @border;
    border-radius: 12px;

    & > span {
      width: 100%;
      display: block;
      line-height: 30px;
      font-weight: bold;
      border-bottom: @border;
      padding: 0 1em;
    }
  }

  .config-form {
    height: 100%;
    padding: 1em;
  }
  .clean-btn{
    right:25px;
    top:35px;
    z-index:100;
  }
}
</style>