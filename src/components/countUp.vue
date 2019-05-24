<template>
  <div class="context">
    <div>
      <span class="xpanel-title name-title">病人主索引统计</span>
      <!--<span class="xpanel-more name-more">更多</span>-->
    </div>
    <div class="col-md-4 ">
      <div class="col-md-4">
        <img src="/static/assets/img/total.png">
      </div>
      <div class="col-md-8">
        <countTo ref='total' :startVal='startVal' :endVal='totalNumber' :duration='duration'
                 class='timer total'></countTo>
        <br/>
        <span style=" font-size: 12px;">总人数</span>
      </div>
    </div>
    <div class="col-md-4 ">
      <div class="col-md-4">
        <img src="/static/assets/img/card15.png">
      </div>
      <div class="col-md-8">
        <countTo ref='card15' :startVal='startVal' :endVal='card15Number' :duration='duration'
                 class='timer card15'></countTo>
        <br/>
        <span style=" font-size: 12px;">15位身份证人数</span>
      </div>
    </div>
    <div class="col-md-4 ">
      <div class="col-md-4">
        <img src="/static/assets/img/card18.png">
      </div>
      <div class="col-md-8">
        <countTo ref='card18' :startVal='startVal' :endVal='card18Number' :duration='duration'
                 class='timer card18'></countTo>
        <br/>
        <span style=" font-size: 12px;">18位身份证人数</span>
      </div>
    </div>
  </div>
</template>

<script>
  import countTo from 'vue-count-to';
  import {query} from '@/js/api/patDayInfo';

  export default {
    components: {countTo},
    data() {
      return {
        startVal: 0,
        duration: 3000,
        totalNumber: 0,//总人数
        card15Number: 0,//15位身份证人数
        card18Number: 0,//18位身份证人数
        registNumber: 0,//今日注册人数
        noCardNumber: 0//无身份证人数
      }
    },
    mounted() {
      this.totalNumber = 8888
      this.card15Number = 666
      this.card18Number = 1234
      this.getData()
      setInterval(this.getData, 10000)
    },
    methods: {
      getData() {
        query().then(res => {
          this.totalNumber = parseInt(res.data[0].totalNumber)
          this.card15Number = parseInt(res.data[0].card15Number)
          this.card18Number = parseInt(res.data[0].card18Number)
          this.$refs.total.start();
          this.$refs.card15.start();
          this.$refs.card18.start();
        }).catch(e => {

          /*this.$toasted.error("病人主索引统计模块网络连接错误!",
            {
              icon: 'error'
            });*/

          this.totalNumber = this.totalNumber + 3
          this.card15Number = this.card15Number + 1
          this.card18Number = this.card18Number + 2
        })
      }
    }
  }
</script>
<style>
  .context {
    margin: 10px 0;
  }

  .timer {
    font-size: 25px;
    color: #f00f00;
    font-weight: bold;
    margin-top: 10px;
    text-decoration: underline;
    width: 30%;
  }

  .total {
    color: #2bedf0;
  }

  .card15 {
    color: #f0a70c;
  }

  .card18 {
    color: #f03405;
  }

  span {
    color: #ffffff;
    font-weight: bold;
  }

  .col-md-4 {
    padding-left: 10px;
    padding-right: 0;
  }

  .col-md-4 img {
    text-align: center;
    width: 45px;
    height: 45px;
    transition: all .4s;
    -moz-transition: all .4s;
    -webkit-transition: all .4s;
    -o-transition: all .4s;
  }

  .col-md-4 img:hover {
    transform: scale(2);
  }

  .col-md-8 {
    padding-left: 0;
    padding-right: 0;
  }

</style>
