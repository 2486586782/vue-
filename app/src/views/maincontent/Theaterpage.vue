<template>
<div>
    <van-nav-bar title="影院" left-arrow @click-left="clickleft" @click-right="clickright"> 
    <template #left>
    {{$store.state.cituName}}
    <van-icon name="arrow-down" size="18" color="black" />
    </template> 
    <template #right>
    <van-icon name="search" size="25" color="black"/>
    </template>
     </van-nav-bar>
    <div class="scrollinghelper">
      <ul>
          <li v-for="item in TheaterPagelist" :key="item.cinemaId">
              <div class="itemname"><div>{{item.name}}</div><span>{{item.lowPrice | itemlowPrice}}</span></div>
              <div class="itemaddress"><div>{{item.address}}</div></div>
          </li>
      </ul>
    </div>
</div>
</template>
<script>
import { NavBar,icon} from 'vant';
Vue.use(NavBar).use(icon);
import BetterScroll from "better-scroll"
import Vue from "vue"   //引入vue
import http from "@/network/http.js"  //引入http
Vue.filter("itemlowPrice",(data)=>{   //过滤器
    return '￥'+data/100+"起"
})
export default {
   name:"TheaterPage",
   data(){
       return{
         TheaterPagelist:[]     //接受数据
       }
   },
   methods: {
       clickleft(){
           this.$router.push("/city")
       }, 
       clickright (){
        this.$router.push("/search")
       }                               //navber绑定事件
   },
   mounted() {
       //隐藏底部导航栏
       this.$store.commit("bottomhidden")


       http({
           url:`/gateway?cityId=${this.$store.state.cityId}&ticketFlag=1&k=52112`,
           headers:{
             'X-Host':'mall.film-ticket.cinema.list',
              "X-Client-Info":'{"a":"3000","ch":"1002","v":"5.0.4","e":"16182898373160717972733953","bc":"110100"}'
           }
       }).then(
       res=>{
           console.log(res.data.data.cinemas);
           this.TheaterPagelist=res.data.data.cinemas;
           this.$nextTick(()=>{        //等结束后触发
           new BetterScroll(".scrollinghelper",{
               scrollbar:{
                   fade:true         //滚动条设置
               }
           })       //使用BetterScroll
            })
       });

   },
   beforeDestroy() {
        //显示底部导航栏
         this.$store.commit("bottomdisplay")
   },
}
</script>
<style scoped>
ul{
    width: 100%;
}
li{
margin: 20px;
border-top: solid 0.1px #e8ebee;
}
.itemname{
    display: flex;
     color: #191a1b;
    font-size: 15px;
    justify-content: space-between;   /*lil里面第一行div样式*/
    align-items: center;
}
.itemaddress{
    color: #797d82;
    font-size: 12px;              /*lil里面第二行div样式*/
    margin-top: 5px;
}

.scrollinghelper{
    height:100vh;
    overflow: hidden;     /*使用BetterScroll,给需要的页面使用赋值相应的高度 */
    position: relative;
}
</style>