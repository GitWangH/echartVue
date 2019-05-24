export const radarChartOption = {
  title: {
    text: ''
  },
  tooltip: {},
  legend: {

    data: ['高级职称', '中级职称','初级职称'],
    x:"center",
    y:'bottom',
    textStyle:{
      color:"#fff"
    }
  },
  color: ['#d91d06', '#ecf61c', '#11d424'],
  radar: {
    name:{
      textStyle: {
        //设置颜色
        color:'#fff'
      }
    },
    indicator: [
      { name: '门诊', max: 65},
      { name: '住院', max: 160},
      { name: '药房', max: 300},
      { name: '急诊', max: 380},
      { name: '手术', max: 520},
      { name: '护理', max: 250}
    ],
    center: ['50%','50%'],
    radius: "58%"
  },
  series: [{
    name: '',
    type: 'radar',
    itemStyle : {
      normal : {
        splitLine: {
          lineStyle: {

          }
        },
        label: {
          show: false,
          textStyle:{
          },
          formatter:function(params) {
            return params.value;}
        },
      }
    },
    data : [
      {
        value : [24, 100, 280, 300, 500, 190],
        name : '高级职称'
      },
      {
        value : [50, 140, 280, 310, 420, 210],
        name : '中级职称'
      },
      {
        value : [60, 140, 180, 210, 320, 110],
        name : '初级职称'
      }
    ]
  }]
};
