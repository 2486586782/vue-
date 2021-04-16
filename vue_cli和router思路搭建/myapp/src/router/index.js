import vue from "vue"
import vuerouter from "vue-router"
vue.use(vuerouter)
const Cinema=()=>import("../views/Cinema");
const Center=()=>import("../views/Center");
const Film=()=>import("../views/Film");
const Comingsonn=()=>import("../views/cinemachild/Comingsonn")
const Nowplaying=()=>import("../views/cinemachild/Nowplaying")
const Dataall01=()=>import("../views/dataall/Dataall01")
const login=()=>import("../views/login")

const router=new vuerouter({
    linkActiveClass:"active",
    mode:"history",
routes:[
    {
path:"",
redirect:"/cinema"        //重定向功能
    },
    {
        path:"/cinema",
        component:Cinema,
        children:[
            {
                path:"",
                redirect:"comingsonn"  
            },
            {
                path:"comingsonn",
                component:Comingsonn
            },
            {
                path:"nowplaying",
                component:Nowplaying
            }
        ]
    },
    {
        path:"/center",
        component:Center
    },
    {
        path:"/film",
        component:Film,
    },
    {
        path:"/dataall01/:id",
        component:Dataall01
    },
    {
        path:"/login",
        component:login
    }
]
})
router.beforeEach((to, from, next) => {   //全局导航守卫，全局前置守卫
    const auth=["/film","./money","/card","/order"];
    if(auth.includes(to.fullPath)){
    if(!localStorage.getItem("token")){
        next("./login")}
    }else{
        next();
    }
  })
export default router;