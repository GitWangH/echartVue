// const lineChart = echarts.init(document.getElementById('divLine'),currentTheme);
export const lineChart2Option = {
  tooltip: {
    trigger: 'axis'
  },
  legend: {
    data: [ '成交'],
    show: false
  },
  grid: {
    left: '3%',
    right: '8%',
    bottom: '8%',
    top:"5%",
    containLabel: true
  },
  calculable: true,
  xAxis: [
    {
      type: 'category',
      boundaryGap: false,
      splitLine:{
        show:true,
        lineStyle:{
          color: '#2d3b53'
        }
      },
      axisLabel:{
        textStyle:{
          color:"#fff"
        },
        alignWithLabel: true,
        interval:0,
        rotate:'30'

      },
      data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
    }
  ],
  yAxis: [
    {
      type: 'value',
      show: true,
      splitLine:{
        show:true,
        lineStyle:{
          color: '#2d3b53'
        }
      },
      axisLabel:{
        formatter: function (value, index) {            //使用函数模板，函数参数分别为刻度数值（类目），刻度的索引
          if(value >=10000 || value <=-10000){
            return value/10000+ '万';
          }else {
            return value;
          }
        },
        textStyle:{
          color:"#fff"
        },
        alignWithLabel: true,
        interval:0,
      },
    },
  ],
  // grid: {
  //     left: '0%',
  //     bottom: '0%',
  //     top: '0%',
  //     right: '0%'
  // },
  series: [
    {
      name: '成交',
      type: 'line',
      smooth: true,
      itemStyle: {normal: {areaStyle: {type: 'default'}}},
      data: [10, 12, 21, 54, 260, 830, 710]
    }
  ]
};

// lineChart.setOption(lineOption);
