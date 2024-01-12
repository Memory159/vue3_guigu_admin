// 统一管理项目用户相关的接口
// 引入 ts 定义的类型
import type { loginForm,loginResponseData } from './type'
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
export const reqUserInfo = ()=> request.post(API.USERINFO_URL)