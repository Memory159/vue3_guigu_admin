// 统一管理项目用户相关的接口
// 引入 ts 定义的类型
import type { loginForm,loginResponseData,userResponseData } from './type'
// 引入封装好的 axios => request 
import request from '@/utils/request'
// 统一管理接口
enum API{
    LOGIN_URL = "/user/login",
    USERINFO_URL = "/user/info"
}
// 暴露请求函数
// 登录接口方法
export const reqLogin = (data:loginForm) => request.post<any,loginResponseData>(API.LOGIN_URL,data)
// 获取用户信息接口方法
// 泛型第一个参数是服务器返回数据的类型，第二个参数是经过 axios 包装一层得到的 response 对象的类型
export const reqUserInfo = ()=> request.post<any,userResponseData>(API.USERINFO_URL)