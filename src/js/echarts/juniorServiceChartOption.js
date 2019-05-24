//var juniorservice = echarts.init(document.getElementById('juniorservice'));
export const juniorserviceOption = {
  tooltip : {
    trigger: 'axis',
    axisPointer : {            // 坐标轴指示器，坐标轴触发有效
      type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
    }
  },
  color:['#eaff00','#22ac38'],
  legend: {
    right:'0',
    data: ['门诊', '住院'],
    textStyle:{
      color:'#00ffff'
    }
  },
  grid: {
    left: '8%',
    right: '4%',
    bottom: '3%',
    top:'10%',
    containLabel: true
  },
  xAxis:  {
    type: 'value',
    splitLine:{
      show:true,
      lineStyle:{
        color: '#1e2b43'
      }
    },
    axisLine: {
      show:false,
      lineStyle: {
        color: '#115372'
      }
    },
    axisTick: {
      show: false
    },
    axisLabel:{
      textStyle:{
        color:"#fff"
      },
      alignWithLabel: true,
      interval:0

    }
  },
  dataZoom: [{
    type: 'slider',
    yAxisIndex: 0,
    filterMode: 'empty',
    start: 0,
    x:'0',
    end: 60,
    handleStyle:{
      color:"#519cff",
      backgroundColor:'#519cff'
    },
    textStyle:{
      color:"#fff"},
    borderColor:"#519cff"
  }],
  yAxis: {
    type: 'category',
    data: ['内科','外科','儿科','眼科','中医科','口腔科','皮肤科',' 麻醉科','康复科','药剂科','理疗科'],
    splitLine:{
      show:false,
      lineStyle:{
        color: '#1e2b43'
      }
    },

    axisTick: {
      show: false
    },
    axisLine: {
      show:true,
      lineStyle: {
        color: '#115372'
      }
    },
    axisLabel:{
      textStyle:{
        color:"#419aff"
      },
      lineStyle:{
        color: '#519cff'
      },
      alignWithLabel: true,
      interval:0
    }
  },
  series: [
    {
      name: '门诊',
      type: 'bar',
      stack: '比例',
      label: {
        normal: {
          show: true,
          position: 'insideRight',
          textStyle:{
            color:'#333'
          }
        }

      },
      data: [320, 302, 301, 334, 390, 330, 320,320, 302, 301, 334]
    },
    {
      name: '住院',
      type: 'bar',
      stack: '比例',
      label: {
        normal: {
          show: true,
          position: 'right',
          textStyle:{
            color:'#00f0ff'
          }

        }
      },
      data: [120, 132, 101, 134, 90, 230, 210,120, 132, 101, 134]
    }
  ]
};
//juniorservice.setOption(option);
