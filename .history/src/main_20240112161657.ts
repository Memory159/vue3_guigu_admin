import { createApp } from 'vue'
import App from '@/App.vue'
// svg 插件需要配置的代码
import 'virtual:svg-icons-register'
// 引入自定义插件对象 : 注册整个项目全局组件
import globalComponent from '@/components/index'
// 引入模板的全局样式
import '@/styles/index.scss'
// 引入路由
import router from './router'
// 引入 element-plus 插件与样式
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// 配置 element-plus 国际化
// @ts-ignore
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
// 获取应用的实例对象
const app = createApp(App)
// 安装 element-plus 插件
app.use(ElementPlus, {
  locale: zhCn, // element-plus 国际化配置
})
// 注入模板路由
app.use(router)
// 安装自定义插件
app.use(globalComponent)
// 将应用挂载到挂载点上
app.mount('#app')

import request from '@/utils/request'

request.post('/user/login',{username:'admin',password:'111111'})
