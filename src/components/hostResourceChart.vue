<template>
  <div style="width:100%;height: 192px">
    <div v-if="showTitle">
      <span class="xpanel-title name-title">{{hostName}}服务器状态</span>
      <span class="xpanel-more name-more" @click="more">更多</span>
    </div>

    <div :id="hostResourceChartContainer1" style="height:45%"/>
    <div :id="hostResourceChartContainer2" style="height:45%"/>
  </div>
</template>

<script>
  const echarts = require('echarts');
  const respData_init = require('@/assets/data/server-info-init.json')
  import {hostResourceChartOption1} from '../js/echarts/hostResourceChartOption.js'
  import {hostResourceChartOption2} from "../js/echarts/hostResourceChartOption.js"
  import {post, get} from '@/util/http'
  import {serviceInfo} from '../js/api/testSer'
  export default {
    name: 'hostResourceChart',
    props: {
      serverIp:{//当前要监控的服务器IP，由父组件中传入
         required:true
      },
      showTitle: { //是否显示标题，由父组件中传入,
        type:Boolean,
        default:true
      },
      hostName: { //主机名，由父组件中传入,
        type:String,
        default: ''
      }
    },
    data() {
      return {
        hostResourceChartContainer1: this.serverIp.replace(/\./g, "-") + "-hostResourceChartContainer1",
        hostResourceChartContainer2: this.serverIp.replace(/\./g, "-") + "-hostResourceChartContainer2",
        networks: [] , //本台服务器的各个网卡名称数组
        chart_cpu_mem_disk:null, //cpu-memory-disk chart
        chart_network:null,//network chart
      }
    },
    methods: {
      more() {

      }
    },
    mounted() {
      this.chart_cpu_mem_disk = echarts.init(document.getElementById(this.hostResourceChartContainer1), this.$currentTheme);
      this.chart_network = echarts.init(document.getElementById(this.hostResourceChartContainer2), this.$currentTheme);
      window.onresize = function () {//Echarts自适应浏览器窗口的大小
        this.chart_cpu_mem_disk.resize()
        this.chart_network.resize()
      }
      this.chart_cpu_mem_disk.setOption(hostResourceChartOption1)
      this.chart_network.setOption(hostResourceChartOption2);

      //网络流量折纸图初始化
      var initData = respData_init;
      var len = initData.length;
      var network_datetime = [];//网络流量图的x轴数据
      var network_input = [];
      var network_output = [];
      for (var i = 0; i < len; i++) {//初始化
        network_datetime.push(initData[i]["createDate"]);
        network_input.push(Math.floor(parseInt(initData[i]["network"]["ens160"]["bytes_recv"]) / (1024 * 1024)));
        network_output.push(Math.floor(parseInt(initData[i]["network"]["ens160"]["bytes_sent"]) / (1024 * 1024)));
      }
      this.chart_network.setOption({
        xAxis: {
          data: network_datetime
        },
        series: [{
          data: network_input
        }, {
          data: network_output
        }]
      });

      //定时获取数据更新图表
      var _this = this;
      setInterval(function () {
        serviceInfo().then((res) => {
          var serverinfo = res.data;
          console.log("======123==========")
          console.log(serverinfo);
          serverinfo = JSON.parse(serverinfo);
          _this.networks = Object.keys(serverinfo["network"]);//提取各个网卡名称，放入组件中备用
           console.log( _this.networks)
          var memory_free = parseInt(serverinfo["memory"]["free"]);
          var memory_used = parseInt(serverinfo["memory"]["used"]);
          console.log(memory_free)
          console.log(memory_used)
          //cpu
          var cpu_system = Math.floor(parseFloat(serverinfo["cpu"]["system"]));
          var cpu_user = Math.floor(parseFloat(serverinfo["cpu"]["user"]));
          var cpu_idle = Math.floor(parseFloat(serverinfo["cpu"]["idle"]));
          console.log(cpu_system)
          console.log(cpu_user)
          console.log(cpu_idle)
          //disk
          var disk_free = Math.floor(parseFloat(serverinfo["disk"]["free"]));
          var disk_used = Math.floor(parseFloat(serverinfo["disk"]["used"]));
          console.log(disk_free)
          console.log(cpu_user)
          _this.chart_cpu_mem_disk.setOption({
            series: [
              {
                data: [
                  {
                    value: memory_free, name: '空闲',
                    label: {
                      normal: {
                        show: true,
                        position: 'center',
                        formatter: function (params) {
                          console.log(params)
                          return params.percent + '%'
                          console.log(params.percent)
                        },
                        textStyle: {
                          color: '#b0c2f9',
                          fontSize: 11,
                        }
                      }
                    },
                    itemStyle: {
                      normal: {
                        color: '#367bec',
                      }
                    }
                  },
                  {value: memory_used, name: '已用'}
                ]
              },
              {
                data: [
                  {value: cpu_system, name: '系统'},
                  {value: cpu_user, name: '用户'},
                  {
                    value: cpu_idle, name: '空闲',
                    label: {
                      normal: {
                        show: true,
                        position: 'center',
                        formatter: function (params) {
                          return params.percent + '%'
                        },
                        textStyle: {
                          color: '#b0c2f9',
                          fontSize: 11,
                        }
                      }
                    },
                    itemStyle: {
                      normal: {
                        color: '#367bec',
                      }
                    }

                  }
                ]
              },
              {
                data: [
                  {
                    value: disk_free, name: '空闲',
                    label: {
                      normal: {
                        show: true,
                        position: 'center',
                        formatter: function (params) {
                          return params.percent + '%'
                        },
                        textStyle: {
                          color: '#b0c2f9',
                          fontSize: 11,
                        }
                      }
                    },
                    itemStyle: {
                      normal: {
                        color: '#3296ec',
                      }
                    }
                  },
                  {value: disk_used, name: '已用'}
                ]
              }]
          });

          //network
          var networks_input_total = 0; //汇总各网卡的瞬时输入总流量
          var networks_output_total = 0;//汇总各网卡的瞬时输出总流量
          for (var key in serverinfo["network"]) {
            networks_input_total += parseInt(serverinfo["network"][key]["bytes_recv"]);
            networks_output_total += parseInt(serverinfo["network"][key]["bytes_sent"]);
          }
          network_input.push(Math.floor(networks_input_total / (1024 * 1024)));//转换单位为Mb
          network_output.push(Math.floor(networks_output_total / (1024 * 1024)));//转换单位为Mb
          network_input.shift();
          network_output.shift();
          network_datetime.push(serverinfo["createDate"]);
          network_datetime.shift();
          _this.chart_network.setOption({
            xAxis: {
              data: network_datetime
            },
            series: [{
              data: network_input
            }, {
              data: network_output
            }]
          });

        }).catch(e => {
          console.log(e);
        });
      }, 10000);

    },

  }
</script>

<style scoped>

</style>
