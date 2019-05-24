<template>
  <div style="width:100%;height: 150px">
    <div>
      <span class="xpanel-title name-title">服务器列表</span>
      <span class="xpanel-more name-more">更多</span>
    </div>
    <div id="server-list-container" style="height:90%">
      <el-row :gutter="20">
        <el-col :span="6">

          <div class="grid-content bg-purple" @click="handleClick('数据中心','192.168.1.101')">
          <img class="server-status-img"  :src="serverStatusRunning">
          </div></el-col>
        <el-col :span="6">
          <div class="grid-content bg-purple" @click="handleClick('集成平台','192.168.1.101')">
          <img  class="server-status-img" :src="serverStatusRunning">
        </div></el-col>
        <el-col :span="6">
          <div class="grid-content bg-purple" @click="handleClick('电子病历','192.168.1.102')">
          <img  class="server-status-img" :src="serverStatusRunning">
        </div></el-col>
        <el-col :span="6">
          <div class="grid-content bg-purple" @click="handleClick('数据中心1','192.168.1.103')">
          <img  class="server-status-img" :src="serverStatusRunning">
        </div></el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="6">
          <div class="grid-content bg-purple" @click="handleClick('数据中心2','192.168.1.104')">
          <img  class="server-status-img" :src="serverStatusRunning">
        </div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content bg-purple" @click="handleClick('数据中心3','192.168.1.105')">
          <img  class="server-status-img" :src="serverStatusRunning">
        </div></el-col>
        <el-col :span="6">
          <div class="grid-content bg-purple" @click="handleClick('数据中心4','192.168.1.106')">
          <img  class="server-status-img" :src="serverStatusWarning">
        </div></el-col>
        <el-col :span="6">
          <div class="grid-content bg-purple" @click="handleClick('数据中心5','192.168.1.107')">
          <img  class="server-status-img" :src="serverStatusError">
        </div></el-col>
      </el-row>

    </div>

    <el-dialog
      :title="title"
      :visible.sync="dialogVisible"
      :lock-scroll="false"
      width="30%" height="180px">
      <hostResourceChart id="server1" :show-title="false" :server-ip="currentServerIp" :host-name="currentHostName"></hostResourceChart>
    </el-dialog>

  </div>
</template>

<script>
  import hostResourceChart from './hostResourceChart.vue'

  export default {
    name: "serverList",
    data() {
      return {
        dialogVisible: false,//弹出窗口可见性
        serverStatusError:  '/static/assets/img/error1.png',
        serverStatusWarning:'/static/assets/img/warning1.png',
        serverStatusRunning:'/static/assets/img/running.png',
        currentHostName: '', //当前主机名
        currentServerIp: ''  //当前服务器IP
      };
    },
    computed:{
      //定义弹出对话框的title
      title:function(){
        return this.currentHostName+"服务器状态";
      }
    },
    methods: {
      handleClick(hostName,ip){
        this.dialogVisible   = true;
        this.currentHostName =hostName;
        this.currentServerIp =ip;
      }
    },
    components: {
      hostResourceChart
    }
  };

</script>

<style scoped>

  .el-row {
    margin-bottom: 20px;
    &:last-child {
     margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    /*background: #d3dce6;*/
    position: relative;
    background-image:url("/static/assets/img/serverIcon_black.png");background-repeat:no-repeat;
  }

  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 48px;
    cursor: pointer;
    color: #fff;
    transition: all 0.4s;
  }
  .grid-content:hover {
    //background-size:110%;
    transform: scale(1.2);
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }

  img.server-status-img {
    position: absolute;
    width: 18px;
    height: 18px;
    bottom: 0px;
    right: 16px;
  }
</style>
