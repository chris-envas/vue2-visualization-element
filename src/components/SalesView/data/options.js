export default function getData() {
  return {
    title: {
      text: "年度销售额",
      textStyle: {
        fontSize: 12,
        color: "#666"
      }
    },
    /*
     * X轴坐标系
     *   @axisLine {Object} Y轴坐标轴线段及数据源文字
     *    @lineStyle {Boolean}   样式控制
     *   @axisTick {Object} X轴坐标轴对应数据节点短竖线
     *    @alignWithLabel {Boolean}   数据集与短竖线居中对齐
     **/
    xAxis: {
      type: "category",
      axisLine: {
        lineStyle: {
          color: "#999"
        }
      },
      axisTick: {
        alignWithLabel: true,
        lineStyle: {
          color: "#999"
        }
      },
      data: [
        "1月",
        "2月",
        "3月",
        "4月",
        "5月",
        "6月",
        "7月",
        "8月",
        "9月",
        "10月",
        "11月",
        "12月"
      ]
    },
    /*
     * Y轴坐标系
     *   @axisLine {Object} Y轴坐标轴线段及数据源文字
     *    @show {Boolean}   隐藏坐标轴线段
     *   @axisTick {Object} Y轴坐标轴对应数据节点短竖线
     *     @show {Boolean}   隐藏短竖线
     *   @splitLine {Object} 控制Y轴区域线段样式
     **/
    yAxis: {
      axisLine: {
        show: false
      },
      axisTick: {
        show: false
      },
      splitLine: {
        lineType: {
          type: "dotted",
          color: "#eee"
        }
      }
    },
    series: [
      {
        type: "bar",
        data: [100, 200, 300, 500, 675, 221, 456, 766, 345, 765, 978, 123],
        barWidth: "35%"
      }
    ],
    color: "#409eff",
    grid: {
      left: 60,
      top: 70,
      right: 60,
      bottom: 50
    }
  };
}
