<template>
    <div>
        <ul>
            <li v-for="item in datalist" :key="item.filmId">
                <div><img :src="item.poster"></div>
                <div>
                   <div class="itemname"><h4>{{item.name}}</h4><span>{{item.filmType.name}}</span></div>
                   <div>主演：</div>
                </div>
                <div></div>
            </li>
        </ul>
    </div>
</template>
<script>
import axios from "axios"
export default {
   name:"ChildrenIshit",
    data(){
   return{
datalist:[],//接受数据
  }
   },
   mounted() {
  axios({
  url:"https://m.maizuo.com/gateway?cityId=110100&pageNum=1&pageSize=10&type=1&k=3129205",
  method:"get",
  headers:{
  'X-Client-Info':'{"a":"3000","ch":"1002","v":"5.0.4","e":"16182898373160717972733953","bc":"110100"}',
  'X-Host':'mall.film-ticket.film.list',
  }
}).then(success=>{
    console.log(success.data.data.films);
    this.datalist=success.data.data.films
  })},
}
</script>
<style scoped>
ul li{
    display: flex;
    margin:40px 20px 40px 20px ;
}
ul li img{
    width: 80px;
}
.itemname{
    display: flex;
}
.itemname span{
    width: 40px;
    height: 20px;
    border-radius:15px;
    background-color: silver;
    text-align: center;
    line-height: 20px;
}
</style>