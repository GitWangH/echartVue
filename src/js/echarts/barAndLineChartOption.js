//var changedetail = echarts.init(document.getElementById('changedetail'));
export const barAndLineOption = {
  tooltip: {
    trigger: 'axis',
    formatter: '{b}</br>{a}: {c}万</br>{a1}: {c1}万</br>{a2}:{c2}'
  },
  toolbox: {
    show:false,
    feature: {
      dataView: {show: true, readOnly: false},
      magicType: {show: true, type: ['line', 'bar']},
      restore: {show: true},
      saveAsImage: {show: true}
    }
  },
  legend: {
    show:true,
    selected:{
      '市值总价':true,          //----图例选择,图形加载出来会显示选择的图例，默认为true
      '流通市值':true,
      '平均市盈率':true,
    },

    x:"center",
    y:'bottom',
    textStyle:{
      color:"#fff"
    },
    data:[                      //----图例内容
      {
        name:'门诊',
        icon:'roundRect',          //----图例的外框样式
        textStyle:{
          color:'#fff',       //----单独设置某一个图例的颜色
          //backgroundColor:'black',//---单独设置某一个图例的字体背景色
        }
      },
      {
        name:'住院',
        icon:'roundRect',          //----图例的外框样式
        textStyle:{
          color:'#fff',       //----单独设置某一个图例的颜色
          //backgroundColor:'black',//---单独设置某一个图例的字体背景色
        }
      },
      {
        name:'平均增长率', //----折线图图例的外框样式为默认
        textStyle:{
          color:'#fff',       //----单独设置某一个图例的颜色
          //backgroundColor:'black',//---单独设置某一个图例的字体背景色
        }
      }

    ],
  },
  color: ['#4c95d9', '#f6731b', '#8cd43f'],
  grid:{
    show:false,
    top:'10%',
    right:'5%',
    bottom:'8%',
    left:'6%',
    containLabel: true
  },
  xAxis: [
    {
      show:true,
      type: 'category',
      data: ['1月','2月','3月','4月','5月','6月','7月'],
      splitLine:{
        show:false,
        lineStyle:{
          color: '#f2effd'
        }
      }, axisLine: {
        show:true,
        lineStyle: {
          color: '#fcecfb'
        }
      },
      axisTick: {
        show: true
      },
      axisLabel:{
        show:true,
        textStyle:{
          color:"#fff"
        },
        lineStyle:{
          color: '#fbfffd'
        },
        alignWithLabel: true,
        interval:0
      }
    }
  ],
  yAxis: [
    {
      type: 'value',
      nameTextStyle:{
        color:'#fff'
      },
      interval: 2,
      max:36,
      min: 24,
      splitLine:{
        show:false,
        lineStyle:{
          color: '#23303f'
        }
      },
      axisLine: {
        show:true,
        lineStyle: {
          color: '#fcecfb'
        }
      },
      axisTick: {
        show: true
      },
      axisLabel:{
        formatter:'{value}万',
        textStyle:{
          color:"#fff"
        },
        alignWithLabel: true,
        interval:0

      }
    },
    {
      min: 13,
      max: 20,
      interval: 1,
      type: 'value',
      nameTextStyle:{
        color:'#fff'
      },
      splitLine:{
        show:false,
        lineStyle:{
          color: '#23303f'
        }
      },
      axisLine: {
        show:true,
        lineStyle: {
          color: '#fcfcfc'
        }
      },
      axisTick: {
        show: true
      },
      axisLabel:{
        show:true,
        textStyle:{
          color:"#fff"
        },
        alignWithLabel: true,
        interval:0

      }
    }
  ],
  color:"yellow",
  series: [
    {
      name:'门诊',
      type:'bar',
      data:[31, 30, 31, 30, 32,29,28],
      boundaryGap: '20%',
      barWidth:'20%',

      itemStyle: {
        normal: {
          color: '#6bc0fb',
          label: {
            show: false,
            position: 'top',
            formatter: '{c}'
          }
        }
      }
    },
    {
      name:'住院',
      type:'bar',
      data:[26, 25, 28, 29, 28,29,27],
      boundaryGap: '20%',
      barWidth:'20%',

      itemStyle: {
        normal: {
          color: '#7fec9d',
          label: {
            show: false,
            position: 'top',
            formatter: '{c}'
          }

        }
      }
    },
    {
      name:'平均增长率',
      type:'line',
      data:[17, 16, 16, 15, 16,14,13],
      yAxisIndex: 1,

      lineStyle: {
        normal: {
          color:'#c39705'
        }
      },

    }
  ]
};
//changedetail.setOption(option);
