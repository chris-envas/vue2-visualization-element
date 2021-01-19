export default function getData() {
  return {
    // X轴
    xAxis: {
      //   类目
      type: "category",
      // 是否隐藏
      show: false,
      // 隐藏边距
      boundaryGap: false
    },
    //   Y轴
    yAxis: {
      //   是否隐藏
      show: false
    },
    series: [
      {
        // 线段类型
        type: "line",
        //   数据
        data: [
          213,
          567,
          456,
          877,
          987,
          643,
          231,
          456,
          321,
          800,
          897,
          231,
          457,
          568
        ],
        //   区域填充色
        areaStyle: {
          color: "purple"
        },
        // 去掉坐标点
        symbol: "none",
        //   曲线平滑处理
        smooth: true,
        //   坐标点处理
        itemStyle: {
          opacity: 0
        }
      }
    ],
    //   布局属性
    grid: {
      top: 0,
      right: 0,
      left: 0,
      bottom: 0
    }
  };
}
