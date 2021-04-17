<template>
    <div>
    <div id="swiper">我是轮播图</div>
    <div id="routeritem">
        <router-link to="/moviepage/childrenishit" tag="div">正在热播</router-link>
         <router-link to="/moviepage/childrenupcoming" tag="div">即将上映</router-link>
    </div>
<router-view></router-view>
    </div>
</template>
<script>
export default {
   name:"MoviePage",
}
</script>
<style scoped>
#swiper{
    width: 100%;
    height: 200px;
    background-color: tomato;
}
#routeritem{
    height: 60px;
    width: 100%;
    display: flex;
    justify-content:space-around;
    line-height: 60px;
}
.action{
    color:red;
    border-bottom:solid 3px red;
}
</style>