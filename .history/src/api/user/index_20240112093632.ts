// 统一管理项目用户相关的接口
// 引入封装好的 axios => request 
import request from '@/utils/request'
// 统一管理接口
enum API{
    LOGIN_URL = "/user/login",
    USERINFO_URL = "/user/info"
}