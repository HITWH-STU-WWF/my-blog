<template>
	<div class="article-container">
		<br>
		<div class="markdown-body" v-html="content"></div>
		<div style="height: 200px;"></div>
	</div>
</template>

<script>
import test from '../show.vue'
	export default{
		data(){
			return{
				id:0,
				content:'',
			}
		},
		mounted(){
			// this.getUrl();
			
			this.content = this.$store.state.myblog;
		},
		methods:{
			getUrl:function(){
				let aUrl = document.URL;
				let str = ["0"];
				if(aUrl.indexOf("id=")!=-1){
					str = aUrl.split("id=");
				}
				this.id = str[1];
				console.log(this.id);
				this.getData();
			},
			getData:function(){
				let that = this;
				this.axios({
					url:'http://127.0.0.1:3000/users/get-content',
					method:'get',
					params:{"inquire":that.id},
				}).then(res=>{
					that.content = res.data[0].content;
				})
			}
		}
	}
</script>

<style scoped>
	.article-container{
/*		margin-top: 20px;
		width: 100%;
		text-align: center;
		margin-left: 20px;*/
		width: 1000px;
		margin: auto auto;
		/*margin: auto auto;*/
	}
</style>