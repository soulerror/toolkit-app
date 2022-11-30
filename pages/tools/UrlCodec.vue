 <template>
  <!-- Url编解码工具 -->
  <div>
    <section class="tool-header">Url编解码工具</section>
    <div class="tool-box url-box">
      <div>
        <div class="bottom-btns">
          <Button><a-icon type="swap" /> 编码转换 </Button>
        </div>
      </div>
      <div>
        <div class="bottom-btns">
          <Button> <a-icon type="copy" /> 复制文本 </Button>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="less" scoped>
@import url("@/assets/css/variable.less");
.url-box {
  display: flex;

  & > div {
    width: 50%;
  }
  & > div:first-of-type {
    border-right: 1px solid @borderColor;
  }

  .bottom-btns {
    display: flex;
    justify-content: flex-end;
    padding: 0 20px;
  }
}
</style>