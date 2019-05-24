export const funnelChartOption = {
    /*title: {
        text: '漏斗图',
        subtext: '纯属虚构',
        left: 'left',
        top: 'bottom'
    },*/
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c}%"
    },
    legend: {
        orient: 'vertical',
        left: 'left',
        data: ['西药','中药','材料','检查','化验'],
        show:false
    },
    calculable: true,
    series: [
        {
            name: '门诊自',
            type: 'funnel',
            width: '40%',
            height: '45%',
            left: '0%',
            top: '50%',
            data:[
                {value: 60, name:'西药'},
                {value: 30, name:'中药'},
                {value: 10, name:'材料'},
                {value: 80, name:'检查'},
                {value: 100, name:'化验'}
            ]
        },
        {
            name: '门诊社保',
            type: 'funnel',
            width: '40%',
            height: '45%',
            left: '0%',
            top: '5%',
            sort: 'ascending',
            data:[
                {value: 60, name:'西药'},
                {value: 30, name:'中药'},
                {value: 10, name:'材料'},
                {value: 80, name:'检查'},
                {value: 100, name:'化验'}
            ]
        },
        {
            name: '住院社保',
            type:'funnel',
            width: '40%',
            height: '45%',
            left: '55%',
            top: '5%',
            label: {
                normal: {
                    position: 'left'
                }
            },
            data:[
                {value: 60, name: '西药'},
                {value: 30, name: '中药'},
                {value: 10, name: '材料'},
                {value: 80, name: '检查'},
                {value: 100, name: '化验'}
            ]
        },
        {
            name: '住院自',
            type:'funnel',
            width: '40%',
            height: '45%',
            left: '55%',
            top: '50%',
            sort: 'ascending',
            label: {
                normal: {
                    position: 'left'
                }
            },
            data:[
                {value: 60, name: '西药'},
                {value: 30, name: '中药'},
                {value: 10, name: '材料'},
                {value: 80, name: '检查'},
                {value: 100, name: '化验'}
            ]
        }
    ]
};
