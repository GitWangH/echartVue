<template>
  <div style="width:100%;height: 200px">
    <!--<div>-->
      <!--<span class="xpanel-title name-title">患者主索引1</span>-->
      <!--<span class="xpanel-more name-more">更多</span>-->
    <!--</div>-->

    <div class="datav-layout datavLayout">

      <div style="width: 20px; height: 34px; display: block; z-index: 0; transform: rotate(0deg); opacity: 1; pointer-events: auto; left: 1090px; top: 190px;">
        <img src="/static/assets/img/line2.png" height="200" width="150"/>
      </div>

      <div id="proportionContainer" style="width: 100%;height: 100%"></div>

      <div  style="margin-left:80%; margin-top: -100%;width: 60px; height: 80px; display: block; z-index: 0; transform: rotate(0deg); opacity: 1; pointer-events: auto;">
        <div  style=" width: 60px; height: 80px; display: flex; align-items: center; justify-content: flex-start; color: rgb(46, 219, 255); font-weight: normal; font-family: sans-serif, Arial, sans-serif; font-size: 20px; text-overflow: ellipsis; white-space: nowrap; overflow: hidden;">01</div>
      </div>

      <div class="-datav-com absolute main-img-1-1-4" style="margin-left:67%; margin-top: -33%;width: 20px; height: 34px; display: block; z-index: 0; transform: rotate(0deg); opacity: 1; pointer-events: auto; left: 1190px; top: 195px;">
        <img src="/static/assets/img/line.png" height="20" width="10" />
      </div>

      <div class="-datav-com absolute main-title-1-2-6" style="margin-left:3%; margin-top: -27%;width: 140px; height: 30px; display: block; z-index: 0; transform: rotate(0deg); opacity: 1; pointer-events: auto; left: 1100px; top: 190px;">
        <div class="-datav-wraper" style="width: 140px; height: 30px; display: flex; align-items: center; justify-content: flex-start; color: rgb(255, 255, 255); font-weight: lighter; font-family: “Microsoft Yahei”, Arial, sans-serif; font-size: 11px; text-overflow: ellipsis; white-space: nowrap; overflow: hidden;">本地病人占比</div>
      </div>

      <div class="-datav-com absolute main-title-1-2-6" style="margin-left:3%; margin-top: -11%;width: 180px; height: 30px; display: block; z-index: 0; transform: rotate(0deg); opacity: 1; pointer-events: auto; left: 1100px; top: 205px;">
        <div class="-datav-wraper" style="width: 180px; height: 30px; display: flex; align-items: center; justify-content: flex-start; color: rgb(46, 219, 255); font-weight: lighter; font-family: “Microsoft Yahei”, Arial, sans-serif; font-size: 2px; text-overflow: ellipsis; white-space: nowrap; overflow: hidden;">Proportion of local patients</div>
      </div>

      <div class="-datav-com absolute bg-box-1-3-6" style="margin-left:3%; margin-top: 70%;width: 123px; height: 80px; display: block; z-index: 0; transform: rotate(0deg); opacity: 1; pointer-events: auto; left: 1095px; top: 330px;">
        <div class="-datav-wraper" style="width:65px; height: 45px; border: none; border-radius: 0px; background: rgba(0, 123, 255, 0.1); filter: blur(2px);"></div>
      </div>

      <div class="-datav-com absolute bg-box-1-3-6" style="margin-left:52%; margin-top: -52%;width: 123px; height: 80px; display: block; z-index: 0; transform: rotate(0deg); opacity: 1; pointer-events: auto; left: 1168px; top: 330px;">
        <div class="-datav-wraper" style="width:65px; height: 45px; border: none; border-radius: 0px; background: rgba(0, 123, 255, 0.1); filter: blur(2px);"></div>
      </div>

      <div class="-datav-com absolute number-title-flop-1-6-4" style="margin-left:-8%; margin-top: -47%;width: 100px; height: 70px; display: block; z-index: 0; transform: rotate(0deg); opacity: 1; pointer-events: auto; left: 1080px; top: 330px;">
        <div class="-datav-wraper" style="width: 100px; height: 70px; display: block; align-items: start;">
          <div class="title-container" style="display: block; align-items: center; color: rgb(19, 151, 255); font-weight: lighter; font-family: “Microsoft Yahei”; font-size: 10px; text-overflow: ellipsis; white-space: nowrap; overflow: hidden; line-height: normal; margin: 0px 0px -25px;">本地病人数</div>
          <div class="counter-container" style="display: flex; align-items: baseline; color: rgb(255, 255, 255); text-align: center; white-space: nowrap; justify-content: flex-start; line-height: 82px; font-family: “Microsoft Yahei”; width: 100px; height: 67px; background-color: rgba(0, 0, 0, 0);">
            <span class="number real-number" style="background-color:rgba(51,51,51,0);display:inline-block;letter-spacing:0.02em;text-indent:2.3em;height:auto;line-height:normal;font-size:14px;font-weight:normal;margin-right:0em;margin-top:30%;border-radius:6px;">6</span>
            <span class="number real-number" style="background-color:rgba(51,51,51,0);display:inline-block;letter-spacing:0.02em;text-indent:0.02em;height:auto;line-height:normal;font-size:14px;font-weight:normal;letter-spacing:0.02em;margin-right:0em;border-radius:6px;">3</span>
            <span class="number real-number" style="background-color:rgba(51,51,51,0);display:inline-block;letter-spacing:0.02em;text-indent:0.02em;height:auto;line-height:normal;font-size:14px;font-weight:normal;letter-spacing:0.02em;margin-right:0em;border-radius:6px;">2</span>
            <span class="number real-number" style="background-color:rgba(51,51,51,0);display:inline-block;letter-spacing:0.02em;text-indent:0.02em;height:auto;line-height:normal;font-size:14px;font-weight:normal;letter-spacing:0.02em;margin-right:0em;border-radius:6px;">1</span>
          </div>
        </div>
      </div>

      <div style="margin-left:42%; margin-top: -45%;width: 100px; height: 70px; display: block; z-index: 0; transform: rotate(0deg); opacity: 1; pointer-events: auto; left: 1150px; top: 330px;">
        <div  style="width: 100px; height: 70px; display: block; align-items: start;">
          <div class="title-container" style="display: block; align-items: center; color: rgb(19, 151, 255); font-weight: lighter; font-family: “Microsoft Yahei”; font-size: 10px; text-overflow: ellipsis; white-space: nowrap; overflow: hidden; line-height: normal; margin: 0px 0px -25px;">同比增长</div>
          <div class="counter-container" style="display: flex; align-items: baseline; color: rgb(19, 151, 255); text-align: center; white-space: nowrap; justify-content: flex-start; line-height: 72px; font-family: “Microsoft Yahei”; width: 100px; height: 67px; background-color: rgba(0, 0, 0, 0);">
            <span class="prefix" style="font-size: 20px; color: #ff4e00; font-weight: normal; vertical-align: super;text-indent:1.4em">+</span>
            <span class="number real-number" style="background-color:rgba(51,51,51,0);display:inline-block;letter-spacing:0.02em;text-indent:0.02em;height:auto;line-height:normal;font-size:14px;font-weight:normal;letter-spacing:0.02em;margin-right:0em;border-radius:6px;">1</span>
            <span class="number real-number" style="background-color:rgba(51,51,51,0);display:inline-block;letter-spacing:0.02em;text-indent:0.02em;height:auto;line-height:normal;font-size:14px;font-weight:normal;letter-spacing:0.02em;margin-right:0em;border-radius:6px;">0</span>
            <span class="suffix" style=" font-size: 14px; color: #1397ff; font-weight: normal; vertical-align: super">%</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>

  * {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    vertical-align: baseline
  }

</style>
<script>
  import echarts from "echarts";
  import {proportionChartOption} from '../js/echarts/proportionChartOption.js'
  export default {
    data() {
      return {
        chart: null
      };
    },
    mounted() {
      this.initChart();
    },
    beforeDestroy() {
      if (!this.chart) {
        return;
      }
      this.chart.dispose();
      this.chart = null;
    },
    methods: {
      initChart() {
        //这里我们用固定的数据，真正使用时，用父组件传递来的数据替换series即可
        let mChart = echarts.init(document.getElementById('proportionContainer'), this.$currentTheme);
        window.onresize = mChart.resize;
        mChart.setOption(proportionChartOption)
      }
    }
  }
</script>
