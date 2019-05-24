var pieLabelTop = {
  normal: {
    label: {
      show: true,
      position: 'center',
      formatter: '{b}',
      textStyle: {
        baseline: 'bottom'
      }
    },
    labelLine: {
      show: false
    }
  }
};
var pieLabelFromatter = {
  normal: {
    label: {
      formatter: function (params) {
        return 100 - params.value + '%'
      },
      textStyle: {
        baseline: 'top'
      }
    }
  },
}
var pieLabelBottom = {
  normal: {
    color: '#ccc',
    label: {
      show: true,
      position: 'center'
    },
    labelLine: {
      show: false
    }
  },
  emphasis: {
    color: 'rgba(0,0,0,0)'
  }
};
var radius = ['25%', '45%'];
export const pieChart2Option = {
  //color: ['#3fb1e3', '#20f05b', '#ffee51', '#ffaf51', '#ff99cc', '#78e4f3'],
  legend: {
    x: 'center',
    y: 'center',
    data: [
      '住院', '门诊', '检查', '检验'/*,'Weixin',
            'Twitter', 'Skype', 'Messenger', 'Whatsapp', 'Instagram'*/
    ],
    show: false
  },
  /*title: {
      text: 'The App World',
      subtext: 'from global web index',
      x: 'center'
  },*/

  series: [
    {
      type: 'pie',
      center: ['12.5%', '50%'],
      radius: radius,
      x: '0%', // for funnel
      itemStyle: pieLabelFromatter,
      data: [
        {name: 'other', value: 46, itemStyle: pieLabelBottom},
        {name: '住院', value: 54, itemStyle: pieLabelTop}
      ]
    },
    {
      type: 'pie',
      center: ['37.5%', '50%'],
      radius: radius,
      x: '20%', // for funnel
      itemStyle: pieLabelFromatter,
      data: [
        {name: 'other', value: 56, itemStyle: pieLabelBottom},
        {name: '门诊', value: 44, itemStyle: pieLabelTop}
      ]
    },
    {
      type: 'pie',
      center: ['62.5%', '50%'],
      radius: radius,
      x: '40%', // for funnel
      itemStyle: pieLabelFromatter,
      data: [
        {name: 'other', value: 65, itemStyle: pieLabelBottom},
        {name: '检查', value: 35, itemStyle: pieLabelTop}
      ]
    },
    {
      type: 'pie',
      center: ['87.5%', '50%'],
      radius: radius,
      x: '60%', // for funnel
      itemStyle: pieLabelFromatter,
      data: [
        {name: 'other', value: 70, itemStyle: pieLabelBottom},
        {name: '检验', value: 30, itemStyle: pieLabelTop}
      ]
    }
  ]
};

