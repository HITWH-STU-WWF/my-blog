<template>
<div class="header-wraper">
    <el-menu theme="dark" default-active="1" class="el-menu-demo" mode="horizontal" @select="handleSelect">

        <li class="title">
            <i class="el-icon-menu"></i>
             <i className="el-icon-edit"></i>
            <span>WWF的个人博客</span>
        </li>
        <div class="test">
        
        <el-menu-item index="1">关于此博客</el-menu-item>
    
         
        <el-menu-item index="2">关于此博客</el-menu-item>
    
        </div>
        <li class="user">
            <el-dropdown trigger="click" @command="handleCommand">
                <span class="el-dropdown-link">
                {{my}}<i class="el-icon-caret-bottom el-icon--right"></i>
              </span>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item v-for="item in state" :command="item">{{item}}</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </li>
    </el-menu>
</div>
</template>


<script>
export default {
    data() {
        return {
        my:"WWF",
        state:[
        "退出",
        "切换",  
        "注册" 
        ],

        }
    },
    methods: {
        handleSelect(key, keyPath) {
            console.log(key, keyPath);
        },
        handleCommand(command){

            console.log(command)
        }
    }
}
</script>


<style >
.header-wraper li {
    float: left;
    margin-right: 20px;
    margin-top: 5px;
}

.title {
    padding: 1em .2em;
}

.title span {
    font-size: 1.4em;
    margin-left: 5px;
}
.el-select-dropdown__list{
  max-height: 187px !important;
}
.option {
    padding-top: 10px;
}

.user .el-dropdown {
    position: absolute;
    right: 20px;
    padding-top: 25px;
    color: #fff !important;
}
.test .el-menu-item{
    left: 500px;
    padding-top: 5px;
    font-size: 1.0em;
}
</style>