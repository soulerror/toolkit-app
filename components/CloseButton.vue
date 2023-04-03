<template>
  <div class="clean-btn" v-show="sql" @click="_click">
    <a-icon type="close" />
  </div>
</template>
<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  methods: {
    _click() {
      this.$emit("click");
    },
  },
});
</script>