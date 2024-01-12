// 进行 axios 的二次封装
// 封装的目的：使用请求和响应拦截器
import axios from 'axios'
// element 组件里面的消息提示的组件
import {ElMessage} from 'element-plus'
// 第一步：利用 axios 对象的 create 方法，去创建 axios 实例
// 这样的好处：可以配置一些其他的配置，比如基础路径，超时的时间
// 此处的 request 和 axios 是相同的，只不过用 axios.create 之后，可以添加一些其他的配置
let request = axios.create({
  // 基础路径
  baseURL: import.meta.env.VITE_APP_BASE_API, // 基础路径上会携带 /api
  timeout: 5000, // 设置请求超时的时间
})

// 第二步：给 request 实例添加请求拦截器
request.interceptors.request.use((config) => {
  // config 配置对象，有一个请求头属性 headers ，经常用于给服务器端携带公共参数

  // 返回配置对象
  return config
})

// 第三步：给 request 实例添加响应拦截器
request.interceptors.response.use(
  (response) => {
    // 成功的回调
    // 可以简化数据
    return response.data        
  },
  (error) => {
    // 失败的回调:处理 http 网络错误
    // 定义一个变量：用于存储网络的错误信息
    let message = ''
    // http 状态码
    let status = error.response.status
    switch(status){
        case 401:
            message = 'TOKEN过期'
            break
        case 403:
            message = '无权访问'
            break
        case 404:
            message = '请求地址错误'
            break
        case 500:
            message = '服务器出现问题'
            break
        default:
            message = '网络出现问题'
            break
    }
   ElMessage({
      type:'error',
      message
   })
  },
)
