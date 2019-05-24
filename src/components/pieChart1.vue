<template>
  <div style="width:100%;height: 100%">
    <!--<div>-->
      <!--<span class="xpanel-title name-title">业务趋势</span>-->
      <!--<span class="xpanel-more name-more">更多</span>-->
    <!--</div>-->
    <div id="pieChart1Container" style="height:60%; text-align:center" />
  </div>
</template>
<script>
  import echarts from "echarts";
  import {pieChart1Option} from '../js/echarts/pieChart1Option.js'
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
        let mChart = echarts.init(document.getElementById('pieChart1Container'), this.$currentTheme);
        window.onresize = mChart.resize;
        mChart.setOption(pieChart1Option)
      }
    }
  }
</script>
