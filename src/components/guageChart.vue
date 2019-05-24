<template>
  <div style="width:100%;height: 210px">
    <div>
      <span class="xpanel-title name-title">业务指标</span>
      <span class="xpanel-more name-more">更多</span>
    </div>
    <div id="guageContainer"  style="height:90%"/>
  </div>
</template>

<script>
  const echarts = require('echarts');
  import {guageOption} from '../js/echarts/guageChartOption.js'
  export default {
    name: 'guageChart',
    data () {
      return {

      }
    },
    mounted() {
      let mChart = echarts.init(document.getElementById('guageContainer'), this.$currentTheme);
      mChart.setOption(guageOption)
      window.onresize = mChart.resize;
      setInterval(function () {
        guageOption.series[0].data[0].value = (Math.random() * 100).toFixed(2) - 0;
        guageOption.series[1].data[0].value = (Math.random() * 7).toFixed(2) - 0;
        guageOption.series[2].data[0].value = (Math.random() * 2).toFixed(2) - 0;
        guageOption.series[3].data[0].value = (Math.random() * 2).toFixed(2) - 0;
        mChart.setOption(guageOption, true);
      }, 2000);
    }
  }
</script>

<style scoped>

</style>
