<template>
  <div id="app">
<router-view></router-view>
<zzq-tabber></zzq-tabber>
  </div>
</template>


<script>
import ZzqTabber from './components/tabbar/ZzqTabber'
export default {
  components: { ZzqTabber },
  


}
</script>
<style>
@import "./assets/css/base.css";/*引入配置默认的样式 */
</style>
