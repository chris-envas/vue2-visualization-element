export default function getData() {
  return {
    grid: {
      left: 0,
      right: 0,
      top: 0,
      bottom: 0
    },
    xAxis: {
      type: "value",
      show: false
    },
    yAxis: {
      type: "category",
      show: false
    },
    series: [
      {
        type: "bar",
        data: [200],
        barWidth: 10,
        // stack 用于合并同一位置
        stack: "总量",
        itemStyle: {
          color: "rgb(37, 194, 37)"
        }
      },
      {
        type: "bar",
        data: [250],
        barWidth: 10,
        stack: "总量",
        itemStyle: {
          color: "#9a9696"
        }
      },
      // 绘制自定义图形
      {
        // type 需声明 custom
        type: "custom",
        data: [200],
        stack: "总量",
        renderItem: (params, api) => {
          // 获取值
          const value = api.value(0);
          // 计算偏移位置
          const endPoint = api.coord([value, 0]);
          /*
           * 返回绘制数据
           *  @type {String} 自定义一组图形
           *  @position {String} 自定义图形出现的位置
           *  @children {Array} 仅当type为group生效的 多图形数据源
           *    @shape {Object} 自定义图形数据源
           *      @d {String} SVG 数据
           *      @y,x {Number} 自定义图形偏移量
           *      @w,h {Number} 自定义图形宽高
           *      @layout {String} 默认center cover默认填充
           *    @style {Object} 自定义样式
           */
          return {
            type: "group",
            position: endPoint,
            children: [
              {
                type: "path",
                shape: {
                  d: "M128 320.001l383.744 383.744 383.744-383.744h-767.488z",
                  x: -5,
                  y: -15,
                  width: 10,
                  height: 10,
                  layout: "cover"
                },
                style: {
                  fill: "rgb(37, 194, 37)"
                }
              },
              {
                type: "path",
                shape: {
                  d:
                    "M896 668.16l-26.432 35.84H153.152L128 669.44 488.128 320h52.928L896 668.16z",
                  x: -5,
                  y: 5,
                  width: 10,
                  height: 10,
                  layout: "cover"
                },
                style: {
                  fill: "rgb(37, 194, 37)"
                }
              }
            ]
          };
        }
      }
    ]
  };
}
