<template>
  <div class="bottom-view">
    <div class="view">
      <el-card shadow="hover">
        <template v-slot:header>
          <div class="title-wrapper">关键词搜素</div>
        </template>
        <template>
          <div class="chart-wrapper">
            <div class="chart-inner">
              <div class="chart">
                <div class="chart-title">搜索用户数</div>
                <div class="chart-data">87,082,112</div>
                <v-chart :options="searchOptions"></v-chart>
              </div>
              <div class="chart">
                <div class="chart-title">搜索数量</div>
                <div class="chart-data">27,382,212</div>
                <v-chart :options="searchNumberOptions"></v-chart>
              </div>
            </div>
            <div class="table-wrapper">
              <el-table :data="tableData">
                <el-table-column
                  prop="rank"
                  label="排名"
                  width="180"
                ></el-table-column>
                <el-table-column
                  prop="keyword"
                  label="关键词"
                  width="180"
                ></el-table-column>
                <el-table-column prop="count" label="搜索量"></el-table-column>
                <el-table-column
                  prop="users"
                  label="搜索用户数"
                ></el-table-column>
              </el-table>
              <el-pagination
                layout="prev, pager, next"
                :total="100"
                :page-size="4"
                background
                @current-change="onPageChange"
              />
            </div>
          </div>
        </template>
      </el-card>
    </div>
    <div class="view">
      <el-card shadow="hover">
        <template v-slot:header>
          <div class="title-wrapper">
            <div class="title">分类销售排行</div>
            <div class="radio-wrapper">
              <el-radio-group v-model="radioSelect" size="small">
                <el-radio-button label="品类"></el-radio-button>
                <el-radio-button label="商品"></el-radio-button>
              </el-radio-group>
            </div>
          </div>
        </template>
        <template>
          <div class="chart-wrapper">
            <v-chart :options="categoryOptions"></v-chart>
          </div>
        </template>
      </el-card>
    </div>
  </div>
</template>
<script>
import {
  getOptions,
  getNumberOptions,
  getCategoryOptions,
} from "./mock/data.js";
import tableData from "./mock/table.js";
export default {
  data() {
    return {
      searchOptions: getOptions(),
      searchNumberOptions: getNumberOptions(),
      categoryOptions: getCategoryOptions(),
      radioSelect: "品类",
      tableData: tableData(),
    };
  },
  methods: {
    onPageChange(page) {
      console.log(page);
    },
  },
};
</script>
<style lang="scss">
.bottom-view {
  display: flex;
  margin-top: 20px;
  .view {
    flex: 1;
    width: 50%;
    box-sizing: border-box;
    &:first-child {
      padding: 0px 10px 0px 0px;
    }
    &:last-child {
      padding: 0px 0px 0px 10px;
    }
    .title-wrapper {
      display: flex;
      align-items: center;
      height: 60px;
      box-shadow: border-box;
      border-bottom: 1px solid #eeeeee;
      font-size: 500;
      font-size: 16px;
      padding: 0px 20px;
      .radio-wrapper {
        flex: 1;
        display: flex;
        justify-content: flex-end;
        padding-right: 20px;
      }
    }
    .chart-wrapper {
      display: flex;
      flex-direction: column;
      height: 452px;
      .chart-inner {
        display: flex;
        margin-top: 10px;
        .chart {
          flex: 1;
          padding: 0 10px;
          width: 50%;
          .chart-title {
            color: #999;
            font-size: 14px;
          }
          .chart-data {
            font-size: 22px;
            color: #333;
            font-weight: 500;
            letter-spacing: 2px;
          }
          .echarts {
            width: 100%;
            height: 50px;
          }
        }
      }
    }
    .table-wrapper {
      flex: 1;
      margin: 10px 0px;
      .el-pagination {
        text-align: center;
        margin: 10px 0px;
      }
    }
  }
}
</style>
