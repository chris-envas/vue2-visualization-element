<template>
  <div>
    <common-card title="累计订单" value=" 39,133,148">
      <template>
        <v-chart class="vue-echarts" :options="options"></v-chart>
      </template>
      <template v-slot:total>
        <div>
          <span>昨日订单量</span>
          <span class="emphasis"> 10,234,000</span>
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

<style lang="scss" scoped></style>
