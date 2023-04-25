<script lang="tsx">
import Vue from "vue";
export default Vue.extend({
  props: {
    hider: {
      type: String,
      default: "",
    },
    cover: {
      type: String,
      default: "",
    },
  },
  render() {
    return (
      <div class="head-tab" onClick={(e: Event) => this.$emit("click", e)}>
        <span class="color-text">{this.hider}</span>
        <p class="color-text">{this.cover}</p>
      </div>
    );
  },
});
</script>
<style lang="less" scoped>
.head-tab {
  .color-text{
    background-clip: text;
    font-weight: bold;
    color: transparent;
    // background-image: linear-gradient(90deg, #533ef9 -30%,#8476FF 30%,#46DC74 100%);
    background-image: linear-gradient(90deg, #FFC701 -30%, #46DC74 30%, #24A7F6 60%, #533ef9 100%);;
  }
  display: flex;
  flex-direction: column;
  p,
  span {
    margin: 0;
    transition: all 100ms ease-in-out;
  }
  span {
    display: block;
    opacity: 0;
    transform: translateY(10px);
  }
  p {
    transform: translateY(-10px);
  }
  &:hover {
    color: @mainColor;
  }
  &:hover > p {
    transform: none;
  }
  &:hover > span {
    opacity: 1;
    transform: none;
  }
}
</style>