
export const lineChart4Option = {
  title : {
    text:"",
    x:'center',
    y:'top',
    textStyle:
      {
        color:'#fff',
        fontSize:13
      }
  },
  tooltip : {
    trigger: 'axis'
  },
  grid: {
    left: '3%',
    right: '8%',
    bottom: '5%',
    top:"13%",
    containLabel: true
  },
  color:["#1eb342",
    '#e02c23'],
  legend: {
    data:['门诊','住院'],
    show:true,

    right:'15%',
    y:"0",
    textStyle:{
      color:"#999",
      fontSize:'13'
    },
  },
  toolbox: {
    show : false,
    feature : {
      mark : {show: true},
      dataView : {show: true, readOnly: false},
      magicType : {show: true, type: ['line', 'bar', 'stack', 'tiled']},
      restore : {show: true},
      saveAsImage : {show: true}
    }
  },
  calculable : true,
  xAxis : [
    {
      type : 'category',
      boundaryGap : false,
      data : ['2012年','2013年','2014年','2015年','2016年','2017年','2018年'],
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
        rotate:'15'
      }
    }
  ],
  yAxis : [
    {
      type : 'value',
      splitLine:{
        show:true,
        lineStyle:{
          color: '#2d3b53'
        }
      },
      axisLabel:{
        textStyle:{
          color:"#fff"
        }
      },
    }
  ],
  series : [
    {
      name:'门诊',
      type:'line',
      smooth:true,
      symbol:'roundRect',
      data:[1168,3189,3290,4900,5345,6256,7045]
    },
    {
      name:'住院',
      type:'line',
      smooth:true,
      symbol:'roundRect',
      data:[2234,2890,4311,4445,6045,6500,6673]
    }
  ]
};
