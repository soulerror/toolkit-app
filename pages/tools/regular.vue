<template>
  <ToolCard title="正则表达式校验">
    <div class="reg-input-box">
      <p>正则表达式</p>
      <a-textarea class="scroll-style"></a-textarea>
    </div>
    <div class="content-box">
      <div class="input-box">
        <textarea
          v-model="content"
          aria-multiline="true"
          white-space="pre-wap"
          placehoder="请输入需要验证的文本"
        >
        </textarea>
        <div class="bottom-btns bottom-btns-right">
          <Button @click="contentCheck" type="check"> 内容验证 </Button>
        </div>
      </div>
      <div class="output-box" v-html="result"></div>
    </div>
  </ToolCard>
</template>
<script lang="ts">
import Vue from "vue";
import { RegularMeta } from "@/configs";

interface DataType {
  content: string;
  regular: string;
  result: string;
  letterCase: boolean;
  global: boolean;
}
export default Vue.extend({
  head: () => RegularMeta,
  data(): DataType {
    return {
      content: "121321科技了看大家啊是lkfj1231231lkdja f2呵呵呵的213额23",
      regular: "",
      result: "",
      letterCase: false,
      global: true,
    };
  },
  computed: {
    matchContent() {},
  },
  methods: {
    contentCheck() {
      let { regular, content, global, letterCase } = this;
      if (!regular) {
        this.$message.error("正则表达式为空");
        return;
      }
      if (!content) {
        this.$message.error("校验内容为空");
      }
      let reg: RegExp;
      if (letterCase || global) {
        let setting = `${letterCase ? "i" : ""}${global ? "g" : ""}`;
        reg = new RegExp(regular, setting);
      } else {
        reg = new RegExp(regular);
      }
      let matchArr = content.match(reg);
      this.result = highLightKeywords(content, matchArr);
    },
  },
});
function highLightKeywords(
  content: string,
  matchArr: RegExpMatchArray | null
): string {
  console.log(matchArr);
  matchArr &&
    matchArr.forEach((keyword) => {
      content = content.replace(
        keyword,
        `<span class='highlight-text'>${keyword}</span>`
      );
    });
  return content;
}
</script>
<style lang="less" scoped>
.tool-box {
  .reg-input-box {
    display: flex;
    justify-content: center;
    align-items: center;
    height: @header-1st-h;
    padding: 20px;
    border-bottom: @border;
    .reg-input {
      width: 800px;
      margin: 0 auto;
    }
    p {
      width: fit-content;
      white-space: nowrap;
      margin: 0;
    }
    textarea {
      resize: none;
    }
  }
  .content-box {
    height: calc(100% - @header-1st-h);
    display: flex;

    textarea {
      flex: 1;
      width: 100%;
      outline: none;
      border: none;
      resize: none;
      padding: 10px;
    }

    .input-box,
    .output-box {
      height: 100%;
      width: 50%;
    }
    .input-box {
      border-right: @border;
      display: flex;
      flex-direction: column;
    }
    .output-box {
      padding: 10px;
    }
  }
}
</style>
