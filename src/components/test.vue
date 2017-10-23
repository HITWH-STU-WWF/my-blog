<template>
  <div class="components-container">
    <div class="info">{{message}}<br>需要使用编辑器时，调用UE公共组件即可。可设置填充内容defaultMsg，配置信息config(宽度和高度等)，可调用组件中获取内容的方法。</div>
    <button @click="getUEContent()">获取内容</button>
    <div class="content">
      <UE :defaultMsg=defaultMsg :config=config ref="ue"></UE>
      <!-- {{defaultMsg}} -->
    </div>
  </div>
</template>

<style>
  .info{
    border-radius: 10px;
    line-height: 20px;
    padding: 10px;
    margin: 10px;
    background-color: #ffffff;
  }
</style>

<script>
  import UE from './uedir.vue';
  import uParse from '../../static/UE/ueditor.parse.js'
  export default {
    components: {UE},
    data() {
      return {
        defaultMsg:'',



        config: {
          initialFrameWidth: null,
          initialFrameHeight: 350
        },
        message:'sdasdasd'
      }
    },
    methods: {

      getUEContent() {
        let content = this.$refs.ue.getUEContent();
        this.$notify({
          title: '获取成功，可在控制台查看！',
          message: content,
          type: 'success'
        });
        this.message=content;
        console.log(content)
      }
    }
  };
</script>