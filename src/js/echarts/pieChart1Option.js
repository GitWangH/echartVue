var one = {
    "普通门诊": 335,
    "特需门诊": 310,
    "其他": 234,
    "国际": 135
}

var two = {
    "其他": 1000,
    "副教授": 2000,
    "主治": 3000,
    "专家": 4000,
    "住院": 5000,
}

var three = {
    "预约1": 544,
    "预约2": 757,
    "预约3": 657,
    "预约4": 144,
    "预约5": 432,
    "预约6": 322
}
var rate = 0.7; //0.4+0.2*Math.random();
var linear_color = {
    colorStops: [{
        offset: 0,
        color: '#3fb1e3'
    }, {
        offset: 1,
        color: '#3fb1e3'
    }]
}

export const pieChart1Option = {
    series: [
        {
            type: 'pie',
            radius: '50%',
            center: ['18%', '40%'],
            data: Object.keys(one).map(function (key) {
                return {
                    name: key,
                    value: one[key]
                };
            })
        },
        {
            type: 'pie',
            radius: ["50%", '40%'],
            center: ['49%', '40%'],
            data: Object.keys(two).map(function (key) {
                return {
                    name: key,
                    value: two[key]
                };
            })
        },
        {
            type: 'pie',
            radius: '50%',
            center: ['80%', '40%'],
            data: Object.keys(three).map(function (key) {
                return {
                    name: key,
                    value: three[key]
                };
            })
        }
    ]
};


