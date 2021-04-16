<template>
  <div id="app">
<router-view></router-view>
<tabber></tabber>
  </div>
</template>


<script>
import Tabber from './components/Tabber.vue'
//vue.component("Navber",Navber)                   //全局组件
//import vue from "vue"                            //导入vue
export default {
  components: { Tabber },  //局部组件
  data(){
  return{
     myname:"起灵"
  }},

}
</script>
<style>

</style>
