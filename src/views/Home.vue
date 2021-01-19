<template>
  <div class="home">
    <top-view></top-view>
    <sales-view></sales-view>
    <bottom-view></bottom-view>
    <map-view></map-view>
    <other-view></other-view>
  </div>
</template>
  
<script>
import TopView from "../components/TopView/index.vue";
import MapView from "../components/MapView/index.vue";
import SalesView from "../components/SalesView/index.vue";
import BottomView from "../components/BottomView/index.vue";
import OtherView from "../components/OtherView/index.vue";
export default {
  name: "Home",
  components: {
    TopView,
    MapView,
    SalesView,
    BottomView,
    OtherView,
  },
};
</script>

<style lang="scss">
.home {
  background-color: eee;
  padding: 20px;
}
</style>
