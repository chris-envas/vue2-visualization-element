export default function getData() {
  return {
    legend: {},
    tooltip: {},
    dataset: {
      // Provide data.
      source: [
        ["Product", "2015", "2016", "2017"],
        ["Matcha Latte", ...randomize()],
        ["Milk Tea", ...randomize()],
        ["Cheese Cocoa", ...randomize()],
        ["Walnut Brownie", ...randomize()]
      ]
    },
    // Declare X axis, which is a category axis, mapping
    // to the first column by default.
    // 定义X轴的数据显示类型
    xAxis: {
      type: "category",
      axisTick: {
        alignWithLabel: true
      }
    },
    // Declare Y axis, which is a value axis.
    yAxis: {},
    // Declare several series, each of them mapped to a
    // column of the dataset by default.
    // series 控制着数据源表现得图表行为, bar块状图表
    series: [{ type: "bar" }, { type: "bar" }, { type: "bar" }]
  };
}

function randomize() {
  return [0, 0, 0].map(() => {
    return Math.round(300 + Math.random() * 700) / 10;
  });
}
