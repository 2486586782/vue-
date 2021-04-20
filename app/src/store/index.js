import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)


export default new Vuex.Store({
  state: {
    cityId:"310100",
    cituName:"上海",
    zzqtabbershow:true,            //动态显示底部导航栏的显示和隐藏
  },     
  //共享的数据
  mutations: {
    cituNamemodification(state,name){         //定义方法修改状态
      state.cituName=name
    },
    cityIdmodification(state,id){
      state.cityId=id
    },



    bottomdisplay(state){
      state.zzqtabbershow=true
    },//显示底部导航栏的方法
    bottomhidden(state){
      state.zzqtabbershow=false
    },//隐藏底部导航栏的方法


    
  },
  actions: {
  },
  modules: {
  }
})
