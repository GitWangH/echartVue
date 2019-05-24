<template>
  <div style="width:100%;height: 206px">
    <div>
      <span class="xpanel-title name-title">检查按类型分布曲线</span>
      <span class="xpanel-more name-more">更多</span>
    </div>
    <div id="lineChart2Container" style="height:100%"/>
  </div>
</template>
<script>
  import echarts from "echarts";
  import {lineChart2Option} from '../js/echarts/lineChart2Option.js'
  import {querySplitByType} from '@/js/api/examination';

  const chart_data={
    "0":[
      23,
      23,
      23,
      38,
      76,
      55,
      23
    ],
    "1":[
      45,
      32,
      37,
      33,
      2,
      33,
      34
    ],
    "2":[
      23,
      23,
      23,
      23,
      23,
      34,
      25
    ],
    "3":[
      3,
      3,
      31,
      3,
      3,
      31,
      33
    ],
    "4":[
      7,
      90,
      8,
      75,
      71,
      77,
      78
    ],
    "5":[
      9,
      34,
      6,
      34,
      3,
      6,
      44
    ],
    "dateList":[
      "02-20",
      "02-21",
      "02-22",
      "02-23",
      "02-24",
      "02-25",
      "02-26"
    ]
  };

  export default {
    name: "lineChart2Id",
    data() {
      return {
        chart: null,
        lineChart2Option: {}
      };
    },
    mounted() {
      this.lineChart2Option = lineChart2Option;
      this.getData()
      // this.initChart();
    },
    beforeDestroy() {
      if (!this.chart) {
        return;
      }
      this.chart.dispose();
      this.chart = null;
    },
    methods: {
      initChart() {
        //这里我们用固定的数据，真正使用时，用父组件传递来的数据替换series即可
        let mChart = echarts.init(document.getElementById('lineChart2Container'), this.$currentTheme);
        window.onresize = mChart.resize;
        mChart.setOption(this.lineChart2Option)
      },
      getData() {
        let that = this
        //获取服务器数据
        //querySplitByType().then(res => {

            //if (res && res.data && res.data.dateList) {
              //that.lineChart2Option.xAxis[0].data = res.data.dateList;
              that.lineChart2Option.xAxis[0].data = chart_data.dateList;

              that.lineChart2Option.legend.data = []
              that.lineChart2Option.series = []
              for (let i = 0; i <= 5; i++) {
                let lineChart1 = {}
                lineChart1.type = 'line'
                lineChart1.smooth = true
                lineChart1.itemStyle = {normal: {areaStyle: {type: 'default'}}}
                lineChart1.data = chart_data[i]

                switch (i) {
                  case 0:
                    that.lineChart2Option.legend.data.push('CT')
                    lineChart1.name = 'CT'
                    break;
                  case 1:
                    that.lineChart2Option.legend.data.push('X光')
                    lineChart1.name = 'X光'
                    break;
                  case 2:
                    that.lineChart2Option.legend.data.push('B超')
                    lineChart1.name = 'B超'
                    break;
                  case 3:
                    that.lineChart2Option.legend.data.push('内镜')
                    lineChart1.name = '内镜'
                    break;
                  case 4:
                    that.lineChart2Option.legend.data.push('心电')
                    lineChart1.name = '心电'
                    break;
                  case 5:
                    that.lineChart2Option.legend.data.push('病理')
                    lineChart1.name = '病理'
                    break;
                  default:
                    break;
                }
                that.lineChart2Option.series.push(lineChart1);
              }
              that.initChart();
            //}
        // }
        //)
      }
    }
  }
</script>
