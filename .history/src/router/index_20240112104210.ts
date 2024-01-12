// 通过 vue-router 插件实现模板路由的配置
import {createRouter,createWebHashHistory} from 'vue-router'

// 创建路由器
const router = createRouter({
    // 配置路由模式:分为两种（createWebHashHistory / createWebHistory）
    history:createWebHashHistory(),
    routes:[
        {
            // 登录
            path:'/login',
            component:()=>import('@/views/login/index.vue'),
            name:'login'
        },
        {
            // 登录成功后展示数据的路由
            path:'/home',
            component:()=>import('@/views/home/index.vue'),
            name:'layout'
        },
        {
            // 访问不成功展示的 404 页面
            path:'/404',
            component:()=>import('@/views/404/index.vue'),
            name:'404'
        },
        {
            // 
            path:'/:pathMatch(.*)*',
            redirect:'/404',
            name:'Any'
        }
    ]
})

export default router