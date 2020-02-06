<template>
    <el-container>
  <el-header>
      <!-- 表头导航栏 -->
      <el-menu
    
  :default-active="activeIndex2"
  class="el-menu-demo"
   mode="horizontal"
  @select="handleSelect"
  background-color="#8E8E8E"
  text-color="#67C23A"
  active-text-color="#ffd04b">
  <el-menu-item index="1" id="bg" style="background-color: rgb(0, 142, 142);" >处理中心</el-menu-item>
  <el-submenu index="2" >
    <template slot="title">我的工作台</template>
    <el-menu-item index="2-1" >选项1</el-menu-item>
    <el-menu-item index="2-2">选项2</el-menu-item>
    <el-menu-item index="/button">/button</el-menu-item>
    <el-submenu index="2-4" show-timeout=3000>
      <template slot="title">选项4</template>
      <el-menu-item index="2-4-1" route='/button'>选项1</el-menu-item>
      <el-menu-item index="2-4-2">选项2</el-menu-item>
      <el-menu-item index="2-4-3">选项3</el-menu-item>
    </el-submenu>
  </el-submenu>
  <el-menu-item index="3" disabled>消息中心</el-menu-item>
  <el-menu-item index="4"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item>
</el-menu></el-header>
  <el-container>
      <!-- <h5>默认颜色</h5> -->
    <el-aside width="200px">
    <el-menu 
      default-active="2"
      class="el-menu-vertical-demo"
      @open="open"
      @close="handleClose">
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span><el-link type="success">成功链接</el-link></span>
        </template>
        <el-menu-item-group>
          <template slot="title">分组一</template>
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="分组2">
          <el-menu-item index="1-3">选项3</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="1-4">
          <template slot="title">选项4</template>
          <el-menu-item index="1-4-1">选项1</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <span slot="title">导航二</span>
      </el-menu-item>
      <el-menu-item index="3" disabled>
        <i class="el-icon-document"></i>
        <span slot="title">导航三</span>
      </el-menu-item>
      <el-menu-item index="4">
        <i class="el-icon-setting"></i>
        <span slot="title">导航四</span>
      </el-menu-item>
    </el-menu></el-aside>
    <el-main><el-card class="box-card">
  <div slot="header" class="clearfix">
    <span>卡片名称</span>
    <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
  </div>
   <div v-for="o in 4" :key="o" class="text item">
    {{'列表内容 ' + o }}
  </div>
  
</el-card></el-main>
  </el-container>
</el-container>
</template>
<script>
  export default {
    data() {
      return {
        activeIndex: '1',
        activeIndex2: '4'
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key);
        console.log(keyPath);
        
        
      },open(key,keypath){
          
          console.log(key);
          

      }
    }
  }
</script>
<style>
.text {
    font-size: 14px;
  }

  .item {
    margin-bottom: 18px;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }

  .box-card {
    width: 480px;
  }
#bg{
    background-color: red;
}
  .el-header, .el-footer {
      font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
      padding:0 0;
    background-color: #B3C0D1;
    color: #67C23A;
    text-align: center;
    line-height: 60px;
  }
  
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }
  
  .el-main {
   
  }
  
  body > .el-container {
    margin-bottom: 40px;
  }
  
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
 
</style>