// 通过 vue-router 插件实现模板路由的配置
import {createRouter,createWebHashHistory} from 'vue-router'

// 创建路由器
const router = createRouter({
    // 配置路由模式
    history:createWebHashHistory(),
    routes:[]
})

export default router