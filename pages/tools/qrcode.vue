<template>
  <ToolCard
    title="二维码生成识别工具"
    confirmable
    :drawerVisible="drawerVisibility"
    @drawerClose="onClose"
    :drawerData="textHis"
    @clickDrawerItem="setQrCodeText"
    @confirmClean="confirmClean"
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
        <div class="bottom-btns bottom-btns-right">
          <Button @click="generateQrCode"
            ><a-icon type="qrcode" /> 生成二维码</Button
          >
        </div>
      </div>
      <div class="output-box">
        <Card title="二维码配置" class="config-card">
          <div class="config-form">
            <a-form :colon="false" layout="inline">
              <a-form-item>
                <template #label>
                  <a-icon type="bg-colors" /> 二维码颜色
                </template>
                <ColorPicker
                  popper-class="color-pick-box"
                  v-model="codeOptions.color.dark"
                />
              </a-form-item>
              <a-form-item>
                <template #label><a-icon type="font-size" /> 下载规格</template>
                <a-select style="width: 80px" v-model="codeOptions.width">
                  <a-select-option
                    v-for="(size, index) in sizeOptions"
                    :key="index"
                    :value="size"
                  >
                    {{ size }}
                  </a-select-option>
                </a-select>
              </a-form-item>
            </a-form>
          </div>
        </Card>

        <Card title="二维码预览" class="code-box">
          <div class="canvas-box">
            <canvas id="code" v-show="visibility"></canvas>
          </div>
        </Card>

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
  text: string;
  visibility: Boolean;
  drawerVisibility: Boolean;
  generateHis: Array<StoreType>;
  codeOptions: QrCode.QRCodeRenderersOptions;
  sizeOptions: Array<Number>;
  textHis: Array<String>;
}

const defaultOptions: QrCode.QRCodeRenderersOptions = {
  width: 300,
  scale: 1,
  color: {
    dark: "",
  },
};

interface StoreType {
  value: string;
  config: QrCode.QRCodeRenderersOptions;
}

const sizeOptions: Array<Number> = [
  100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 1100, 1200,
];

export default Vue.extend({
  components: {
    ColorPicker,
  },
  data(): DataType {
    return {
      text: "",
      visibility: false,
      drawerVisibility: false,
      generateHis: [],
      codeOptions: {
        ...defaultOptions,
      },
      sizeOptions,
      textHis: [],
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
        QrCode.toCanvas(
          canvas,
          text,
          { ...this.codeOptions, width: defaultOptions.width },
          (error) => {
            if (error) this.$message.error("生成二维码失败,请重试");
            else {
              this.visibility = true;
              this.$storeArrayItem(QrCodeStoreKey, {
                value: text,
                config: this.codeOptions,
              }) as StoreType;
            }
          }
        );
      else this.$message.error("请输入需要生成二维码的字符");
    },
    downloadPng() {
      let { text } = this;
      let cav: any = document.createElement("canvas");
      if (text)
        QrCode.toCanvas(cav, text, this.codeOptions, (error) => {
          if (!error) {
            let doc = document.createElement("a");
            doc.href = cav.toDataURL();
            doc.download = "二维码.png";
            doc.click();
          }
        });
      else this.$message.error("请输入需要生成二维码的字符");
    },
    setQrCodeText(text?: string, index?: number) {
      this.text = text ? text : "";
      this.codeOptions =
        typeof index === "number"
          ? this.generateHis[index].config
          : defaultOptions;
    },
    onClose() {
      this.drawerVisibility = false;
    },
    showHistory() {
      let hisArr = this.$getArrayStore(QrCodeStoreKey) as Array<StoreType>;
      this.textHis = hisArr.map((item) => item.value);
      this.generateHis = hisArr;
      this.drawerVisibility = true;
    },
    confirmClean() {
      this.$storeLocal(QrCodeStoreKey, []);
      this.showHistory();
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
    display: flex;
    flex-direction: column;
    position: relative;
    padding-top: 30px;

    .code-input {
      resize: none;
      margin: 0 auto;
      display: block;
      flex: 1;
    }
  }
  .output-box {
    height: 10;
    display: flex;
    justify-content: center;
    flex-direction: column;

    .code-box-parent {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .code-box {
      flex: 1;
      .canvas-box {
        width: 302px;
        height: 302px;
      }
      #code {
        z-index: -1;
      }
    }
  }

  .config-card {
    margin: 30px 0;
    height: 200px;
    border: @border;
    border-radius: 12px;

    & > span {
      width: 100%;
      display: block;
      line-height: 30px;
      border-bottom: @border;
      padding: 0 1em;
    }
  }

  .config-form {
    height: 100%;
    padding: 1em;
  }
  .clean-btn {
    right: 25px;
    top: 35px;
    z-index: 100;
  }

  .color-pick-box {
    width: 800px;
  }
}
</style>