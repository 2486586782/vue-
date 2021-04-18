import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
const MoviePage=()=>import("../views/maincontent/MoviePage")
const TheaterPage=()=>import("../views/maincontent/Theaterpage.vue")
const Message=()=>import("../views/maincontent/Message")
const Mine=()=>import("../views/maincontent/Mine")
const ChildrenIshit=()=>import("../views/MoviePagechildren/ChildrenIshit")
const ChildrenUpcoming=()=>import("../views/MoviePagechildren/ChildrenUpcoming")
const Details=()=>import("../views/Detailspage/Details")
const routes = [
  {
    path:"",
    redirect:"/moviepage",
  },
{
  path:"/moviepage",
  component:MoviePage,
  children:[
    {
      path:"",
      redirect:"childrenishit",
    },
    {
      path:"childrenishit",
      component:ChildrenIshit
    },
    {
      path:"childrenupcoming",
      component:ChildrenUpcoming
    },
  ]
},
{
  path:"/theaterpage",
  component:TheaterPage
},
{
  path:"/message",
  component:Message
},
{
  path:"/mine",
  component:Mine
},
{
  path:"/details/:id",
  component:Details
},
]
const router = new VueRouter({
  routes,
  mode:"history",
  linkActiveClass:"action"
  
})
export default router
