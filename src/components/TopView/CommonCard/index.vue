<template>
  <div class="common-card">
    <div class="title">
      <span class="icon el-icon-s-marketing"></span>
      {{ title }}
    </div>
    <div class="value">{{ value }}</div>
    <div class="chart">
      <slot></slot>
    </div>
    <div class="line" />
    <div class="total">
      <slot name="total"></slot>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      default: "title",
    },
    value: {
      type: String,
      default: "value",
    },
  },
};
</script>
<style lang="scss" scoped>
.title {
  font-size: 12px;
  .icon {
    font-size: 12px;
    color: rgb(17, 16, 16);
    vertical-align: middle;
  }
}
.value {
  font-size: 18px;
  color: #000;
  margin: 5px 0px;
  letter-spacing: 1px;
  font-size: 600;
}
.chart {
  height: 50px;
  max-height: 50px;
  background: #eeeeee;
}
.line {
  margin: 10px 0;
  border: 1px solid #eeeeee;
}
.total {
  font-size: 12px;
  color: #666;
}
</style>
