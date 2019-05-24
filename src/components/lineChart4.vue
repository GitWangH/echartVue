<template>
  <div style="width:100%;height: 202px">
    <div>
      <span class="xpanel-title name-title">收入趋势</span>
      <span class="xpanel-more name-more">更多</span>
    </div>
    <div id="lineChart4Container"  style="height:100%"/>
  </div>
</template>
<script>
  import echarts from "echarts";
  import {lineChart4Option} from '../js/echarts/lineChart4Option.js'
  import {revenueList} from '@/js/api/revenue';

  export default {
    data() {
      return {
        lineChart4Option:{}
      };
    },
    mounted() {
      this.getData();
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
        let mChart = echarts.init(document.getElementById('lineChart4Container'), this.$currentTheme);
        window.onresize = mChart.resize;
        mChart.setOption(this.lineChart4Option)
      },
      getData(){
        let that = this
        that.lineChart4Option = lineChart4Option
        revenueList().then(res=>{
          if(res && res.data){
            that.lineChart4Option.series[0].data = res.data[0].outPatientRevenue
            that.lineChart4Option.series[1].data = res.data[1].inPatientRevenue
            that.lineChart4Option.xAxis[0].data = res.data[2].revenueMonth
            that.initChart()
          }
        })
      }
    }
  }
</script>
