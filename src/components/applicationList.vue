<template>
  <div style="width:100%;height: 150px">
    <div>
      <span class="xpanel-title name-title">应用服务状态</span>
      <span class="xpanel-more name-more">更多</span>
    </div>
    <div id="server-list-container" style="height:90%">
      <el-row :gutter="20">
        <el-col :span="6"><div class="grid-content bg-bingan" @click="dialogVisible = true">
          <img width="20px" height="20px" style="position: absolute;bottom: 0px;right: 16px;" :src="serverStatusRunning">
        </div></el-col>
        <el-col :span="6"><div class="grid-content bg-shousuMaZhui" @click="dialogVisible = true">
          <img width="18px" height="18px" style="position: absolute;bottom: 0px;right: 16px;" :src="serverStatusRunning">
        </div></el-col>
        <el-col :span="6"><div class="grid-content bg-menzhenZhiLiao" @click="dialogVisible = true">
          <img width="18px" height="18px" style="position: absolute;bottom: 0px;right: 16px;" :src="serverStatusRunning">
        </div></el-col>
        <el-col :span="6"><div class="grid-content bg-zhuyuanYiSheng" @click="dialogVisible = true">
          <img width="18px" height="18px" style="position: absolute;bottom: 0px;right: 16px;" :src="serverStatusRunning">
        </div></el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="6"><div class="grid-content bg-yaokuGuanli" @click="dialogVisible = true">
          <img width="18px" height="18px" style="position: absolute;bottom: 0px;right: 16px;" :src="serverStatusError">
        </div></el-col>
        <el-col :span="6"><div class="grid-content bg-menzhenShouFei" @click="dialogVisible = true">
          <img width="18px" height="18px" style="position: absolute;bottom: 0px;right: 16px;" :src="serverStatusRunning">
        </div>
        </el-col>
        <el-col :span="6"><div class="grid-content bg-menzhenGongzhuozhan" @click="dialogVisible = true">
          <img width="18px" height="18px" style="position: absolute;bottom: 0px;right: 16px;" :src="serverStatusRunning">
        </div></el-col>
        <el-col :span="6"><div class="grid-content bg-menzhenGuaHao" @click="dialogVisible = true">
          <img width="18px" height="18px" style="position: absolute;bottom: 0px;right: 16px;" :src="serverStatusWarning">
        </div></el-col>
      </el-row>

    </div>



  </div>
</template>

<script>

  export default {
    name: "serverList",
    data() {
      return {
        serverStatusError:'/static/assets/img/error1.png',
        serverStatusWarning:'/static/assets/img/warning1.png',
        serverStatusRunning:'/static/assets/img/running.png'
      };
    },
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
  .bg-bingan {
    /*background: #d3dce6;*/
    position: relative;
    background-size:65%;
    background-image:url("/static/assets/img/sso/病案系统-min.png");background-repeat:no-repeat;
  }
  .bg-menzhenZhiLiao {
    /*background: #d3dce6;*/
    position: relative;
    background-size:65%;
    background-image:url("/static/assets/img/sso/门诊治疗-min.png");background-repeat:no-repeat;
  }
  .bg-shousuMaZhui {
    /*background: #d3dce6;*/
    position: relative;
    background-size:65%;
    background-image:url("/static/assets/img/sso/手术麻醉-min.png");background-repeat:no-repeat;
  }
  .bg-zhuyuanYiSheng {
    /*background: #d3dce6;*/
    position: relative;
    background-size:65%;
    background-image:url("/static/assets/img/sso/住院医生工作站-min.png");background-repeat:no-repeat;
  }
  .bg-yaokuGuanli {
    /*background: #d3dce6;*/
    position: relative;
    background-size:65%;
    background-image:url("/static/assets/img/sso/药库管理系统-min.png");background-repeat:no-repeat;
  }
  .bg-menzhenShouFei {
    /*background: #d3dce6;*/
    position: relative;
    background-size:65%;
    background-image:url("/static/assets/img/sso/收费系统图标-min.png");background-repeat:no-repeat;
  }
  .bg-menzhenGongzhuozhan {
    /*background: #d3dce6;*/
    position: relative;
    background-size:65%;
    background-image:url("/static/assets/img/sso/门诊医生工作站-min.png");background-repeat:no-repeat;
  }
  .bg-menzhenGuaHao {
    /*background: #d3dce6;*/
    position: relative;
    background-size:65%;
    background-image:url("/static/assets/img/sso/门诊挂号-min.png");background-repeat:no-repeat;
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
</style>
