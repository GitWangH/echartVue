<template>
  <div id="systemRelationChartContainer" style="width: 100%;height:304px"></div>
</template>

<script>
  const echarts = require('echarts');
  import 'echarts/map/js/china.js' // 中国地图
  import {systemRelationChartOption} from '../js/echarts/systemRelationSingleSeriesChartOption.js'
    export default {
      name: "systemRelationChartId",
      mounted() {
        let systemRelationChart = echarts.init(document.getElementById('systemRelationChartContainer'), this.$currentTheme);
        window.onresize = systemRelationChart.resize;
        systemRelationChart.setOption(systemRelationChartOption)

        /*this.$get("http://localhost:8080/static/")
          .then(data=>{


          })
          .catch(error=>{
            console.log(error)
          })*/
      }
    }
</script>

<style scoped>

</style>
