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