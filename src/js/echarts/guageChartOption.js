export const guageOption = {
    //backgroundColor: '#1b1b1b',
    tooltip: {
        formatter: "{a} <br/>{c} {b}"
    },
    series: [
        {
            name: '速度',
            type: 'gauge',
            //center: ['25%', '55%'],    // 默认全局居中
            min: 0,
            max: 220,
            splitNumber: 5,
            radius: '85%',
            axisLine: {            // 坐标轴线
                lineStyle: {       // 属性lineStyle控制线条样式
                    color: [[0.09, 'lime'], [0.82, '#1e90ff'], [1, '#ff4500']],
                    width: 3,
                    shadowColor: '#fff', //默认透明
                    shadowBlur: 10
                }
            },
            axisLabel: {            // 坐标轴小标记
                textStyle: {       // 属性lineStyle控制线条样式
                    fontWeight: 'bolder',
                    color: '#fff',
                    shadowColor: '#fff', //默认透明
                    shadowBlur: 10
                },
                show:false
            },
            axisTick: {            // 坐标轴小标记
                length: 12,        // 属性length控制线长
                lineStyle: {       // 属性lineStyle控制线条样式
                    color: 'auto',
                    shadowColor: '#fff', //默认透明
                    shadowBlur: 10
                }
            },
            splitLine: {           // 分隔线
                length: 20,         // 属性length控制线长
                lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                    width: 3,
                    color: '#fff',
                    shadowColor: '#fff', //默认透明
                    shadowBlur: 10
                }
            },
            pointer: {           // 分隔线
                shadowColor: '#fff', //默认透明
                shadowBlur: 5,
                width:8
            },
            title: {
                textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                    fontWeight: 'bolder',
                    fontSize: 20,
                    fontStyle: 'italic',
                    color: '#fff',
                    shadowColor: '#fff', //默认透明
                    shadowBlur: 10
                }
            },
            detail: {
              show:true,
                //backgroundColor: 'rgba(30,144,255,0.8)',
                borderWidth: 0,
                borderColor: '#fff',
                shadowColor: '#fff', //默认透明
                shadowBlur: 5,
                offsetCenter: [0, '50%'],       // x, y，单位px
                /*textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                    fontWeight: 'bolder',
                    color: '#fff'
                }*/
                //padding:1,
               fontSize:18,
              fontWeight: 'border',
              color: '#fff'
            },
            data: [{value: 40, name: 'km/h'}]
        },
        {
            name: '转速',
            type: 'gauge',
            center: ['15%', '55%'],    // 默认全局居中
            radius: '55%',
            min: 0,
            max: 6,
            endAngle: 45,
            splitNumber: 3  ,
            axisLine: {            // 坐标轴线
                lineStyle: {       // 属性lineStyle控制线条样式
                    color: [[0.29, 'lime'], [0.86, '#1e90ff'], [1, '#ff4500']],
                    width: 2,
                    shadowColor: '#fff', //默认透明
                    shadowBlur: 10
                }
            },
            axisLabel: {            // 坐标轴小标记
                textStyle: {       // 属性lineStyle控制线条样式
                    fontWeight: 'bolder',
                    color: '#fff',
                    shadowColor: '#fff', //默认透明
                    shadowBlur: 10,
                    fontSize:10
                }
            },
            axisTick: {            // 坐标轴小标记
                length: 12,        // 属性length控制线长
                lineStyle: {       // 属性lineStyle控制线条样式
                    color: 'auto',
                    shadowColor: '#fff', //默认透明
                    shadowBlur: 10
                }
            },
            splitLine: {           // 分隔线
                length: 10,         // 属性length控制线长
                lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                    width: 3,
                    color: '#fff',
                    shadowColor: '#fff', //默认透明
                    shadowBlur: 10
                }
            },
            pointer: {
                width: 5,
                shadowColor: '#fff', //默认透明
                shadowBlur: 5
            },
            title: {
                offsetCenter: ['25%', '-15%'],       // x, y，单位px
                textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                    fontWeight: 'normal',
                    fontStyle: 'italic',
                    color: '#fff',
                    shadowColor: '#fff', //默认透明
                    shadowBlur: 10,
                    fontSize:10
                }
            },
            detail: {
                //backgroundColor: 'rgba(30,144,255,0.8)',
                // borderWidth: 1,
              show:true,
                borderColor: '#fff',
                shadowColor: '#fff', //默认透明
                shadowBlur: 5,
                //width: 80,
                //height: 30,
              fontSize:15,
                offsetCenter: ['15%', '20%'],       // x, y，单位px
                textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                    fontWeight: 'bolder',
                    color: '#fff'
                }
            },
            data: [{value: 1.5, name: 'x1000 r/min'}]
        },
        {
            name: '油表',
            type: 'gauge',
            center: ['85%', '50%'],    // 默认全局居中
            radius: '60%',
            min: 0,
            max: 2,
            startAngle: 135,
            endAngle: 45,
            splitNumber: 2,
            axisLine: {            // 坐标轴线
                lineStyle: {       // 属性lineStyle控制线条样式
                    color: [[0.2, 'lime'], [0.8, '#1e90ff'], [1, '#ff4500']],
                    width: 2,
                    shadowColor: '#fff', //默认透明
                    shadowBlur: 10
                }
            },
            axisTick: {            // 坐标轴小标记
                length: 12,        // 属性length控制线长
                lineStyle: {       // 属性lineStyle控制线条样式
                    color: 'auto',
                    shadowColor: '#fff', //默认透明
                    shadowBlur: 10
                },
                splitNumber: 4
            },
            axisLabel: {
                show:true,
                textStyle: {       // 属性lineStyle控制线条样式
                    fontWeight: 'bolder',
                    color: '#fff',
                    shadowColor: '#fff', //默认透明
                    shadowBlur: 10
                },
                formatter: function (v) {
                    switch (v + '') {
                        case '0' :
                            return 'E';
                        case '1' :
                            return 'Gas';
                        case '2' :
                            return 'F';
                    }
                }
            },
            splitLine: {           // 分隔线
                length: 9,         // 属性length控制线长
                lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                    width: 3,
                    color: '#fff',
                    shadowColor: '#fff', //默认透明
                    shadowBlur: 10
                }
            },
            pointer: {
                width: 2,
                shadowColor: '#fff', //默认透明
                shadowBlur: 5
            },
            title: {
                show: false
            },
            detail: {
                show: false
            },
            data: [{value: 0.5, name: ''}]
        },
        {
            name: '水表',
            type: 'gauge',
            center: ['85%', '50%'],    // 默认全局居中
            radius: '60%',
            min: 0,
            max: 2,
            startAngle: 315,
            endAngle: 225,
            splitNumber: 2,
            axisLine: {            // 坐标轴线
                lineStyle: {       // 属性lineStyle控制线条样式
                    color: [[0.2, 'lime'], [0.8, '#1e90ff'], [1, '#ff4500']],
                    width: 2,
                    shadowColor: '#fff', //默认透明
                    shadowBlur: 10
                }
            },
            axisTick: {            // 坐标轴小标记
                show: false,

            },
            axisLabel: {
                show:true,
                fontSize:10,
                textStyle: {       // 属性lineStyle控制线条样式
                    fontWeight: 'bolder',
                    color: '#fff',
                    shadowColor: '#fff', //默认透明
                    shadowBlur: 10
                },
                formatter: function (v) {
                    switch (v + '') {
                        case '0' :
                            return 'H';
                        case '1' :
                            return 'Water';
                        case '2' :
                            return 'C';
                    }
                }
            },
            splitLine: {           // 分隔线
                length: 9,         // 属性length控制线长
                lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                    width: 3,
                    color: '#fff',
                    shadowColor: '#fff', //默认透明
                    shadowBlur: 10
                }
            },
            pointer: {
                width: 2,
                shadowColor: '#fff', //默认透明
                shadowBlur: 5
            },
            title: {
                show: false
            },
            detail: {
                show: false
            },
            data: [{value: 0.5, name: ''}]
        }
    ]
};

