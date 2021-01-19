<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="12">
        <el-card shadow="hover">
          <v-chart :options="bar" />
        </el-card>
      </el-col>
      <el-col :span="12">
        <el-card shadow="hover">
          <v-chart :options="polar" />
        </el-card>
      </el-col>
      <el-col :span="12">
        <el-card shadow="hover">
          <v-chart :options="line" />
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import getBar from "./mock/bar";
import getPolar from "./mock/polar";
import getLine from "./mock/line";

export default {
  data() {
    return {
      polar: getPolar(),
      bar: getBar(),
      line: getLine(),
    };
  },
};
</script>
<style lang="scss"></style>
