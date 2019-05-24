<template>
  <div style="width:100%;height: 192px">
    <div>
      <span class="xpanel-title name-title">服务器2状态</span>
      <span class="xpanel-more name-more">更多</span>
    </div>
    <div id="hostResourceChart1Container1"  style="height:45%"/>
    <div id="hostResourceChart1Container2"  style="height:45%"/>
  </div>
</template>

<script>
  const echarts = require('echarts');
  import {hostResourceChartOption1} from '../js/echarts/hostResourceChartOption.js'
  import {hostResourceChartOption2} from "../js/echarts/hostResourceChartOption.js";

  export default {
    name: 'hostResourceChart',
    data () {
      return {

      }
    },
    mounted() {
      let mChart = echarts.init(document.getElementById('hostResourceChart1Container1'), this.$currentTheme);
      let mChartNetWork = echarts.init(document.getElementById('hostResourceChart1Container2'), this.$currentTheme);
      window.onresize = mChart.resize;
      window.onresize = mChartNetWork.resize;
      mChart.setOption(hostResourceChartOption1)
      mChartNetWork.setOption(hostResourceChartOption2)
    }
  }
</script>

<style scoped>

</style>
