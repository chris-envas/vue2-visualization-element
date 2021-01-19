<template>
  <div>
    <common-card title="累计销售额" value="$ 32.023,188">
      <template>
        <div class="compare-wrapper">
          <div class="compare">
            <span class="text">日同比:</span>
            <span class="emphasis">5.5%</span>
            <div class="increase el-icon-top"></div>
          </div>
          <div class="compare">
            <span class="text">月同比:</span>
            <span class="emphasis">-4.5%</span>
            <div class="reduce el-icon-bottom"></div>
          </div>
        </div>
      </template>
      <template v-slot:total>
        <div>
          <span>昨日销售额</span>
          <span class="emphasis"> 30,234,000</span>
        </div>
      </template>
    </common-card>
  </div>
</template>

<script>
import comonCardMixins from "../../../minxins/comonCardMixins.js";
export default {
  mixins: [comonCardMixins],
};
</script>

<style lang="scss" scoped>
.compare-wrapper {
  background-color: #eeeeee;
  height: 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  .compare {
    padding: 0 10px;
    font-size: 12px;
    .text {
      margin-right: 3px;
    }
    .emphasis {
      margin: 0 3px;
      letter-spacing: 1px;
      font-weight: 600;
    }
  }
}
span {
  font-size: 12px;
}
.money {
  margin-left: 5px;
  color: #333;
  font-weight: 700;
}
.increase {
  color: rgb(37, 194, 37);
}
.reduce {
  color: rgb(252, 32, 32);
}
</style>
