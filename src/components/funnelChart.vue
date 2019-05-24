<template>
  <div style="width:100%;height: 266px">
    <div  style="padding: 10px;">
      <span class="xpanel-title name-title">门诊和住院费用对比</span>
      <span class="xpanel-more name-more">更多</span>
    </div>
    <div id="funnelChartContainer"  style="height:85%"/>
  </div>
</template>

<script>
  const echarts = require('echarts');
  import {funnelChartOption} from '../js/echarts/funnelChartOption.js'
  export default {
    name: 'funnelChartId',
    data () {
      return {

      }
    },
    mounted() {
      let mChart = echarts.init(document.getElementById('funnelChartContainer'), this.$currentTheme);
      window.onresize = mChart.resize;
      mChart.setOption(funnelChartOption)
    }
  }
</script>

<style scoped>

</style>
