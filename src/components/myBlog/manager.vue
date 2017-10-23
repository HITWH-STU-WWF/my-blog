<template>
	<div class="main2">
		<br>
		<h1>文章管理</h1>
		<div class="line"></div>
		<el-table
	      :data="articleData"
	        border
    		style="width: 100%"
	      >
	      <el-table-column
	        prop="title"
	        label="文章名称"
	        min-width="200">
	      </el-table-column>
	      <el-table-column
	        prop="time"
	        label="创建日期"
	        width="150">
	      </el-table-column>
	      <el-table-column
	        prop="cateName"
	        label="文章分类"
	        min-width="200">
	      </el-table-column>
	      <el-table-column
	        prop="privateorPublic"
	        label="阅读权限"
	        width="150">
	      </el-table-column>
	       <el-table-column
	        prop="state"
	        label="是否编辑完成"
	        width="150">
	      </el-table-column>
		  <el-table-column 
		  	label="操作"
		  	width="150">
	        <template scope="scope">
	          <el-button
	            size="small"
	            type="info"
	            @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
	          <el-button
	            size="small"
	            type="danger"
	            @click="handleDelete(scope.$index, scope.row)">删除</el-button>
	        </template>
	      </el-table-column>
	    </el-table>

	   <br>
     <el-pagination
            @current-change="pagechange"
            :page-size="13"
            layout="prev, pager, next, jumper"
            :total="100">
    </el-pagination>
	</div>
</template>
	
<script>
	export default{
		data(){
			return{
				articles:[],
				articleData:[
				{
					'title':'first',
					'time':'2017-10-22',
					'privateorPublic':'所有人',
					'state':'已完成',
					'cateName':'编程语言'
				},
				
				{
					'title':'first',
					'time':'2017-10-22',
					'state':'已完成',
					'cateName':'编程语言'
				},
				{
					'title':'first',
					'time':'2017-10-22',
					'state':'已完成',
					'cateName':'编程语言'
				},
				{
					'title':'first',
					'time':'2017-10-22',
					'state':'已完成',
					'cateName':'编程语言'
				},
				{
					'title':'first',
					'time':'2017-10-22',
					'state':'已完成',
					'cateName':'编程语言'
				},
				{
					'title':'first',
					'time':'2017-10-22',
					'state':'已完成',
					'cateName':'编程语言'
				},
				{
					'title':'first',
					'time':'2017-10-22',
					'state':'已完成',
					'cateName':'编程语言'
				},
				{
					'title':'first',
					'time':'2017-10-22',
					'state':'已完成',
					'cateName':'编程语言'
				},
				{
					'title':'first',
					'time':'2017-10-22',
					'state':'已完成',
					'cateName':'编程语言'
				},
				{
					'title':'first',
					'time':'2017-10-22',
					'state':'已完成',
					'cateName':'编程语言'
				},
				{
					'title':'first',
					'time':'2017-10-22',
					'state':'已完成',
					'cateName':'编程语言'
				},
				],
				cateData:[],
			}
		},
		mounted(){
			this.getArticle();
		},
		methods:{
			getArticle:function(){
				let that = this;
				this.axios({
					url:'http://127.0.0.1:3000/users/get-article',
					dataType:'json',
					method: 'get',
				}).then((res)=> {
					that.articles = res.data;
					that.getCateMes()
				})
			},
			getCateMes:function(){
				let that = this;
				this.axios({
					url: 'http://127.0.0.1:3000/users/get-categoryMes',
	                method: 'get',
				}).then((res)=>{
					that.cateData = res.data;
					this.cateChange();
				})
			},
			cateChange:function(){
				for(let i in this.articles){
					for (let j in this.cateData){
						if(this.articles[i].cateID == this.cateData[j].cateID){
							this.articles[i].cateName = this.cateData[j].cateName;
						}
					}
				}
				this.articleData = this.articles;
			},
			handleEdit:function(index){
				let inquire = this.articleData[index].inquire;
				this.$router.push({path:'/edit',query:{inquire:inquire}})
			},
			handleDelete:function(index){
				let inquire = this.articleData[index].inquire;
				let cateID = this.articleData[index].cateID;
				this.$confirm('此操作将删除该文章, 是否继续?', '提示', {
		          confirmButtonText: '确定',
		          cancelButtonText: '取消',
		          type: 'warning'
		        }).then(() => {
		        	this.axios({
						url: 'http://127.0.0.1:3000/article/delete-article',
		                method: 'post',
		                data: {"inquire":inquire,"cateID":cateID},
					}).then((res)=>{
						this.getArticle();
						this.$message({
				            type: 'success',
				            message: '删除成功!'
				          });
					})
		        }).catch(() => {
		          this.$message({
		            type: 'info',
		            message: '已取消删除'
		          });          
		        });
			},
		}
	}
</script>

<style scoped>
.main2{
  width: 80%;
  height: 100%;
  position: absolute;
}
h1 {
	font-size: 20px;
	margin: 0;
	padding: 0;
}
.line{
	height: 8px;
	border-bottom: 1px solid #e6e6e6;
	margin-bottom: 10px;
	}
	
</style>