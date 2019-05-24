const echarts = require('echarts');

const memoryData = {
  "空闲": 6.66,
  "使用": 6.41,
  "缓存": 1.28,
  "有线": 1.65
};

const cpuRate=0.09;
const diskRate=0.36;

const xValue24h = ['0','1', '2', '3',
  '4', '5', '6', '7', '8',
  '9', '10', '11', '12', '13',
  '14', '15', '16', '17', '18',
  '19', '20', '21', '22', '23', '24h'];
const NetInValue = [520, 682, 891, 834, 650, 920,
  710, 525, 345, 622, 265, 522,
  611, 311, 744, 522, 323, 425,
  831, 623, 423, 811, 344, 870
];
const netOutValue = [420, 310, 525, 345, 422, 665,
  622, 720, 882, 791, 634, 850,
  720, 810, 825, 545, 722, 865,
  822, 720, 582, 891, 634, 951
];

export const hostResourceChartOption1 = {
  tooltip: {
    trigger: 'item',
  },
  title: [
    //1.
    {
      text: '内存',
      textStyle:{
        fontSize:13,
        color: '#b0c2f9',

      },

      x: '18%',
      textAlign: 'center'
    },
    //1.0
    /*{
      subtext:Object.keys(memoryData).reduce(function(all, key) {
        return all + memoryData[key]; }, 0)+' GB',
      x:'18%',
      y:'38%',
      subtextStyle:{
        fontSize:11,
        color:'#b0c2f9',
      },
      textAlign: 'center'
    },*/
    //2.
    {
      text: '处理器',

      textStyle:{
        fontSize:13,
        color:'#b0c2f9'
      },
      x: '48%',

      textAlign: 'center'
    },
    //3.
    {
      text: '硬盘',
      textStyle:{
        fontSize:13,
        color:'#b0c2f9'
      },
      x: '78%',

      textAlign: 'center'
    },

  ],

  series: [
    //1
    {
      name:'内存',
      type: 'pie',
      hoverAnimation: false,
      radius: ["50%", '57%'],
      center: ['20%', '62%'],
      data: Object.keys(memoryData).map(function(key) {
        return {
          name: key,
          value: memoryData[key]
        };
      }),
      label:{
        normal:{
          show:false,
          textStyle:{
            fontSize:8
          },
        },},
      labelLine:{
        normal: {
          show: false,
          length: 5
        },
      }
    },

    //2
    {
      name:'处理器',
      type:'pie',
      hoverAnimation: false,
      radius: ["50%", '57%'],
      center: ['50%', '62%'],
      labelLine: {
        normal: {
          show: false,
        },
      },
      label:{
        normal:{
          show:false
        },},
      data: [{
        value: cpuRate,
        label: {
          normal: {
            show: true,
            position: 'center',
            formatter: function (params){
              return params.value*100+'%'
            },
            textStyle: {
              color: '#b0c2f9',
              fontSize: 11,
            }
          }
        },
        itemStyle: {
          normal: {
            color: '#367bec',
          }
        }
      },
        {
          value:1-cpuRate,
          itemStyle:{
            normal:{
              color:'#31557a',
            },
          },
        },
      ],
    },

    //3
    {
      name:'处理器',
      type:'pie',
      hoverAnimation: false,
      radius: ["50%", '57%'],
      center: ['80%', '62%'],
      labelLine: {
        normal: {
          show: false,
        },
      },
      label:{
        normal:{
          show:false
        },},
      data: [{
        value: diskRate,
        label: {
          normal: {
            show: true,
            position: 'center',
            formatter: diskRate*100 + '%',
            textStyle: {
              color: '#b0c2f9',
              fontSize: 11,
            }
          }
        },
        itemStyle: {
          normal: {
            color: '#3296ec',
          }
        }
      },
        {
          value:1-diskRate,
          itemStyle:{
            normal:{
              color:'#31557a',
            },
          },
        },
      ],

    },
  ],
};


export const hostResourceChartOption2={

  tooltip: {
    trigger:'axis',
    // formatter:'{b}h<br>{a}\n{c}<br>{a1}\n{c1}'
  },

  //图例
  legend: {
    icon: 'rect',
    itemWidth: 14,
    itemHeight: 5,
    itemGap: 13,
    top:'5%',
    data: ['输入', '输出' ],
    right: '10%',
    textStyle: {
      fontSize: 10,
      color: '#b0c2f9'
    },
  },

  grid: {
    left: '3%',//距离左边的距离
    right: '10%',//距离右边的距离
    bottom: '0%',//距离下边的距离
    top: '8%' ,//距离上边的距离
    containLabel: true  //grid 区域是否包含坐标轴的刻度标签
  },
  xAxis: [{
    type: 'category',
    boundaryGap: false,
    axisLine: {
      lineStyle: {
        color:'#b0c2f9'// '#57617B'
      }
    },
    data:xValue24h,
    axisLabel: {
      margin: 5,
      textStyle: {
        fontSize: 9,
        color:'#b0c2f9'
      }
    },

  },
    {
      axisPointer: {
        show: false
      },
      axisLine: {
        lineStyle: {
          color: '#b0c2f9'//'#57617B'
        }
      },
      axisTick: {
        show: false
      },
    }],
  yAxis: [{
    type: 'value',
    name: '网速（Mbps）',
    nameTextStyle:{
      color:'#b0c2f9',
      fontSize:10,
    },
    //minInterval:250,
    axisTick: {
      show: false
    },

    axisLine: {
      show: true,
      symbol:['none','arrow'],//设置是否显示轴线箭头
      symbolSize:[5,7],       //设置箭头大小
      symbolOffset:[0,7],     //箭头位置
      lineStyle:{
        color:'#b0c2f9',     // x坐标轴的轴线颜色
        width:1,             //这里是坐标轴的宽度,可以去掉
      }
    },
    axisLabel: {
      margin: 10,
      textStyle: {
        fontSize: 9,
        color:'#b0c2f9'
      }
    },
    splitLine: {
      show:false,

    }
  }],

  series: [
    {
      name: '输入',
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
            color:'#20f05b'
          }, {
            offset: 1,
            color:'rgba(137, 189, 27, 0)'
          }], false),
          shadowColor: 'rgba(0, 0, 0, 0.1)',
          shadowBlur: 10
        }
      },
      itemStyle: {
        normal: {
          color: '#20f05b',
          borderColor: 'rgba(137,189,2,0.27)',
          borderWidth: 12

        }
      },
      data: NetInValue,

    },
    {
      name: '输出',
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
            color: '#e6494c'
          }, {
            offset: 0.8,
            color: 'rgba(0, 136, 212, 0)'
          }], false),
          shadowColor: 'rgba(0, 0, 0, 0.1)',
          shadowBlur: 10
        }
      },
      itemStyle: {
        normal: {
          color:'#e6494c',
          borderColor: 'rgba(0,136,212,0.2)',
          borderWidth: 12

        }
      },
      data: netOutValue,
    },
  ],
};

