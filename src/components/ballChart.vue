<template>
  <div id="ballChartContainer" style="width: 100%;height: 100%"></div>
</template>
<script>
  import echarts from "echarts";
  import 'echarts-liquidfill';
  import {ballChartOption} from '../js/echarts/ballChartOption.js'
  export default {
    data() {
      return {
        chart: null
      };
    },
    mounted() {
      this.initChart();
    },
    beforeDestroy() {
      if (!this.chart) {
        return;
      }
      this.chart.dispose();
      this.chart = null;
    },
    methods: {
      initChart() {
        //这里我们用固定的数据，真正使用时，用父组件传递来的数据替换series即可
        let mChart = echarts.init(document.getElementById('ballChartContainer'), this.$currentTheme);
        window.onresize = mChart.resize;
        mChart.setOption(ballChartOption)
      }
    }
  }
</script>
