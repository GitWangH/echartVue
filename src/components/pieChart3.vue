<template>
  <div id="pieChart3Container" style="width: 100%;height: 100%"></div>
</template>
<script>
  import echarts from "echarts";
  import {pieChart3Option} from '../js/echarts/pieChart3Option.js'
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
        let mChart = echarts.init(document.getElementById('pieChart3Container'), this.$currentTheme);
        window.onresize = mChart.resize;
        mChart.setOption(pieChart3Option)
      }
    }
  }
</script>
