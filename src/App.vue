<template>
  <div id="app">
    <div class="app_header">
      <data-header></data-header>
    </div>
    <div class="app_content">

        <router-view></router-view>

    </div>

  </div>
</template>

<!--  <div class="breadcrumb">
          <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>{{pathName}}</el-breadcrumb-item>
          </el-breadcrumb>
        </div> -->

<script>
import DataHeader from './components/header/header_top.vue'
// import SideNav from './components/common/SideNav.vue'
import hello from './components/HelloWorld.vue'

export default {
  name: 'app',
  data () {
    return {
      pathName: this.$route.name,
    }
  },
  components:{
    DataHeader,
    hello
  },
  watch: {
    '$route': function(){
      this.pathName = this.$route.name;

    }
  }
}
</script>

<style>

  #app{
  height: 100%;
  margin: 0;
  display: flex;

  flex-direction: column;
  }

  .app_header{
    position: relative;
    flex: 0 0 auto;
  
  }

  .app_content{
    flex: 1;
    display: flex;
    flex-flow: row;
  }
  .breadcrumb{
    padding-bottom: 20px;
    border-bottom: 1px solid #ddd;
  }
</style>
