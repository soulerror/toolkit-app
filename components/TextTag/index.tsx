import './index.less'
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