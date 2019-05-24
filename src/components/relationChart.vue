<template>
  <div style="width:100%;height: 100%">
    <div>
      <span class="xpanel-title name-title">业务量排行榜</span>
      <span class="xpanel-more name-more">更多</span>
    </div>
    <div id="relationContainer"  style="height:90%"/>
  </div>
</template>

<script>
  const echarts = require('echarts');
  import {guageOption} from '../js/echarts/relationChartOption.js'
  export default {
    name: 'relationChart',
    data () {
      return {

      }
    },
    mounted() {
      let mChart = echarts.init(document.getElementById('relationContainer'), this.$currentTheme);
      window.onresize = mChart.resize;
      mChart.setOption(guageOption)
    }
  }
</script>

<style scoped>

</style>
