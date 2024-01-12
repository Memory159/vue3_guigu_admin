// 通过 vue-router 插件实现模板路由的配置
import {createRouter,createWebHashHistory} from 'vue-router'
// 
import {constantRoute} from './routes'

// 创建路由器
const router = createRouter({
    // 配置路由模式:分为两种（createWebHashHistory / createWebHistory）
    history:createWebHashHistory(),
    routes:constantRoute
})

export default router