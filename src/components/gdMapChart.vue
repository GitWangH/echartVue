<template>
  <div style="width:100%;height: 250px">
    <div>
      <span class="xpanel-title name-title">就诊病人来源图</span>
      <span class="xpanel-more name-more">更多</span>
    </div>
    <div id="mapChart2Container"  style="height:90%"></div>
  </div>
</template>

<script>

    import echarts from "echarts";
    import 'echarts/map/js/province/guangdong.js' // 引入广东省地图数据
    import {guangdongMapChartOption} from '../js/echarts/gdMapChartOption.js'
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
          let guangdongMapChart = echarts.init(document.getElementById('mapChart2Container'), this.$currentTheme);
          window.onresize = guangdongMapChart.resize;
          guangdongMapChart.setOption(guangdongMapChartOption)
        }
      }
    }
</script>
