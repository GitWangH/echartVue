
/*************** 中国地图 **************/
export const chinaMapChartOption = {
  backgroundColor: 'rgba(10, 10, 10, 0)',
  title: {
    text: '就诊病人来源图',
    left: 'center',
    textStyle: {
      color: '#fff'
    }
  },
  tooltip : {
    trigger: 'item'
  },
  dataRange: {
    show: true,
    min: 0,
    max: 100,
    itemWidth:8,
    itemHeight:70,
    text: ['高', '低'],
    textStyle:{
      "color": "#fff"
    },
    realtime: true,
    calculable: true,
    color: ['orangered', 'yellow', 'lightskyblue']
  },
  // legend: {
  //   orient: 'vertical',
  //   top: 'bottom',
  //   left: 'right',
  //   data:['广东', '吉林'],
  //   textStyle: {
  //     color: '#fff'
  //   },
  //   selectedMode: 'single'
  //   // selected: {
  //   //   // 选中'系列1'
  //   //   '广东': true,
  //   //   '吉林': true
  //   // }
  // },
  visualMap : {
    show : true,
    min : 0,
    max : 255,
    calculable : true,
    inRange : {
      color : ['aqua', 'lime', 'yellow', 'orange', '#ff3333']
    },
    textStyle : {
      color : '#12223b'
    }
  },

  geo: { // 这个是重点配置区
    map: 'china', // 表示中国地图
    roam: true,
    show: true, //是否显示中国地图的底图
    zoom:1.3, // 缩放比例
    center: [110.97, 32.71], // 视觉中心点
    layoutCenter : ['50%', '50%'],
    layoutSize : "130%",
    label: {
      normal: {
        show: true, // 是否显示对应地名
        textStyle: {
          color: 'rgba(0,0,0,0.4)'
        }
      },
    },
    itemStyle: {
      normal: {
        areaColor: '#37376e',
        borderColor: 'rgba(0, 0, 0, 0.2)'
      },
      emphasis: {
        areaColor: null,
        shadowOffsetX: 0,
        shadowOffsetY: 0,
        shadowBlur: 20,
        borderWidth: 0,
        shadowColor: 'rgba(0, 0, 0, 0.5)'
      }
    }
  },
  series: [
    {
      "type": "lines",
      "zlevel": 2,
      "effect": {
        "show": true,
        "period": 4,
        "trailLength": 0.02,
        "symbol": "arrow",
        "symbolSize": 5
      },
      "lineStyle": {
        "normal": {
          "width": 1,
          "opacity": 0.6,
          "curveness": 0.2
        }
      },
      "tooltip": {
        "trigger": "item"
      },
      "data": [
        {
          "fromName": "江苏",
          "toName": "广东",
          "value": 19,
          "coords": [
            [
              "119.68",
              "33.199",
            ],
            [
              "113.511",
              "23.22"
            ]
          ]
        },
        {
          "fromName": "陕西",
          "toName": "广东",
          "value": 15,
          "coords": [
            [
              "109.116",
              "34.2",
            ],
            [
              "113.511",
              "23.22"
            ],
          ]
        },
        {
          "fromName": "山东",
          "toName": "广东",
          "value": 90,
          "coords": [
            [
              "116.972",
              "36.737",
            ],
            [
              "113.511",
              "23.22"
            ],
          ]
        },
        {
          "fromName": "四川",
          "toName": "广东",
          "value": 10,
          "coords": [
            [
              "103.953",
              "30.762"
            ],
            [
              "113.511",
              "23.22"
            ],
          ]
        },
        {
          "fromName": "山东",
          "toName": "吉林",
          "value": 15,
          "coords": [
            [
              "116.972",
              "36.737",
            ],
            [
              "125.815",
              "44.258"
            ],
          ]
        },
        {
          "fromName": "广东",
          "toName": "吉林",
          "value": 3,
          "coords": [
            [
              "113.511",
              "23.22"
            ],
            [
              "125.815",
              "44.258"
            ],
          ]
        },
        {
          "fromName": "吉林",
          "toName": "广东",
          "value": 3,
          "coords": [
            [
              "125.815",
              "44.258"
            ],[
              "113.511",
              "23.22"
            ]
          ]
        },
        {
          "fromName": "广西",
          "toName": "广东",
          "value": 2,
          "coords": [
            [
              118.796252,
              32.0739
            ],[
              "113.511",
              "23.22"
            ]
          ]
        },
      ]
    },
    {
      "name": "来源地址",
      "type": "effectScatter",
      "coordinateSystem": "geo",
      "zlevel": 2,
      "rippleEffect": {
        "period": 4,
        "brushType": "stroke",
        "scale": 4
      },
      "tooltip": {
        "trigger": "item"
      },
      "label": {
        "normal": {
          "show": true,
          "position": "left",
          "offset": [
            -5,
            5
          ],
          "formatter": "{b}"
        },
        "emphasis": {
          "show": true
        }
      },
      "hoverAnimation": true,
      "symbol": "circle",
      "symbolSize": 5,
      "itemStyle": {
        "normal": {
          "show": false,
          "color": "#f00"
        }
      },
      "data": [
        {
          "name": "江苏",
          "value": [
            "119.68",
            "33.199",
            19
          ]
        },
        {
          "name": "陕西",
          "value": [
            "109.116",
            "34.2",
            18
          ]
        },
        {
          "name": "上海",
          "value": [
            "121.465",
            "31.289",
            25
          ]
        },
        {
          "name": "山东",
          "value": [
            "116.972",
            "36.737",
            12
          ]
        },
        {
          "name": "四川",
          "value": [
            "103.953",
            "30.762",
            10
          ]
        },
        {
          "name": "吉林",
          "value": [
            "125.815",
            "44.258",
            3
          ]
        },
      ]
    },
    {
      "name": "目标地址",
      "type": "scatter",
      "coordinateSystem": "geo",
      "zlevel": 2,
      "tooltip": {
        "trigger": "item"
      },
      "label": {
        "normal": {
          "show": true,
          "position": "right",
          "color": "#00ffff",
          "formatter": "{b}",
          "textStyle": {
            "color": "#00ffff"
          }
        },
        "emphasis": {
          "show": true
        }
      },
      "symbol": "circle",
      "symbolSize": 20,
      "itemStyle": {
        "normal": {
          "show": true,
          "color": "#EE0000"
        }
      },
      "data": [
        {
          "name": "广东",
          "value": [
            "113.511",
            "23.22"
          ]
        }
      ]
    }
  ]
};
