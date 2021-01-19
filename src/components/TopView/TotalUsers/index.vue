<template>
  <div>
    <common-card title="累计用户" value="9,100,020">
      <template>
        <v-chart class="vue-echarts" :options="options"></v-chart>
      </template>
      <template v-slot:total>
        <div class="total-users-footer">
          <span>日同比</span>
          <span class="emphasis">4.21%</span>
          <div class="increase el-icon-top"></div>
          <span :style="{ marginLeft: '10px' }">月同比</span>
          <span class="emphasis">28.21%</span>
          <div class="reduce el-icon-bottom"></div>
        </div>
      </template>
    </common-card>
  </div>
</template>

<script>
import comonCardMixins from "../../../minxins/comonCardMixins.js";
import getOptions from "./mock/data.js";
export default {
  mixins: [comonCardMixins],
  data() {
    return {
      options: getOptions(),
    };
  },
};
</script>

<style lang="scss" scoped>
.total-users-footer {
  display: flex;
  align-items: center;
  .emphasis {
    font-size: 14px;
    margin: 0px 3px;
    font-weight: bold;
  }
}
.increase {
  color: rgb(37, 194, 37);
}
.reduce {
  color: rgb(252, 32, 32);
}
</style>
