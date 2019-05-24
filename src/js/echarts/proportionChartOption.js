const echarts = require('echarts');

const proportionRate=0.7;

export const proportionChartOption = {
  tooltip: {
    show:false,
  },
  title: [

  ],

  series: [

    //2
    {
      name:'本地病人占比',
      type:'pie',
      hoverAnimation: false,
      radius: ["60%", '75%'],
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
        value: proportionRate,
        label: {
          normal: {
            show: true,
            position: 'center',
            formatter: proportionRate*100 + '%',
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
          value:1-proportionRate,
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


