<template>
  <div id="app" class="wrapper">
    <ul class="a-access">
      <li class="menu2" onMouseOver="this.className='menu1'"
          onMouseOut="this.className='menu2'">主题
        <div class="list">
          <a href="#" @click="changeTheme('shine')">shine</a>
          <a href="#" @click="changeTheme('jhmk')">jhmk</a>

        </div>
      </li>
      <!--<li>-->
      <!--<button v-on:click="showAllDiv()">-->
      <!--Toggle-->
      <!--</button>-->
      <!--</li>-->
    </ul>
    <div class="container-fluid">
      <div class="row fill-h">
        <div class="col-lg-3 fill-h">
          <!--<transition-->
          <!--v-on:before-enter="beforeEnter"-->
          <!--v-on:enter="enter"-->
          <!--v-on:leave="afterEnter"-->
          <!--&gt;-->
          <div class="xpanel-wrapper xpanel-wrapper-1-30" v-if="getDivVisible('rankChart')">
            <div class="xpanel">
              <div class="fill-h">
                <rankChart></rankChart>
              </div>
            </div>
          </div>
          <!--</transition>-->

          <div class="xpanel-wrapper xpanel-wrapper-1-30" v-if="getDivVisible('gdMapChart')">
            <div class="xpanel">
              <div class="fill-h">
                <gdMapChart></gdMapChart>
              </div>
            </div>
          </div>
          <div class="xpanel-wrapper xpanel-wrapper-1-20" v-if="getDivVisible('lineChart4')">
            <div class="xpanel">
              <div class="fill-h">
                <lineChart4></lineChart4>
              </div>
            </div>
          </div>
          <div class="xpanel-wrapper xpanel-wrapper-1-30" v-if="getDivVisible('lineChart2')">
            <div class="xpanel">
              <div class="fill-h">
                <lineChart2></lineChart2>
              </div>
            </div>
          </div>
          <div class="xpanel-wrapper xpanel-wrapper-1-30" v-if="getDivVisible('funnelChart')">
            <div class="xpanel">
              <div class="fill-h">
                <funnelChart></funnelChart>
              </div>
            </div>
          </div>
        </div>

        <div class="col-lg-6 fill-h">
          <div class="xpanel-wrapper xpanel-wrapper-1-50">
            <div class="xpanel">
              <!--系统关系图-->
              <div class="fill-h">
                <systemRelationChart v-if="getDivVisible('systemRelationChart')"></systemRelationChart>
              </div>
            </div>
          </div>
          <div class="xpanel-wrapper xpanel-wrapper-1-15">
            <div class="xpanel">
              <div class="fill-h">
                <countUp v-if="getDivVisible('countUp')"></countUp>
                <pieChart1 v-if="getDivVisible('pieChart1')"></pieChart1>
              </div>
            </div>
          </div>
          <div class="xpanel-wrapper xpanel-wrapper-1-30">
            <div class="xpanel">
              <div class="fill-h">
                <juniorServiceChart v-if="getDivVisible('juniorServiceChart')"></juniorServiceChart>
              </div>
            </div>
          </div>
          <div class="xpanel-wrapper xpanel-wrapper-1-20">
            <div class="xpanel">
              <div class="fill-h">
                <barAndLineChart v-if="getDivVisible('barAndLineChart')"></barAndLineChart>
              </div>
            </div>
          </div>
          <div class="xpanel-wrapper xpanel-wrapper-1-30">
            <div class="xpanel">
              <div class="fill-h">
                <pieChart2 v-if="getDivVisible('pieChart2')"></pieChart2>
              </div>
            </div>
          </div>
        </div>

        <div class="col-lg-3 fill-h">
          <div class="xpanel-wrapper xpanel-wrapper-1-30" style="min-height: 275px" v-if="getDivVisible('radarChart')">
            <div class="xpanel">
              <div class="fill-h">
                <radarChart></radarChart>
              </div>
            </div>
          </div>
          <div class="xpanel-wrapper xpanel-wrapper-1-30" v-if="getDivVisible('guageChart')">
            <div class="xpanel">
              <div class="fill-h">
                <guageChart></guageChart>
              </div>
            </div>
          </div>
          <div class="xpanel-wrapper xpanel-wrapper-1-15" v-if="getDivVisible('serverList')">
            <div class="xpanel">
              <div class="fill-h">
                <server-list></server-list>
              </div>
            </div>
          </div>
          <div class="xpanel-wrapper xpanel-wrapper-1-30" v-if="getDivVisible('hostResourceChart')">
            <div class="xpanel">
              <div class="fill-h">
                <hostResourceChart id="server1" :server-ip="serverIp1"></hostResourceChart>
              </div>
            </div>
          </div>
          <div class="xpanel-wrapper xpanel-wrapper-1-30" v-if="getDivVisible('hostResourceChart1')">
            <div class="xpanel">
              <div class="fill-h">
                <hostResourceChart id="server2" :server-ip="serverIp2"></hostResourceChart>
              </div>
            </div>
          </div>
          <div class="xpanel-wrapper xpanel-wrapper-1-30" v-if="getDivVisible('wordChart')">
            <div class="xpanel">
              <div class="fill-h">
                <wordChart></wordChart>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
  import cpuPieChart from '../../components/cpuPieChart.vue'
  import relationChart from '../../components/relationChart.vue'
  import lineChart1 from '../../components/lineChart1.vue'
  import lineChart2 from '../../components/lineChart2.vue'
  import lineChart3 from '../../components/lineChart3.vue'
  import lineChart4 from '../../components/lineChart4.vue'
  import pieChart1 from '../../components/pieChart1.vue'
  import pieChart2 from '../../components/pieChart2.vue'
  import pieChart3 from '../../components/pieChart3.vue'
  import rankChart from '../../components/rankChart.vue'
  import ballChart from '../../components/ballChart.vue'
  import wordChart from '../../components/wordChart.vue'
  import guageChart from '../../components/guageChart.vue'
  import funnelChart from '../../components/funnelChart.vue'
  import gdMapChart from '../../components/gdMapChart.vue'
  import serverList from '../../components/serverList.vue'
  import hostResourceChart from '../../components/hostResourceChart.vue'
  import systemRelationChart from '../../components/systemRelationChart.vue'
  import countUp from '../../components/countUp.vue'
  import radarChart from '../../components/radarChart.vue'
  import barAndLineChart from '../../components/barAndLineChart.vue'
  import juniorServiceChart from '../../components/juniorServiceChart.vue'
  import Cookies from 'js-cookie'
  import {list} from '@/js/api/departmentRanking'

  const departmentRankingData = require('@/assets/data/department-ranking-list.json')
  import Velocity from 'velocity-animate'

  export default {
    name: 'monitorApp',
    data() {
      return {
        departmentRankings: {},
        serverIp1: "192.168.254.18",
        serverIp2: "192.168.254.19"
      }
    },
    components: {
      cpuPieChart
      ,
      pieChart1
      ,
      pieChart2
      ,
      pieChart3
      ,
      lineChart1
      ,
      lineChart2
      ,
      lineChart3
      ,
      lineChart4
      ,
      barAndLineChart
      ,
      relationChart
      ,
      rankChart
      ,
      wordChart
      ,
      ballChart
      ,
      guageChart
      ,
      serverList
      ,
      hostResourceChart
      ,
      funnelChart
      ,
      gdMapChart
      ,
      systemRelationChart
      ,
      countUp
      ,
      radarChart
      ,
      juniorServiceChart
    },
    created() {
      list().then(res => {
        if (res && res.data) {
          this.departmentRankings = res.data
        } else {
          this.departmentRankings = departmentRankingData
        }
      })
    },
    mounted() {
      this.showAllDiv();
    },
    methods: {
      changeTheme(themeName) {
        Cookies.set('currentTheme', themeName)
        location.reload()
      },
      getDivVisible: function (elId) {
        let ret = false;
        this.$store.state.divShowSeqT1.forEach(function
          (item, index, array) {
          if (item && item.name === elId) {
            // console.log('got it !!');
            // console.log('itemShow='+item.show);
            ret = item.show;
            // console.log('ret='+ret);
          }
        });
        return ret;
      },
      setDivVisible: function (elId, elState) {
        this.$store.state.divShowSeqT1.forEach(function
          (item, index, array) {
          if (item && item.name === elId) {
            item.show = elState;
            return;
          }
        })
      },
      toggleDiv: function (elId) {
        let elState = this.getDivVisible(elId);
        elState = !elState;
        this.setDivVisible(elId, elState);
      },
      showAllDiv: function () {
        console.log('COUNT=' + this.$store.state.divShowSeqT1.length)
        // console.log('array2='+JSON.stringify(this.$store.state));
        let appHandle = this
        this.$store.state.divShowSeqT1.forEach(function
          (item, index, array) {
          // console.log("forEach "+JSON.stringify(item));
          // console.log("forEach "+item.name)
          // console.log("forEach "+item.show)
          // console.log("forEach "+item.seqId)

          setTimeout(() => {
            console.log(item.name)
            appHandle.toggleDiv(item.name)
          }, 300 * item.seqId)
        })
      },

      showRadarChart: function (el, done) {
        console.log('el=======showRadarChart');
        this.setDivVisible('radarChart', true)
        // Velocity({ complete: done})
      },
      showCountUp: function (el, done) {
        console.log('el=======showRadarChart');
        this.$store.state.countUpVisible = true;
        // this.setDivVisible('countUp', true)
        // Velocity({ complete: done})
      },
      completeFunc: function (el, done) {
        this.showFunnelChart();
        console.log('el=======' + el);
        Velocity({complete: done})
      },
      beforeEnter: function (el) {
        Velocity(el, {opacity: 0}, {transformOrigin: 'left'})
        // el.style.opacity = 0
        // el.style.transformOrigin = 'left'
      },
      enter: function (el, done) {
        Velocity(el, {opacity: 1}, {duration: 3000})
      },
      afterEnter: function (el, done) {
        Velocity(el, {opacity: 1}, {duration: 1000}, {complete: this.showRadarChart(el, done)})
      },

      beforeAppear: function (el) {
        Velocity(el, {opacity: 0}, {transformOrigin: 'left'})
        // el.style.opacity = 0
        // el.style.transformOrigin = 'left'
      },
      appear: function (el, done) {
        Velocity(el, {opacity: 1}, {duration: 3000})
      },
      afterAppear: function (el, done) {
        // this.setDivVisible('countUp', true)
        this.$store.state.countUpVisible = true;
        Velocity(el, {opacity: 1}, {duration: 1000}, {complete: this.showCountUp(el, done)})
      }
    }
  }
</script>

<style>
  @import "../../assets/css/app.css";
  @import "../../assets/css/bootstrap.css";

</style>
