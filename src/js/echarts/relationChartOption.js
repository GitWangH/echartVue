
/*************** 关系图 **************/
    //初始化echarts实例
export const guageOption = {
    animationDurationUpdate: 1500,
    animationEasingUpdate: 'quinticInOut',
    label: {
        normal: {
            show: true,
            textStyle: {
                fontSize: 12
            }
        }
    },
    series: [{
        type: 'graph',
        symbolSize: 45,
        focusNodeAdjacency: true,
        roam: true,
        layout: 'force',
        force: {
            repulsion: 320 //斥力因子，值越大，斥力越大
        },
        label: {
            normal: {
                show: true,
                textStyle: {
                    fontSize: 12
                },
            }
        },
        edgeSymbolSize: [4, 50],
        edgeLabel: {
            normal: {
                show: true,
                textStyle: {
                    fontSize: 10
                },
                formatter: "{c}"
            }
        },
        categories: [{
            name: 'XXXX医院',
            itemStyle: {
                normal: {
                    color: '#f2637b'
                }
            }
        }, {
            name: '集成平台',
            itemStyle: {
                normal: {
                    color: "#eaa674",
                }
            }
        }, {
            name: '数据中心',
            itemStyle: {
                normal: {
                    color: "#3aa1ff",
                }
            }
        }, {
            name: '服务器',
            itemStyle: {
                normal: {
                    color: "#4ecb73",
                }
            }
        }],
        data: [{
            name: 'XXXX医院',
            category: 0,
            draggable: true
        }, {
            name: '集成平台',
            category: 1,
            draggable: true
        }, {
            name: '数据中心',
            category: 2,
            draggable: true
        }, {
            name: '服务器',
            category: 3,
            draggable: true
        }, {
            name: '护士工作站',
            category: 1,
            draggable: true,
        }, {
            name: 'EMR',
            category: 1,
            draggable: true,
        }, {
            name: 'LIST报告浏览',
            category: 1,
            draggable: true,
        }, {
            name: '输血医生系统',
            category: 1,
            draggable: true,
        }, {
            name: 'DB服务器',
            category: 3,
            draggable: true,
        }, {
            name: '业务服务器',
            category: 3,
            draggable: true,
        }, {
            name: '统计服务器',
            category: 3,
            draggable: true,
        }, {
            name: 'ECG',
            category: 2,
            draggable: true,
        }, {
            name: '住院医生工作站',
            category: 2,
            draggable: true,
        }, {
            name: 'OA',
            category: 2,
            draggable: true,
        }, {
            name: '门诊医生工作站',
            category: 2,
            draggable: true,
        }, {
            name: 'PACS报告',
            category: 2,
            draggable: true,
        }, {
            name: '手麻系统',
            category: 2,
            draggable: true,
        }],
        links: [{
            source: 0,
            target: 1,
            value: ''
        }, {
            source: 0,
            target: 2,
            value: ''
        }, {
            source: 0,
            target: 3,
            value: ''
        }, {
            source: 1,
            target: 4,
            value: ''
        }, {
            source: 1,
            target: 5,
            value: ''
        }, {
            source: 1,
            target: 6,
            value: ''
        }, {
            source: 1,
            target: 7,
            value: ''
        }, {
            source: 6,
            target: 7,
            value: '超集'
        }, {
            source: 3,
            target: 8,
            value: ''
        }, {
            source: 3,
            target: 9,
            value: ''
        }, {
            source: 3,
            target: 10,
            value: ''
        }, {
            source: 9,
            target: 10,
            value: '脚本'
        }, {
            source: 2,
            target: 11,
            value: ''
        }, {
            source: 2,
            target: 12,
            value: ''
        }, {
            source: 2,
            target: 13,
            value: ''
        }, {
            source: 2,
            target: 14,
            value: ''
        }, {
            source: 2,
            target: 15,
            value: ''
        }, {
            source: 2,
            target: 16,
            value: ''
        }, {
            source: 12,
            target: 13,
            value: 'iOS'
        }],
        lineStyle: {
            normal: {
                opacity: 0.9,
                width: 1,
                curveness: 0
            }
        }
    }]
};
