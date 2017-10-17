<template>
<div class="app_content">
  <div class="nav">
    <el-menu default-active="/testManagement" class="el-menu-vertical-demo" router>
    <el-submenu index="1">
      <template slot="title"><i class="el-icon-message"></i>系统管理</template>
      <el-menu-item-group>
        <template slot="title">分组一</template>
        <el-menu-item index="/index/testManagement">测试管理</el-menu-item>
        <el-menu-item index="/index/userGroup">用户分群管理</el-menu-item>
      </el-menu-item-group>
      <el-menu-item-group title="分组2">
        <el-menu-item index="/index/userList">用户管理</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
    <el-menu-item index="/index/help"><i class="el-icon-menu"></i>帮助中心</el-menu-item>
    <el-menu-item index="/index/feedback"><i class="el-icon-setting"></i>意见反馈</el-menu-item>
  </el-menu>
  </el-col>
  </div>
  <div class="app_right">
    <nothing></nothing>
  </div>
</div>
</template>
<script>
import nothing from '../HelloWorld.vue'
  export default{
    data () {
    return {
      pathName: this.$route.name,
    }
  },
  components:{
    nothing
  },
  }
</script>
<style >
.app_nav{
  position: absolute;
  flex: 0 0 280px;
  background: #EFFFFF;
}
.app_right{
  flex: 1;
/*  overflow: auto;*/
  padding: 20px;
  background: #EFFFFF;
  }

.app_content{
    flex: 1;
    display: flex;
    flex-flow: row;
  }
</style>