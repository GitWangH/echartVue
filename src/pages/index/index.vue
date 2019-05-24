<template>
  <div id="app">
    <header class="header">
      <h3>嘉和美康系统监控大屏</h3>
      <ul class="a-access">
        <li class="menu2" onMouseOver="this.className='menu1'"
            onMouseOut="this.className='menu2'">主题
          <div class="list">
            <a href="#" @click="changeTheme('shine')">shine</a>
            <a href="#" @click="changeTheme('jhmk')">jhmk</a>
          </div>
        </li>
      </ul>
    </header>
    <!--主体-->

    <div class="main clearfix">
      <div class="main-left">
        <div class="border-container">
          <applicationList></applicationList>
          <span class="top-left border-span"></span>
          <span class="top-right border-span"></span>
          <span class="bottom-left border-span"></span>
          <span class="bottom-right border-span"></span>
        </div>

        <div class="border-container">
          <gdMapChart></gdMapChart>
          <span class="top-left border-span"></span>
          <span class="top-right border-span"></span>
          <span class="bottom-left border-span"></span>
          <span class="bottom-right border-span"></span>
        </div>
        <div class="border-container">

          <div>
            <span class="xpanel-title name-title">数据中心定时作业列表</span>
            <span class="xpanel-more name-more">更多</span>
          </div>
          <table class="table table-kingdargen">
            <thead>
            <tr>
              <th>序号</th>
              <th style="text-align: left">名称</th>
             <!-- <th>ID</th>-->
              <!--<th>执行时间</th>-->
              <th>状态</th>
              <th>数据库</th>
              <!--<th>取药</th>-->
            </tr>
            </thead>
            <tbody>
            <tr v-for="(job,index) in dataRepositoryJobList">
              <td>{{index+1}}</td>
              <td style="text-align: left">{{job.name}}</td>
              <!--<td>{{job.totalCount}}</td>-->
              <!--<td>{{job.registrationCount}}</td>-->
              <td>{{job.visitCount}}</td>
              <td>{{job.paymentCount}}</td>
              <!--<td style="color: #FFFF00">{{departmentRanking.medicineCount}}</td>-->
            </tr>
            </tbody>
          </table>

          <span class="top-left border-span"></span>
          <span class="top-right border-span"></span>
          <span class="bottom-left border-span"></span>
          <span class="bottom-right border-span"></span>
        </div>

        <!--<div class="border-container">
          <guageChart></guageChart>
          <span class="top-left border-span"></span>
          <span class="top-right border-span"></span>
          <span class="bottom-left border-span"></span>
          <span class="bottom-right border-span"></span>
        </div>-->

        <div class="border-container">
          <lineChart4></lineChart4>
          <span class="top-left border-span"></span>
          <span class="top-right border-span"></span>
          <span class="bottom-left border-span"></span>
          <span class="bottom-right border-span"></span>
        </div>
        <div class="border-container">
          <pieChart2></pieChart2>
          <span class="top-left border-span"></span>
          <span class="top-right border-span"></span>
          <span class="bottom-left border-span"></span>
          <span class="bottom-right border-span"></span>
        </div>
      </div>

      <div class="main-middle">
        <div class="border-container">
          <systemRelationChart></systemRelationChart>
          <span class="top-left border-span"></span>
          <span class="top-right border-span"></span>
          <span class="bottom-left border-span"></span>
          <span class="bottom-right border-span"></span>
        </div>
        <div class="border-container">
          <div id="changedetail">
            <countUp></countUp>
            &nbsp;<br/>
            <br/>
            <pieChart1></pieChart1>
          </div>

          <ul class="three-pie clearfix">
            <li>
              <radarChart></radarChart>
            </li>
            <li>
              <funnelChart></funnelChart>
            </li>
          </ul>

          <span class="top-left border-span"></span>
          <span class="top-right border-span"></span>
          <span class="bottom-left border-span"></span>
          <span class="bottom-right border-span"></span>
        </div>
        <div class="border-container">
          <juniorServiceChart></juniorServiceChart>
          <span class="top-left border-span"></span>
          <span class="top-right border-span"></span>
          <span class="bottom-left border-span"></span>
          <span class="bottom-right border-span"></span>
        </div>
      </div>
      <div class="main-right">

        <div class="border-container">
          <table class="table table-kingdargen">
            <thead>
            <tr>
              <th>排名</th>
              <th style="text-align: left">科室</th>
              <th>总数</th>
              <th>挂号</th>
              <th>就诊</th>
              <th>缴费</th>
              <th>取药</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="(departmentRanking,index) in departmentRankings">
              <td>{{index+1}}</td>
              <td style="text-align: left">{{departmentRanking.name}}</td>
              <td>{{departmentRanking.totalCount}}</td>
              <td>{{departmentRanking.registrationCount}}</td>
              <td>{{departmentRanking.visitCount}}</td>
              <td>{{departmentRanking.paymentCount}}</td>
              <td style="color: #FFFF00">{{departmentRanking.medicineCount}}</td>
            </tr>
            </tbody>
          </table>
          <span class="top-left border-span"></span>
          <span class="top-right border-span"></span>
          <span class="bottom-left border-span"></span>
          <span class="bottom-right border-span"></span>
        </div>
        <div class="border-container">
          <server-list></server-list>
          <span class="top-left border-span"></span>
          <span class="top-right border-span"></span>
          <span class="bottom-left border-span"></span>
          <span class="bottom-right border-span"></span>
        </div>
        <div class="border-container">
          <lineChart2></lineChart2>
          <span class="top-left border-span"></span>
          <span class="top-right border-span"></span>
          <span class="bottom-left border-span"></span>
          <span class="bottom-right border-span"></span>
        </div>
        <div class="border-container">
          <barAndLineChart></barAndLineChart>
          <span class="top-left border-span"></span>
          <span class="top-right border-span"></span>
          <span class="bottom-left border-span"></span>
          <span class="bottom-right border-span"></span>
        </div>
        <div class="border-container">
          <hostResourceChart id="server1" :show-title="true" :server-ip="serverIp1" host-name="集成平台"></hostResourceChart>
          <span class="top-left border-span"></span>
          <span class="top-right border-span"></span>
          <span class="bottom-left border-span"></span>
          <span class="bottom-right border-span"></span>
        </div>
        <!--<div class="border-container">-->
          <!--<hostResourceChart id="server2" :show-title="true" :server-ip="serverIp2" host-name="数据中心"></hostResourceChart>-->
          <!--<span class="top-left border-span"></span>-->
          <!--<span class="top-right border-span"></span>-->
          <!--<span class="bottom-left border-span"></span>-->
          <!--<span class="bottom-right border-span"></span>-->
        <!--</div>-->
        <!--<div class="border-container">-->
        <!--<ul class="three-pie clearfix">-->
        <!--<li>-->
        <!--<proportionChart></proportionChart>-->
        <!--</li>-->
        <!--<li>-->
        <!--</li>-->
        <!--</ul>-->
        <!--<span class="top-left border-span"></span>-->
        <!--<span class="top-right border-span"></span>-->
        <!--<span class="bottom-left border-span"></span>-->
        <!--<span class="bottom-right border-span"></span>-->
        <!--</div>-->
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
  import applicationList from '../../components/applicationList.vue'
  import hostResourceChart from '../../components/hostResourceChart.vue'
  import systemRelationChart from '../../components/systemRelationChart.vue'
  import countUp from '../../components/countUp.vue'
  import radarChart from '../../components/radarChart.vue'
  import barAndLineChart from '../../components/barAndLineChart.vue'
  import juniorServiceChart from '../../components/juniorServiceChart.vue'
  import proportionChart from '../../components/proportionChart.vue'
  import Cookies from 'js-cookie'
  import {list} from '@/js/api/departmentRanking'
  import {queryTest} from '@/js/api/test'
  const departmentRankingData = require('@/assets/data/department-ranking-list.json');
  const dataRepositoryJobList = require('@/assets/data/data-repository-job-list.json');
  import Velocity from 'velocity-animate'

  export default {
    name: 'monitorApp',
    data() {
      return {
        departmentRankings: {},
        dataRepositoryJobList:dataRepositoryJobList,
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
      applicationList
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
      ,
      proportionChart
    },
    created() {

      list().then(res => {
        if (res && res.data) {
          this.departmentRankings = res.data
        } else {
          this.departmentRankings = departmentRankingData
        }
      })

      queryTest().then((res)=>{
         console.log(res.data)
          return res.data;
      })
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
  @import "../../assets/css/bootstrap.css";
  @import "../../assets/css/template2.css";

  ul.a-access {
    position: fixed;
    right: 40px;
    top: 10px;
    font-size: 18px;
    color: #5dc2fe;
    z-index: 999;
  }

  li {
    display: inline;
    list-style: none;
    list-style-position: outside;
    text-align: center;
    font-weight: bold;
    float: left;
  }

  .list a:link {
    color: #5dc2fe;
    text-decoration: none;
    float: left;
    width: 70px;
    padding: 5px 5px 0px 5px;
    text-align: center;
  }

  .list a:visited {
    color: #5dc2fe;
    text-decoration: none;
    float: left;
    padding: 5px 5px 0px 5px;
    width: 70px;
    text-align: center;
  }

  .list a:hover {
    color: white;
    float: left;
    padding: 5px 5px 0px 5px;
    font-weight: bold;
    width: 100%;
    text-decoration: none;
    background-color: #5dc2fe;
    text-align: center;
  }

  .list a:active {
    color: white;
    float: left;
    /*padding: 3px 3px 0px 20px;*/
    width: 70px;
    text-decoration: none;
    background-color: #BD06B4;
    text-align: center;
  }

  .list {
    line-height: 20px;
    text-align: left;
    padding: 4px;
    font-weight: normal;
  }

  .menu1 {
    width: 80px;
    height: auto;
    /*margin: 6px 4px 0px 0px;*/
    border: 1px solid #5dc2fe;
    background-color: #08285a;
    color: #5dc2fe;
    padding: 2px 0px;
    cursor: hand;
    overflow-y: hidden;
    filter: Alpha(opacity=70);
    -moz-opacity: 0.7;
    font-size: 18px;
    text-align: center;
  }

  .menu2 {
    width: 80px;
    height: 30px;
    /*margin: 6px 4px 0px 0px;*/
    background-color: #08285a;
    color: #5dc2fe;
    border: 1px solid #5dc2fe;
    padding: 2px 0px;
    overflow-y: hidden;
    cursor: hand;
    font-size: 18px;
    text-align: center;
  }

  .material-icons {
    font-family: 'Material Icons';
    font-weight: normal;
    font-style: normal;
    font-size: 24px;  /* Preferred icon size */
    display: inline-block;
    line-height: 1;
    text-transform: none;
    letter-spacing: normal;
    word-wrap: normal;
    white-space: nowrap;
    direction: ltr;

    /* Support for all WebKit browsers. */
    -webkit-font-smoothing: antialiased;
    /* Support for Safari and Chrome. */
    text-rendering: optimizeLegibility;

    /* Support for Firefox. */
    -moz-osx-font-smoothing: grayscale;

    /* Support for IE. */
    font-feature-settings: 'liga';
  }

</style>
