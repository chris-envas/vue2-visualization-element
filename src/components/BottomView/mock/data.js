export function getOptions() {
  return {
    xAxis: {
      type: "category",
      boundaryGap: false
    },
    yAxis: {
      show: false,
      min: 0,
      max: 300
    },
    series: [
      {
        type: "line",
        data: [100, 102, 152, 190, 123, 101, 102, 130, 140],
        areaStyle: {
          color: "#409eff"
        },
        lineStyle: {
          color: "#999"
        },
        itemStyle: {
          opacity: 0
        },
        smooth: false
      }
    ],
    grid: {
      top: 0,
      left: 0,
      bottom: 0,
      right: 0
    }
  };
}

export function getNumberOptions() {
  return {
    xAxis: {
      type: "category",
      boundaryGap: false
    },
    yAxis: {
      show: false,
      min: 0,
      max: 300
    },
    series: [
      {
        type: "line",
        data: [100, 102, 152, 190, 123, 101, 102, 130, 140],
        areaStyle: {
          color: "#409eff"
        },
        lineStyle: {
          color: "#999"
        },
        itemStyle: {
          opacity: 0
        },
        smooth: false
      }
    ],
    grid: {
      top: 0,
      left: 0,
      bottom: 0,
      right: 0
    }
  };
}

export function getCategoryOptions() {
  // 饼图数据格式需要遵循特殊格式
  const data = [
    {
      legendname: "耐克",
      value: 1000,
      percent: "10%",
      itemStyle: {
        color: "#ffe227"
      },
      name: "耐克 | 10%"
    },
    {
      legendname: "阿迪达斯",
      value: 3700,
      percent: "37%",
      itemStyle: {
        color: "#eb596e"
      },
      name: "阿迪达斯 | 37%"
    },
    {
      legendname: "特步",
      value: 300,
      percent: "0.3%",
      itemStyle: {
        color: "#4d375d"
      },
      name: "特步 | 0.3%"
    },
    {
      legendname: "361",
      value: 2000,
      percent: "20%",
      itemStyle: {
        color: "#121013"
      },
      name: "361 | 20%"
    },
    {
      legendname: "乔丹",
      value: 1000,
      percent: "10%",
      itemStyle: {
        color: "#ec4646"
      },
      name: "乔丹 | 10%"
    },
    {
      legendname: "安踏",
      value: 1000,
      percent: "10%",
      itemStyle: {
        color: "#51c2d5"
      },
      name: "安踏 | 10%"
    }
  ];
  return {
    title: [
      {
        text: "品类分布",
        testStyle: {
          fontSize: 13,
          color: "#666"
        },
        left: 20,
        top: 20
      },
      // 控制标题坐标及样式
      {
        text: "累计订单量",
        textStyle: {
          fontSize: 14,
          color: "#999"
        },
        subtext: "320",
        subtextStyle: {
          fontSize: 28,
          color: "#333"
        },
        textAlign: "center",
        x: "34,4%",
        y: "43%"
      }
    ],
    /*饼图
     * @label {Object} 控制数 据文字相关展示
     *    @normal {Object}
     *      @show {Boolean} 是否显示文字
     *      @position {String} 文字显示位置 outter（外围） inner（内圈）
     *      @formatter {Function} 自定义饼图文字
     * @center {Array} 饼图的中心（圆心）坐标，数组的第一项是横坐标，第二项是纵坐标。 https://echarts.apache.org/zh/option.html#series-pie.center
     * @radius {Array} 饼图的半径 https://echarts.apache.org/zh/option.html#series-pie.radius
     *    @params 外层圈半径
     *    @params 圆直径距离 根据 wrapper宽高占比自调
     * @clockwise 控制饼图顺逆时针显示数据
     * @itemStyle 各圆环部分相关样式
     * @labelLine 标签视觉引导样式 https://echarts.apache.org/zh/option.html#series-pie.labelLine
     */
    series: [
      {
        name: "品类分布",
        type: "pie",
        data,
        label: {
          normal: {
            show: true,
            position: "outter",
            formatter(params) {
              return params.data.legendname;
            }
          }
        },
        center: ["35%", "50%"],
        radius: ["45%", "60%"],
        clockwise: false,
        itemStyle: {
          borderWidth: 4,
          borderColor: "#fff"
        },
        labelLine: {
          length: 5,
          length1: 5,
          smooth: true
        }
      }
    ],
    /*
     *   @legend {Object} 饼图分类列表
     *      @type {String} 类型
     *      @orient {String} 排列方式
     *      @height {Number} 宽高
     *      @left {String} 位移
     *      @top {String} 位移
     *      @textStyle {Object} 文字样式等
     *
     */
    legend: {
      type: "scroll",
      orient: "vertical",
      height: 250,
      left: "75%",
      top: "middle",
      textStyle: {
        color: "#999"
      }
    },
    /*
     *   @tooltip {Object} 开启触摸悬浮信息提示
     *      @trigger {String} 触发提示部分
     *      @formatter {Function} 自定义提示信息 样式 和 文案
     */
    tooltip: {
      trigger: "item",
      formatter: function(params) {
        const str = `${params.seriesName}<br />${params.marker} ${params.data.legendname}<br />数量：${params.data.value}<br />占比：${params.data.percent} `;
        return str;
      }
    }
  };
}
