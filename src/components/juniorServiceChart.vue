<template>
  <div style="width:100%;height: 266px">
    <div>
      <span class="xpanel-title name-title">业务量综合对比</span>
      <span class="xpanel-more name-more">更多</span>
    </div>
    <div id="juniorserviceChart"  style="height:90%"/>
  </div>
</template>

<script>
  const echarts = require('echarts');
  import {juniorserviceOption} from '../js/echarts/juniorServiceChartOption.js'
  import {queryDeptTypeCount} from '@/js/api/departmentType';

  export default {
    name: "juniorserviceChart",
    data () {
      return {
        juniorserviceOption:{}
      }
    },
    mounted(){
      this.getData()
      this.initChart()
    },
    methods:{
      initChart(){
        let mChart = echarts.init(document.getElementById('juniorserviceChart'), this.$currentTheme);
        window.onresize = mChart.resize;
        mChart.setOption(this.juniorserviceOption)
      },
      getData(){
        let that = this
        that.juniorserviceOption = juniorserviceOption
        queryDeptTypeCount().then(res=>{
          if (res && res.data){
            that.juniorserviceOption.series[0].data = res.data.countInPatient
            that.juniorserviceOption.series[1].data = res.data.countOutPatient
            that.initChart()
          }
        })
      }
    }

  }

</script>

<style scoped>

</style>
