// 引入项目中所有想注册成全局组件的组件
// 引入全局 Svg 图标组件
import SvgIcon from './SvgIcon/index.vue'
import Pagination from './Pagination/index.vue'

// 定义一个全局对象，将所有的组件都放到这个对象里面
const allGloablComponent: any = { SvgIcon, Pagination }
// 对外暴露这个插件对象
export default {
  // 这里务必叫做 install 方法
  install(app: any) {
    Object.keys(allGloablComponent).forEach((key) => {
      // 将全局对象里面的组件都注册成全局组件
      console.log(allGloablComponent)

      app.component(key, allGloablComponent[key])
    })
  },
}
