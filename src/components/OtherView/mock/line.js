export default function getData() {
  return {
    xAxis: {
      type: "category",
      axisTick: {
        alignWithLabel: true
      },
      data: [
        "Monday",
        "Tuseday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ]
    },
    yAxis: {},
    series: {
      type: "line",
      data: randomize()
    }
  };
}

function randomize() {
  return [0, 0, 0, 1, 3, 4, 2, 1].map(() => {
    return Math.round(300 + Math.random() * 700) / 10;
  });
}
