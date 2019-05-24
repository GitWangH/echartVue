<template>
  <div style="width:100%;height: 270px" >
    <div>
      <span class="xpanel-title name-title">医院年度就诊情况</span>
      <span class="xpanel-more name-more">更多</span>
    </div>
    <div id="barAndLineChart"  style="height:90%"/>
  </div>
</template>

<script>
  const echarts = require('echarts');
  import {barAndLineOption} from '../js/echarts/barAndLineChartOption.js'
    export default {
        name: "barAndLineChart",
      data () {
        return {

        }
      },
      mounted() {
        let mChart = echarts.init(document.getElementById('barAndLineChart'), this.$currentTheme);
        window.onresize = mChart.resize;
        mChart.setOption(barAndLineOption)
      }
    }
</script>

<style scoped>

</style>
