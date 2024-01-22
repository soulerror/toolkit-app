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
        <span>{this.hider}</span>
        <p>{this.cover}</p>
      </div>
    );
  },
});
</script>
<style lang="less" scoped>
.head-tab {
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
    background-clip: text;
    color: transparent;
    // background-image: linear-gradient(
    //   90deg,
    //   #ffc701 -30%,
    //   #46dc74 30%,
    //   #24a7f6 60%,
    //   #533ef9 100%
    // );
    background-image: linear-gradient(90deg, #fff 0%, #533ef9 100%);
  }
  p {
    transform: translateY(-10px);
    background-clip: text;
    color: transparent;
    // background-image: linear-gradient(
    //   90deg,
    //   #533ef9 -30%,
    //   #24a7f6 30%,
    //   #46dc74 60%,
    //   #ffc701 100%
    // );
    background-image: linear-gradient(90deg, #533ef9 0%, #fff 100%);
    font-weight: bold;
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