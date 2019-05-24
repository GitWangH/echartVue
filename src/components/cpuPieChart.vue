<template>
  <div id="cpuPieChartContainer" style="width: 100%;height:100%"></div>
</template>

<script>
  const echarts = require('echarts');
  import {cpuPieChartOption} from '../js/echarts/cpuPieChartOption.js'
  export default {
    name: 'cpuPieChart',
    data () {
      return {

      }
    },
    mounted() {
      let mChart = echarts.init(document.getElementById('cpuPieChartContainer'), this.$currentTheme);
      window.onresize = mChart.resize;
      mChart.setOption(cpuPieChartOption)
      this.$get("http://192.168.1.199:8080/mongo/ServerInfo/query?limit=1")
        .then(data=>{
          //data={cpu: {idle: "6652.64", system: "95.97", user: "171.4"}}
          if(data.status=== -404){
            console.log(data);
            mChart.hideLoading();
            mChart.setOption({
              series: [{
                data: data.cpu  //将异步请求获取到的数据进行装载
              }]
            })
          }else{
            console.log(data);
          }

        })
        .catch(error=>{
          console.log(error)
        })
    }
  }
</script>

<style scoped>

</style>
