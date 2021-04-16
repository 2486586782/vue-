<template>
    <div>
        <div id="swiper">我是轮播图</div>
        <div id="router">
      <router-link to="/cinema/comingsonn">正在上演</router-link>
       <router-link to="/cinema/nowplaying">即将上演</router-link>
        </div>
      <router-view></router-view>
    </div>
</template>
<script>
export default {
    name:"Cinema"
}
</script>
<style scoped>
#swiper{
    width: 100%;
    height: 200px;
    background-color: red;
}
#router{
    display: flex;
    justify-content: space-evenly;
    align-items: center;
}
.active{
    color:red;
}
</style>