import Vue from "vue";
import App from "./App.vue";
import router from "./router";
// 按需引入Element
import "./plugins/element.js";
import * as Echarts from "echarts";
// 基于Vue2封装的Echarts图表库  按需引入v-charts
import "./plugins/vcharts";
// 基于Vue2封装的Echarts图表库 使用时需引入对应的图表组件
import VueEcharts from "vue-echarts";
import "echarts/lib/chart/bar";
import "echarts/lib/chart/line";
import "echarts/lib/chart/pie";
import "echarts/lib/chart/map";
import "echarts/lib/chart/radar";
import "echarts/lib/chart/scatter";
import "echarts/lib/chart/effectScatter";
import "echarts/lib/component/tooltip";
import "echarts/lib/component/polar";
import "echarts/lib/component/geo";
import "echarts/lib/component/legend";
import "echarts/lib/component/title";
import "echarts/lib/component/visualMap";
import "echarts/lib/component/dataset";
import "./style/index.scss";

Vue.prototype.$echarts = Echarts;
Vue.component("v-chart", VueEcharts);
window.Vue = Vue;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
