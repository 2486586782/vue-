<template>
  <div id="app">
<router-view></router-view>
<tabber></tabber>
  </div>
</template>


<script>
import axios from "axios"
import Tabber from './components/Tabber.vue'
//vue.component("Navber",Navber)                   //全局组件
//import vue from "vue"                            //导入vue
export default {
  components: { Tabber },  //局部组件
  data(){
  return{
     myname:"起灵"
  }},
  mounted() {
  /*  axios("http://www.mei.com/appapi/silo/navigationAll/v3?timestamp=1618620529443&summary=bb92d25034af155d0f3c5d42357d9c9b")
  .then(success=>{
    console.log(success.data)//直接可以访问的到的地址
  })*/


  
 /*axios('/ajax/movieOnInfoList?token=&optimus_uuid=795447509F1811EB849861BA945445A72A73B78225BE4C51B4DF3A23E26A1E13&optimus_risk_level=71&optimus_code=10')
 .then(res=>{
   console.log(res.data) //有跨域解决
 })*/


axios({
  url:"https://m.maizuo.com/gateway?cityId=110100&pageNum=1&pageSize=10&type=1&k=3129205",
  method:"get",
  headers:{
   'X-Client-Info':'{"a":"3000","ch":"1002","v":"5.0.4","e":"16182898373160717972733953","bc":"110100"}',
   'X-Host':'mall.film-ticket.film.list',
  }
}).then(
  success=>{
    console.log(success.data)
  }//方法三
)




 },
 
}
</script>
<style>

</style>
