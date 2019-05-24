<template>
  <div style="width:100%;height: 200px">
    <div>
      <span class="xpanel-title name-title">业务量排行榜</span>
      <span class="xpanel-more name-more">更多</span>
    </div>
    <div id="rankChartContainer" style="height:90%"/>
  </div>
</template>

<script>
  const echarts = require('echarts');
  import {rankChartOption} from '../js/echarts/rankChartOption.js'
  import {query} from '@/js/api/msgCensus'

  const respData = require('@/assets/data/ranking-list.json')
  export default {
    name: 'rankChartId',
    data() {
      return {
        msgCensus: []
      }
    },
    mounted() {
      this.getMsqCensus();
      this.dataProcess()
    },
    methods: {
      getMsqCensus() {
        query().then(req => {
          this.msgCensus = req.data;
          // console.info(req.data)
          this.dataProcess()
        }).catch(e => {
          /*this.$toasted.error("业务量排行榜模块网络连接错误!",
            {
              icon: 'error'
            });*/
          this.msgCensus = respData;
          this.dataProcess()
        })
      },
      dataProcess() {
        let mChart = echarts.init(document.getElementById('rankChartContainer'), this.$currentTheme);
        let res = this.msgCensus;
        if (!this.msgCensus) {
          res = respData
        }
        window.onresize = mChart.resize;
        mChart.setOption(rankChartOption)
        const xData = [];
        const yData = [];
        for (let i in res) {
          xData.push(res[i].msgCount);
          yData.push(res[i].serviceName);
          if (i >= 6) {
            break;
          }
        }
        mChart.setOption({
          yAxis: {
            data: yData
          },
          series: [{
            data: xData
          }]
        });
      }
    }
  }
</script>

<style scoped>

</style>
