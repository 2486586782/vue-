<template>
    <div id="ChildrenIshititem">
        <ul>
            <li v-for="item in datalist" :key="item.filmId" @click="btnclick(item.filmId)">
                <div><img :src="item.poster"></div>
                <div class="lastchild2">
                   <div class="itemname"><h4>{{item.name}}</h4><span>{{item.filmType.name}}</span></div>
                    <div class="itemgrade">观众评分:<span>{{item.grade}}</span></div>
                    <div>{{item.nation}} | {{item.runtime}}分钟</div>
                   <div class="itemactors2">主演:{{item.actors | itemactrs}}</div>
                </div>
                <div><button>购票</button></div>
            </li>
        </ul>
    </div>
</template>
<script>
import http from "@/network/http.js"
import vue from "vue"
vue.filter("itemactrs",(actrs)=>{
    if(actrs===undefined){return "暂无主演"}
      return actrs.map((n)=>{ return n.name;}).join(" ");
})//过滤器
export default {
   name:"ChildrenIshit",
    data(){
   return{
datalist:[],//接受数据
  }
   },
   methods: {
       btnclick(id){
           this.$router.push(`/details/${id}`)
       }
   },
   mounted() {
  http({
  url:"/gateway?cityId=110100&pageNum=1&pageSize=10&type=1&k=3129205",
  method:"get",
  headers:{
  'X-Host':'mall.film-ticket.film.list',
  }
}).then(success=>{
    console.log(success.data.data.films);
    this.datalist=success.data.data.films
  })},
}
</script>
<style scoped>
#ChildrenIshititem{
    width: 100vw;
}
ul{
     width: 100vw;
}
ul li{
    display: flex;
    margin:20px 20px  30px 20px;
    justify-content:space-around;
    align-items: center;
}

ul li img{
    width: 80px;
}

.lastchild2{
    flex: 1;
    position: relative;
}

.itemname{
    display: flex;
    width: 220px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}

.itemname span{
    width: 40px;
    height: 20px;
    border-radius:15px;
    background-color: silver;
    text-align: center;
    line-height: 20px;
    margin-left: 5px;
}

.itemactors2{
    position: absolute;
    width: 100%;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}

.itemgrade span{
color: rgb(233, 162, 8);
}
</style>


