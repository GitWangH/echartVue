const echarts = require('echarts');
//获取排行数据
export const rankChartOption = {
    tooltip: {
        trigger: "axis",
        axisPointer: {
            type: "shadow"
        },
        formatter: function(params) {
            const param = params[0];
            const marker = '<span style="display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color:#e6b600;"></span>';
            const suffix = '<span style="margin-left:5px;font-size:12px;">条</span>';
            return param.name + "<br />" +
                marker + "排名：" + (param.dataIndex+1) + "<br />" +
                marker + "数据总量：" + param.value + suffix;
        }
    },
    grid: {
        top: 10,
        bottom: 10,
        left: 100
    },
    xAxis: {
        show: false,
        type: "value"
    },
    yAxis: {
        type: "category",
        inverse: true,
        axisLine: {show: false},
        axisTick: {show: false},
        axisLabel: {
            fontSize: 12,
            color: "#b0c2f9"
        }
    },
    series: [{
        name: "数据总量排行",
        type: "bar",
        barCategoryGap: "60%",
        label: {
            show: true,
            position: "right",
            fontSize: 12,
            color: "#188df0",
            emphasis: {
                color: "#e6b600"
            }
        },
        itemStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(
                    0, 1, 1, 1,
                    [
                        {offset: 0, color: '#b0c2f9'},
                        {offset: 0.5, color: '#188df0'},
                        {offset: 1, color: '#185bff'}
                    ]
                )
            },
            emphasis: {
                color: new echarts.graphic.LinearGradient(
                    0, 1, 1, 1,
                    [
                        {offset: 0, color: '#b0c2f9'},
                        {offset: 0.7, color: '#e6b600'},
                        {offset: 1, color: '#ceac09'}
                    ]
                )
            }
        }
    }]
}
