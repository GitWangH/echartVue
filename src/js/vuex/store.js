import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  // 定义状态
  state: {
    divShowSeqT1:
      [{
        name: 'rankChart',
        show: false,
        seqId: 1
      }, {
        name: 'gdMapChart',
        show: false,
        seqId: 2
      }, {
        name: 'lineChart4',
        show: false,
        seqId: 3
      }, {
        name: 'lineChart2',
        show: false,
        seqId: 4
      }, {
        name: 'funnelChart',
        show: false,
        seqId: 5
      }, {
        name: 'radarChart',
        show: false,
        seqId: 1
      }, {
        name: 'guageChart',
        show: false,
        seqId: 2
      },  {
        name: 'serverList',
        show: false,
        seqId: 3
      }, {
        name: 'hostResourceChart',
        show: false,
        seqId: 4
      }, {
        name: 'hostResourceChart1',
        show: false,
        seqId: 5
      }, {
        name: 'dataTableChart',
        show: false,
        seqId: 6
      }, {
        name: 'wordChart',
        show: false,
        seqId: 7
      }, {
        name: 'systemRelationChart',
        show: false,
        seqId: 10
      }, {
        name: 'countUp',
        show: false,
        seqId: 9
      }, {
        name: 'pieChart1',
        show: false,
        seqId: 9
      }, {
        name: 'juniorServiceChart',
        show: false,
        seqId: 8
      }, {
        name: 'barAndLineChart',
        show: false,
        seqId: 8
      }, {
        name: 'pieChart2',
        show: false,
        seqId: 7
      },
      ],
    divShowSeqIdx:
      [{
        name: 'rankChart',
        show: true,
        seqId: 1
      }, {
        name: 'gdMapChart',
        show: true,
        seqId: 2
      }, {
        name: 'lineChart4',
        show: true,
        seqId: 3
      }, {
        name: 'lineChart2',
        show: true,
        seqId: 4
      }, {
        name: 'funnelChart',
        show: true,
        seqId: 5
      }, {
        name: 'radarChart',
        show: true,
        seqId: 1
      }, {
        name: 'guageChart',
        show: true,
        seqId: 2
      }, {
        name: 'hostResourceChart',
        show: true,
        seqId: 3
      }, {
        name: 'hostResourceChart1',
        show: true,
        seqId: 4
      }, {
        name: 'dataTableChart',
        show: true,
        seqId: 5
      }, {
        name: 'wordChart',
        show: true,
        seqId: 6
      }, {
        name: 'systemRelationChart',
        show: true,
        seqId: 10
      }, {
        name: 'countUp',
        show: true,
        seqId: 9
      }, {
        name: 'pieChart1',
        show: true,
        seqId: 9
      }, {
        name: 'juniorServiceChart',
        show: true,
        seqId: 8
      }, {
        name: 'barAndLineChart',
        show: true,
        seqId: 8
      }, {
        name: 'pieChart2',
        show: true,
        seqId: 7
      },
      ]
  }
})

export default store
