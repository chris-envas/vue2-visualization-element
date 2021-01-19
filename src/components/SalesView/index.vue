<template>
  <div class="sales-view">
    <el-card shadow="hover">
      <template v-slot:header>
        <div class="menu-wrapper">
          <el-menu
            mode="horizontal"
            :default-active="activeIndex"
            @select="onMenuSelect"
            class="sales-view-menu"
          >
            <el-menu-item index="1">销售额</el-menu-item>
            <el-menu-item index="2">访问量</el-menu-item>
          </el-menu>
          <div class="menu-right">
            <el-radio-group v-model="radioSelect" size="small">
              <el-radio-button label="今日">今日</el-radio-button>
              <el-radio-button label="本周">本周</el-radio-button>
              <el-radio-button label="本月">本月</el-radio-button>
              <el-radio-button label="今年">今年</el-radio-button>
            </el-radio-group>
            <el-date-picker
              type="daterange"
              v-model="dateValue"
              range-separator="至"
              start-placeholder="开始日期"
              end-placeholder="开始日期"
              unlink-panels
              :picker-options="pickerOptions"
              class="sales-view-date-picker"
            ></el-date-picker>
          </div>
        </div>
      </template>
      <template>
        <div class="sales-view-chart-wrapper">
          <div class="sales-view-chart">
            <v-chart :options="chartOptions"></v-chart>
          </div>
          <div class="sales-view-list">
            <div class="item-title">排行榜</div>
            <div class="list-warpper">
              <div class="item-list" v-for="item in rankData" :key="item.idx">
                <div
                  :class="['list-item-idx', item.idx <= 3 ? 'list-top' : '']"
                >
                  {{ item.idx }}
                </div>
                <div class="list-item-name">{{ item.name }}</div>
                <div class="list-item-money">{{ item.money }}</div>
              </div>
            </div>
          </div>
        </div>
      </template>
    </el-card>
  </div>
</template>
<script>
import getOptions from "./data/options.js";
import getData from "./data/data.js";
export default {
  data() {
    return {
      activeIndex: "1",
      radioSelect: "今日",
      dateValue: null,
      pickerOptions: {
        shortcuts: [
          {
            text: "最近一周",
            onClick(picker) {
              const start = new Date();
              const end = new Date();
              start.setTime(start.getTime() - 3600 * 24 * 1000 * 7);
              picker.$emit("pick", [start, end]);
            },
          },
          {
            text: "最近一月",
            onClick(picker) {
              const start = new Date();
              const end = new Date();
              start.setTime(start.getTime() - 3600 * 24 * 1000 * 30);
              picker.$emit("pick", [start, end]);
            },
          },
          {
            text: "最近三月",
            onClick(picker) {
              const start = new Date();
              const end = new Date();
              start.setTime(start.getTime() - 3600 * 24 * 1000 * 90);
              picker.$emit("pick", [start, end]);
            },
          },
        ],
      },
      chartOptions: getOptions(),
      rankData: getData(),
    };
  },
  methods: {
    onMenuSelect(index) {
      this.activeIndex = index;
    },
  },
};
</script>
<style lang="scss">
.sales-view {
  margin-top: 20px;
}
.menu-wrapper {
  position: relative;
  display: flex;
  .sales-view-menu {
    width: 100%;
    .el-menu-item {
      height: 50px;
      line-height: 56px;
      margin: 0 20px;
    }
  }
  .menu-right {
    position: absolute;
    top: 0;
    right: 20px;
    height: 50px;
    line-height: 50px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    .sales-view-date-picker {
      margin-left: 20px;
    }
  }
}
.sales-view-chart-wrapper {
  height: 270px;
  display: flex;
  .sales-view-chart {
    width: 100%;
    height: 100%;
    flex: 1 1 60%;
    .echarts {
      width: 100%;
      height: 100%;
    }
  }
  .sales-view-list {
    flex: 1;
    width: 100%;
    height: 100%;
    overflow: hidden;
    overflow-y: scroll;
    .item-title {
      margin-bottom: 20px;
      font-size: 16px;
      font-weight: bold;
    }
    .item-list {
      display: flex;
      padding: 10px 6px;
      .list-item-idx {
        width: 20px;
        height: 20px;
        line-height: 20px;
        text-align: center;
        font-size: 12px;
        &.list-top {
          border-radius: 50%;
          background: #409eff;
          color: #ffffff;
        }
      }
      .list-item-name {
        margin-left: 20px;
        font-size: 12px;
        font-weight: 600;
      }
      .list-item-money {
        flex: 1;
        text-align: right;
        color: #303133;
        font-size: 12px;
      }
    }
  }
}
</style>
