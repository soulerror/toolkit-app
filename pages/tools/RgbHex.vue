<template>
  <!-- rgb颜色转换 -->
  <ToolCard>
    <section slot="title">RGB Hex互转</section>
    <div class="rgb-content">
      <a-form layout="horizontal" style="width:200px">
        <a-form-item label="RGB">
          <a-input></a-input>
        </a-form-item>
        <a-form-item>
          <a-icon type="forward" />
         <a-icon type="backward" />
        </a-form-item>

        <a-form-item label="HEX">
          <a-input></a-input>
        </a-form-item>
      </a-form>
    </div>
  </ToolCard>
</template>
<script lang="ts">
import Vue from "vue";
export default Vue.extend({});
</script>
<style lang="less" scoped>
</style>