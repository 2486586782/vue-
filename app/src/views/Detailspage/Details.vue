<template>
    <div v-if="detailslistdata">
      <div id="headnavigation" v-if="headisshow">1111</div>     <!--4.18思路处-->
      <div class="dataimg"><img :src="detailslistdata.poster"></div>
      <!--标题图-->
      <div class="dataitem">
      <div class="detailslistdatanameitem">
          <div class="detailslistdatanameitem1">{{detailslistdata.name}} 
          <span class="spanitem1">{{detailslistdata.filmType.name}}</span></div>
          <span class="spanitem2">{{detailslistdata.grade}}分</span>
      </div>
      <div class="detailslistdatacategoryitem">{{detailslistdata.category}}</div>
       <div class="detailslistdatacategoryitem">{{detailslistdata.premiereAt | premiereAtdatatime}}上映</div>
       <div class="detailslistdatacategoryitem">{{detailslistdata.nation}} | {{detailslistdata.runtime}}分钟</div>
     <div :class="isshow?'detailslistdatasynopsisitem':'detailslistdatacategoryitem'">{{detailslistdata.synopsis}}</div>
     <div class="center" @click="btnisshow">
          <svg class="icon" aria-hidden="true">
          <use :xlink:href="isshow?'#icon-iconfontjiantou':'#icon-jiantoushang'"></use>
          </svg>
    </div>
    </div>
       <!--详情内容-->
          <div id="details01swiperitem">
              <span>演职人员</span>
              <details-01-swiper :pres="5" swiperclassclass="actor">
                    <div class="swiper-slide" v-for="(item,data) in detailslistdata.actors" :key="data" >
                        <img :src="item.avatarAddress"/>
                        <h3>{{item.name}}</h3>
                        <h3>{{item.role}}</h3>
                        </div>     
              </details-01-swiper>
          </div>
<!--演员图轮播-->
           <div id="details01swiperitem2">
              <div><span>剧照</span><span>全部</span></div>
              <details-01-swiper :pres="3" swiperclass="stagephoto">
                    <div class="swiper-slide" v-for="(item,data) in detailslistdata.photos" :key="data" >
                        <img :src="item"/>
                        </div>     
              </details-01-swiper>
          </div>
      </div>
 <!--剧照图轮播-->
</template>
<script>
import Vue from "vue"         //导入vue
import moment from "moment"  //导入日期转换库
import http from "@/network/http.js"
import Details01Swiper from './Details01Swiper.vue'

Vue.filter("premiereAtdatatime",(data)=>{    //使用过滤器
    return  moment(data).format('YYYY-MM-DD')  //使用日期转换库
})
export default {
  components: { Details01Swiper },
    name:"Details",
    data(){
        return{
            detailslistdata: null ,   //接受数据
            isshow:true,
            headisshow:false,
        }
    },
    methods: {
        btnisshow(){
            this.isshow=!this.isshow;
        }
    },
    mounted() {
         http({
        url:`/gateway?filmId=${this.$route.params.id}&k=3554534`,  //this.$route.params.id获取当前处于正在使用的路由
           methods:"get",
        }).then(
            res=>{console.log(res.data.data.film);
            this.detailslistdata=res.data.data.film;
            })//数据请求

           window.onscroll=()=>{
               if(document.documentElement.scrollTop>50){
               this.headisshow=true;
               console.log("显示")

               }else{
                   this.headisshow=false;
                   console.log("隐藏")
               }
           } 

         },

      
}
</script>
<style scoped>
.dataimg{
    width: 100%;
    height: 240px;
    overflow: hidden;   /*头部包裹图片的div*/
}
.dataimg img{
    width: 100%;/*图片的样式*/
}

.dataitem{
    margin: 10px 5px 20px 5px;  /*包裹介绍的所以div*/
    border-bottom: solid 10px rgb(179, 175, 175);
}
.detailslistdatanameitem{
display: flex;
height: 24px;
justify-content:space-between;
align-items: center;
margin: 10px 0 10px 0;
}   /**包裹介绍的里面的第一个div*/

.detailslistdatanameitem1{
    color: #191a1b;
    font-size: 18px;
    height: 24px;
    line-height: 24px;
    margin-right: 7px;
}
.spanitem1{
    font-size: 9px;
    color: #fff;
    background-color: #d2d6dc;
    padding: 0 2px;
    border-radius: 2px;
    display: inline-block;
}
.spanitem2{
    text-align: right;
    color: #ffb232;
}/**包裹介绍的里面的第一个div里面样式*/


.detailslistdatacategoryitem{
   font-size: 15px;
    color: #797d82;
    margin-bottom: 10px;   /*包裹介绍的里面的统一样式*/
}
.detailslistdatasynopsisitem{
    font-size: 15px;
    color: #797d82;
    margin-bottom: 10px;       /*电影内容介绍特别样式*/
    height: 50px;
    overflow: hidden;
}
.center{width: 100%;
text-align: center;}   /*箭头样式*/
.swiper-slide{
    font-size: 10px;
    color: #797d82;
    margin: 10px;
}
.swiper-slide img{
    height: 100px;

}
#details01swiperitem{
    border-bottom: solid 10px rgb(150, 146, 146);
}

#details01swiperitem2{
    margin:15px;
}

#details01swiperitem2 img{
    height: 100px;
    height: 80px;
}

#headnavigation{
    height: 50px;
    width: 100%;
    background-color: rgb(85, 37, 37);
}
</style>