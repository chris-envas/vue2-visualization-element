<template>
  <div>
    <common-card title="今日交易用户数量" value="39,00,00">
      <template>
        <div
          id="today-users-chart"
          :style="{ width: '100%', height: '100%' }"
        ></div>
      </template>
      <template v-slot:total>
        <span>退货率</span>
        <span class="emphasis">1.21%</span>
      </template>
    </common-card>
  </div>
</template>

<script>
import comonCardMixins from "../../../minxins/comonCardMixins.js";
export default {
  mixins: [comonCardMixins],
  mounted() {
    const chartDom = document.getElementById("today-users-chart");
    const chart = this.$echarts.init(chartDom);
    chart.setOption({
      color: ["#3398DB"],
      series: [
        {
          type: "bar",
          data: [
            230,
            321,
            987,
            262,
            356,
            289,
            543,
            678,
            456,
            980,
            234,
            546,
            342,
            124,
          ],
          barWidth: "60%",
        },
      ],
      xAxis: [
        {
          type: "category",
          data: [
            "00.00",
            "01:00",
            "02.00",
            "03:00",
            "04.00",
            "05:00",
            "06.00",
            "07:00",
            "08.00",
            "09:00",
            "10:00",
            "11:00",
            "12:00",
            "13:00",
            "14:00",
          ],
          show: false,
        },
      ],
      yAxis: [
        {
          show: false,
        },
      ],
      grid: {
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
      },
    });
  },
};
</script>
