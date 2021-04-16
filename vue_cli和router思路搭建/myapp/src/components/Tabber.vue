<template>
<div>
    <ul>
<router-link to="/cinema" tag="li">电影</router-link>
<router-link to="/center" tag="li">影院</router-link>
<router-link to="/film" tag="li">我的</router-link>
    </ul>
   </div>
</template>
<script>
export default {
  name: 'Tabber',
}

</script>
<style scoped>
ul{
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 44px;
  width: 100%;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(to top,rgb(182, 177, 177),rgb(85, 83, 83));
}
li{
  list-style-type: none;
  flex: 1;
}
.active{
color:red;
}
</style>
