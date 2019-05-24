var xvalue_24h = ['1', '2', '3',
  '4', '5', '6', '7', '8',
  '9', '10', '11', '12', '13',
  '14', '15', '16', '17', '18',
  '19', '20', '21', '22', '23', '24h'
];
var value1 = [520, 682, 891, 834, 650, 920,
  710, 525, 345, 622, 265, 522,
  611, 311, 744, 522, 323, 425,
  831, 623, 423, 811, 344, 870
];
var value2 = [420, 310, 525, 345, 422, 665,
  622, 720, 882, 791, 634, 850,
  720, 810, 825, 545, 722, 865,
  822, 720, 582, 891, 634, 951
];

import echarts from "echarts";
export const lineChart1Option = {
  backgroundColor: '#ffffff',
  title: {
    //     text: '网络',
    textStyle: {
      fontWeight: 'normal',
      fontSize: 11,
      color: '#000000'
    },
    left: '10%'
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      lineStyle: {
        color: '#57617B'
      }
    }
  },
  legend: {
    icon: 'rect',
    itemWidth: 14,
    itemHeight: 5,
    itemGap: 13,
    top: '7%',
    data: ['进', '出'],
    right: '10%',
    textStyle: {
      fontSize: 8,
      color: '#000000'
    }
  },

  grid: {
    left: '9%',//距离左边的距离
    right: '10%',//距离右边的距离
    bottom: '50%',//距离下边的距离
    top: '3%',//距离上边的距离
    containLabel: true  //grid 区域是否包含坐标轴的刻度标签
  },
  xAxis: [{
    type: 'category',
    boundaryGap: false,
    minInterval: 250,
    axisLine: {
      lineStyle: {
        color: '#000'// '#57617B'
      }
    },
    data: xvalue_24h,

  },
    {
      axisPointer: {
        show: false
      },
      axisLine: {
        lineStyle: {
          color: '#000'//'#57617B'
        }
      },
      axisTick: {
        show: false
      },
    }],
  yAxis: [{
    type: 'value',
    name: '网速（Mbps）',
    minInterval: 250,
    axisTick: {
      show: false
    },

    axisLine: {
      show: true,
      symbol: ['none', 'arrow'],//设置是否显示轴线箭头
      symbolSize: [5, 7],       //设置箭头大小
      symbolOffset: [0, 7],     //箭头位置
      lineStyle: {
        color: '#000',     // x坐标轴的轴线颜色
        width: 1,             //这里是坐标轴的宽度,可以去掉
      }
    },
    axisLabel: {
      margin: 10,
      textStyle: {
        fontSize: 9,
        //           color:'#000'
      }
    },
    splitLine: {
      show: false,

    }
  }],
  series: [{
    name: '进',
    type: 'line',
    smooth: true,
    symbol: 'circle',
    symbolSize: 5,
    showSymbol: false,
    lineStyle: {
      normal: {
        width: 1
      }
    },
    areaStyle: {
      normal: {
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
          offset: 0,
          color: '#20f05b' //'rgba(137, 189, 27, 0.3)'
        }, {
          offset: 1,
          color: 'rgba(137, 189, 27, 0)'//'#00FF00'//'#90EE90'//'#00FF7F'//'#BDFCC9'//'rgba(137, 189, 27, 0)'
        }], false),
        shadowColor: 'rgba(0, 0, 0, 0.1)',
        shadowBlur: 10
      }
    },
    itemStyle: {
      normal: {
        color: '#20f05b',//'rgb(137,189,27)',
        borderColor: 'rgba(137,189,2,0.27)',
        borderWidth: 12

      }
    },
    data: value1,

  }, {
    name: '出',
    type: 'line',
    smooth: true,
    symbol: 'circle',
    symbolSize: 5,
    showSymbol: false,
    lineStyle: {
      normal: {
        width: 1
      }
    },
    areaStyle: {
      normal: {
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
          offset: 0,
          color: '#ADD8E6'//'#87CEFA'//'#87CEFA'//'#3fb1e3'//'rgba(0, 136, 212, 0.3)'
        }, {
          offset: 0.8,
          color: 'rgba(0, 136, 212, 0)'//'#87CEEB'//'#00BFFF'//'rgba(0, 136, 212, 0)'
        }], false),
        shadowColor: 'rgba(0, 0, 0, 0.1)',
        shadowBlur: 10
      }
    },
    itemStyle: {
      normal: {
        color: '#ADD8E6',//'#3fb1e3', //'rgb(0,136,212)',
        borderColor: 'rgba(0,136,212,0.2)',
        borderWidth: 12

      }
    },
    data: value2,

  },]
};
