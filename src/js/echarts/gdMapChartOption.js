
/*************** 广东省地图 **************/
export const guangdongMapChartOption = {
  backgroundColor: 'rgba(10, 10, 10, 0)',
  title: {
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
    text: ['高', '低'],
    textStyle:{
      "color": "#fff"
    },
    itemWidth:8,
    itemHeight:70,
    realtime: true,
    calculable: true,
    color: ['orangered', 'yellow', 'lightskyblue']
  },

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
    map:"广东",// 'guangdong', // 表示广东省地图
    roam: true,
    show: true, //是否显示地图的底图
    zoom:1.3, // 缩放比例
    center: [113.480637,23.125178], // 视觉中心点
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
          "fromName": "梅州",
          "toName": "广州",
          "value": 12,
          "coords": [
            [
              "116.117582",
              "24.099112",
            ],
            [
              "113.480637",
              "23.125178",
            ]
          ]
        },
        {
          "fromName": "清远",
          "toName": "广州",
          "value": 23,
          "coords": [
            [
              "113.051227",
              "23.685022",
            ],
            [
              "113.480637",
              "23.125178",
            ],
          ]
        },
        {
          "fromName": "韶关",
          "toName": "广州",
          "value": 92,
          "coords": [
            [
              "113.591544",
              "24.501322",
            ],
            [
              "113.480637",
              "23.125178",
            ],
          ]
        },
        {
          "fromName": "云浮",
          "toName": "广州",
          "value": 33,
          "coords": [
            [
              "112.044439",
              "22.629801",
            ],
            [
              "113.480637",
              "23.125178",
            ],
          ]
        },
        {
          "fromName": "阳江",
          "toName": "广州",
          "value": 45,
          "coords": [
            [
              "111.825107",
              "21.859222",
            ],
            [
              "113.480637",
              "23.125178",
            ],
          ]
        },
        {
          "fromName": "肇庆",
          "toName": "广州",
          "value": 60,
          "coords": [
            [
              "112.472529",
              "23.051546",
            ],
            [
              "113.480637",
              "23.125178",
            ],
          ]
        },
        {
          "fromName": "河源",
          "toName": "广州",
          "value": 81,
          "coords": [
            [
              "114.897802",
              "23.746266",
            ],[
              "113.480637",
              "23.125178",
            ]
          ]
        },
        {
          "fromName": "佛山",
          "toName": "广州",
          "value": 100,
          "coords": [
            [
              "113.022717",
              "22.828762",
            ],[
              "113.480637",
              "23.125178",
            ]
          ]
        },
        {
          "fromName": "揭阳",
          "toName": "广州",
          "value": 98,
          "coords": [
            [
              "116.255733",
              "23.143778",
            ],[
              "113.480637",
              "23.125178",
            ]
          ]
        },
        {
          "fromName": "深圳",
          "toName": "广州",
          "value": 75,
          "coords": [
            [
              "114.085947",
              "22.347",
            ],[
              "113.480637",
              "23.125178",
            ]
          ]
        },
        {
          "fromName": "潮州",
          "toName": "广州",
          "value": 8,
          "coords": [
            [
              "116.692301",
              "23.661701",
            ],[
              "113.480637",
              "23.125178",
            ]
          ]
        },
        {
          "fromName": "湛江",
          "toName": "广州",
          "value": 16,
          "coords": [
            [
              "110.264977",
              "21.274898",
            ],[
              "113.480637",
              "23.125178",
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
          "name": "梅州",
          "value": [
            "116.117582",
            "24.099112",
            12
          ]
        },
        {
          "name": "清远",
          "value": [
            "113.051227",
            "23.685022",
            23
          ]
        },
        {
          "name": "肇庆",
          "value": [
            "112.472529",
            "23.051546",
            60
          ]
        },
        {
          "name": "韶关",
          "value": [
            "113.591544",
            "24.501322",
            92
          ]
        },
        {
          "name": "云浮",
          "value": [
            "112.044439",
            "22.629801",
            33
          ]
        },
        {
          "name": "阳江",
          "value": [
            "111.825107",
            "21.859222",
            45
          ]
        },
        {
          "name": "河源",
          "value": [
            "114.897802",
            "23.746266",
            81
          ]
        },
        {
          "name": "佛山",
          "value": [
            "113.022717",
            "22.828762",
            100
          ]
        },
        {
          "name": "揭阳",
          "value": [
            "116.255733",
            "23.143778",
            98
          ]
        },
        {
          "name": "深圳",
          "value": [
            "114.085947",
            "22.347",
            75
          ]
        },
        {
          "name": "潮州",
          "value": [
            "116.692301",
            "23.661701",
            8
          ]
        },
        {
          "name": "湛江",
          "value": [
            "110.264977",
            "21.274898",
            16
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
          "name": "广州",
          "value": [
            "113.480637",
            "23.125178"
          ]
        }
      ]
    }
  ]
};
