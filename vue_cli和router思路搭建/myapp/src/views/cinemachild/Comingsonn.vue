<template>
    <div>
        <ul>
            <li v-for="item in datalist" :key="item.id" @click="btnclick(item.id)">{{item.title}}</li>
        </ul>
    </div>
</template>
<script>
export default {
    name:"Comingsonn",
    data() {
        return {
            datalist:[
                {id:111,title:'喜洋洋'},
                 {id:222,title:'懒洋洋'},
                  {id:333,title:'灰太狼'}
            ]
        }
    },
    methods: {
        btnclick(id){
            this.$router.push(`/dataall01/${id}`);  //编程式路由跳转
        }
    },
}
</script>
<style scoped>

</style>