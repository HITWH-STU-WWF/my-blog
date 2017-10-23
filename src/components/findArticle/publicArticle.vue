<template>
	<div class="main">
		<!-- <wait></wait> -->
		<div class="left">
    <el-menu class="el-menu-vertical-demo" router>
    <el-submenu index="1">
    <template slot="title">文章分类</template>
    <el-menu-item-group>
        <el-menu-item index="/article/language">编程语言</el-menu-item>
        <el-menu-item index="/article/system">操作系统</el-menu-item>
        <el-menu-item index="/article/frame">开发框架</el-menu-item>
        <el-menu-item index="/article/others">其他</el-menu-item>
    </el-menu-item-group>
    </el-submenu>
    <el-submenu index="2">
    <template slot="title">热门文章</template>
    <el-menu-item-group>
        <el-menu-item index="/showarticle/language">如何搭建博客</el-menu-item>
    </el-menu-item-group>
    </el-submenu>
    <el-submenu index="3">
    <template slot="title">帮助中心</template>
    <el-menu-item-group>
        <el-menu-item index="/article/language">平台功能说明</el-menu-item>
        <el-menu-item index="/article/system">我该如何获取源码</el-menu-item>
    </el-menu-item-group>
    </el-submenu>
    <el-menu-item index="/index/feedback">意见反馈</el-menu-item>
  </el-menu>
   </el-col>
		</div>
		<div class="center">
		<router-view></router-view>
    <!-- <test></test> -->
		</div>
	</div>
</template>
<script>
import wait from '../waitDevelop.vue'
import test from '../test.vue'
export default{
	data(){
		return {

		}
	},
	components:{
    	wait,
    	test
  	},
	methods:{

	},
	mounted(){
    alert(this.$store.state.count)
	}
}

</script>
<style scoped>
*{
  margin: 0;
  padding: 0;
	}
.main{
  width: 100%;
  height: 91%;
  position: absolute;
  }
.left {
  width: 20%;
  height: 100%;
  float: left;
  background-color: #EEEEE6;
  }
  .el-menu{
    background: #EEEEE6;
    /*text-align: center;*/
  }
/*.kind{
    width: 100%;
    height: 40%;
    float: left;
    border-bottom:1px solid #58B7FF;
    text-align: center;
  }*/

/*  .rank{
    width: 100%;
    height: 60%;
    float: left;

  }*/


  .center{
  width: 80%;
  height: 100%;
  float: left;
  text-align: center;
  /*background-color: #E6E6FA;*/
  }	
h3{
  margin-top: 20px;
  }

h4{
  margin-left: 5px;
  margin-top: 20px;
  font-size: 15px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
  

span{
  margin-top: 5px;
  margin-right: 10px;
  font-size:15px
}
a.color1:link{color: #000000 ; text-decoration:none;} /*常规时候的样式*/
a.color1:visited{color: #000000; text-decoration:none;} /*访问过后的样式*/
a.color1:hover {color: #0066CC; text-decoration:underline;} /*鼠标指上去的样式*/
</style>