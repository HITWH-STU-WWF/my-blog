<template>
  <div class="main2">
  <h1 class="top">文章列表</h1>
  <div class="show">
  <section class="diyback" style="border-bottom:1px solid   #ADADAD">
    <router-link class="color1" to="/showarticle/language"><h1 class="blogtitle">如何搭建博客</h1></router-link>
    <div class="blogs-mes"><p><span>作者:{{auto}}  时间:{{reporttime}}</span></p></div>
    <p class="hid">{{meg}}</p>
    <router-link to="/showarticle/language"><button class="blogs-button">阅读全文 >></button></router-link>
  </section>

 <section class="diyback" style="border-bottom:1px solid   #ADADAD">
    <router-link class="color1" to="/showarticle/language"><h1 class="blogtitle">如何搭建博客</h1></router-link>
    <div class="blogs-mes"><p><span>作者:{{auto}}  时间:{{reporttime}}</span></p></div>
    <p class="hid">{{meg}}</p>
    <router-link to="/showarticle/language"><button class="blogs-button">阅读全文 >></button></router-link>
  </section>

   <section class="diyback" style="border-bottom:1px solid   #ADADAD">
    <router-link class="color1" to="/showarticle/language"><h1 class="blogtitle">如何搭建博客</h1></router-link>
    <div class="blogs-mes"><p><span>作者:{{auto}}  时间:{{reporttime}}</span></p></div>
    <p class="hid">{{meg}}</p>
    <router-link to="/showarticle/language"><button class="blogs-button">阅读全文 >></button></router-link>
  </section>

   <section class="diyback" style="border-bottom:1px solid   #ADADAD">
    <router-link class="color1" to="/showarticle/language"><h1 class="blogtitle">如何搭建博客</h1></router-link>
    <div class="blogs-mes"><p><span>作者:{{auto}}  时间:{{reporttime}}</span></p></div>
    <p class="hid">{{meg}}</p>
    <router-link to="/showarticle/language"><button class="blogs-button">阅读全文 >></button></router-link>
  </section>


  <!-- <section class="diyback" style="border-bottom:1px solid #58B7FF">
    <h1><router-link class="color1" to="/myself/collection">如何自己的博客</router-link><span>作者：{{auto}}</span>    <span>时间：{{reporttime}}</span></h1>
    <p class="hid">{{meg}}</p>
    <router-link :to="{path:'/article'}"><button class="blogs-button">阅读全文 >></button></router-link>
    </section>
   <section class="diyback" style="border-bottom:1px solid #58B7FF">
    <h1><router-link class="color1" to="/myself/col">如何自己s的博客</router-link><span>作者：{{auto}}</span>    <span>时间：{{reporttime}}</span></h1>
    <p class="hid">{{meg}}</p>
    </section>
     <section class="diyback" style="border-bottom:1px solid #58B7FF">
    <h1>如何搭建自己的博客<span>作者：{{auto}}</span>    <span>时间：{{reporttime}}</span></h1>
    <p class="hid">{{meg}}</p>
    </section>
     <section class="diyback" style="border-bottom:1px solid #58B7FF">
    <h1>如何搭建自己的博客<span>作者：{{auto}}</span>    <span>时间：{{reporttime}}</span></h1>
    <p class="hid">{{meg}}</p>
    </section> -->
  </div>
     <el-pagination
            @current-change="pagechange"
            :page-size="4"
            layout="prev, pager, next, jumper"
            :total="100">
    </el-pagination>
  </div>
</template>
<script>

export default{
  data(){
    return {
      meg:"The Panda has become the symbol of WWF. The well-known panda logo of WWF originated from a panda named Chi Chi that was transferred from the Beijing Zoo to the London Zoo in the same year of the establishment of WWF.The Panda has become the symbol of WWF. The well-known panda logo of WWF originated from a panda named Chi Chi that was transferred from the Beijing Zoo to the London Zoo in the same year of the establishment of WWF.",
      auto:'吴炜锋',
      reporttime:'2017-10-17'
    }
  },
  components:{

    },
  methods:{

  },
  mounted(){

  }
}

</script>
<style scoped>

.diyback{
  height: 23%;
  text-align: left;
}

.diyback:hover{
background-color:   #E8FFC4 ;
}

.top{
  letter-spacing : 10pt; /*字间距离*/
  font-size: 1.5em;
}

.blogtitle{
  margin-left: 20px;
  font-size: 20px;
  color: #000000;
  font-weight: 500;
  /*margin: 0;*/
  margin-top: 5px;
  cursor: pointer;

}

/*span{
  float: right;
  margin-right: 20px;
  font-size:16px
}*/

a.color1:link{color: #000000 ; text-decoration:none;}   
/*a.color1:visited{color: #996600; text-decoration:none;}   
a.color1:hover {color: #99FF66; text-decoration:underline;}  */

.main2{
  width: 80%;
  height: 91%;
  position: absolute;
}


.hid{
margin-left: 20px;
margin-top: 4px;
display: -webkit-box;
-webkit-box-orient: vertical;
-webkit-line-clamp: 1;
overflow: hidden;
font-size: 17px;
color: #555;
}

/*.block{
  margin-top: 20px;
  width: 80%;
 
}*/

.show{
  width: 100%;
  height: 85%;
}
.el-pagination{
  margin-top: 50px;
  font-size: 1.2em;
}


  .blogs-mes{
    font-size: 14px;
    color: #7B7B7B;
    margin-left: 20px;
  }
 

  .blogs-button{
    margin-top: 5px;
    border: none;
    margin-left: 20px;
    background-color: black;
    color:white;
    width: 110px;
    height: 25px;
    margin-bottom: 10px;
    border: 2px solid black;
    cursor: pointer;
    transition: all 0.3s;
  }
  .blogs-button:hover{
    color:black;
    background-color: white;
  }

</style>