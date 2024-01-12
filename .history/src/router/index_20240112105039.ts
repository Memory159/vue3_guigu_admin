// 通过 vue-router 插件实现模板路由的配置
import {createRouter,createWebHashHistory} from 'vue-router'
// 引入配置的路由
import {constantRoute} from './routes'

// 创建路由器
const router = createRouter({
    // 配置路由模式:分为两种（createWebHashHistory / createWebHistory）
    history:createWebHashHistory(),
    // 
    routes:constantRoute,
    // 设置滚动行为
    scrollBehavior(){
        return {
            left:0,
            top:0
        }
    }
})

export default router