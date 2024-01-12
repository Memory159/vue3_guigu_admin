// 对外暴露配置路由
export const constantRoute = [
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
        // 任意路由时显示的页面（相当于上面的路由都匹配不上就会跳转）
        path:'/:pathMatch(.*)*',
        redirect:'/404',
        name:'Any'
    }
]