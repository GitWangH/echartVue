<template>
  <div style="width:100%;height: 250px">
    <div style="padding: 10px;">
      <span class="xpanel-title name-title" >部门职称对比</span>
      <span class="xpanel-more name-more" >更多</span>
    </div>
    <div id="radarChartContainer" style="height:85%"/>
  </div>
</template>

<script>
  const echarts = require('echarts');
  import {radarChartOption} from '../js/echarts/radarChartOption.js'
  import {queryTitleCount} from '@/js/api/departmentProTitleCount';

  export default {
    name: "radarChart",
    data() {
      return {
        radarChartOption:{}
      }
    },
    mounted() {
      this.getData()
      this.initChart()
    },
    methods: {
      initChart(){
        let mChart = echarts.init(document.getElementById('radarChartContainer'), this.$currentTheme)
        window.onresize = mChart.resize
        mChart.setOption(this.radarChartOption)
      },
      getData(){
        let that = this
        that.radarChartOption = radarChartOption
        queryTitleCount().then(res=>{
          if(res && res.data){
            that.radarChartOption.radar.indicator = res.data.departmentName
            that.radarChartOption.series[0].data = res.data.titleCountData
            that.initChart()
          }
        })
      }
    }
  }
</script>

<style scoped>

</style>
