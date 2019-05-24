var pie2Data = {
    "预约1": 544,
    "预约2": 757,
    "预约3": 657,
    "预约4": 144,
    "预约5": 432,
    "预约6": 322
}


export const pieChart3Option = {
    series: [
        {
            type: 'pie',
            radius: '75%',
            data: Object.keys(pie2Data).map(function (key) {
                return {
                    name: key,
                    value: pie2Data[key]
                };
            })
        }
    ]
};

