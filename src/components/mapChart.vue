<template>
  <div style="width:100%;height: 250px">
    <div>
      <span class="xpanel-title name-title">业务量排行榜</span>
      <span class="xpanel-more name-more">更多</span>
    </div>
    <div id="mapChartContainer"  style="height:90%"/>
  </div>
</template>
<script>
  import echarts from "echarts";
  import 'echarts/map/js/china.js' // 引入中国地图数据
  import {chinaMapChartOption} from '../js/echarts/mapChartOption.js'
  export default {
    props: ["renderData"],
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
        let chinaMapChart = echarts.init(document.getElementById('mapChartContainer'), this.$currentTheme);
        window.onresize = chinaMapChart.resize;
        chinaMapChart.setOption(chinaMapChartOption)
      }
    }
  }
</script>
