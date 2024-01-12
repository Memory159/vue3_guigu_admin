// 创建用户相关的小仓库
import {defineStore} from 'pinia'
// 引入用户登录的接口
import {reqLogin} from '@/api/user'
// 引入 ts 数据类型
import type { loginForm } from '@/api/user/type'
// 创建用户小仓库
let useUserStore = defineStore('User',{
    // 小仓库存储数据的地方
    state:()=>{
        return {
            token:localStorage.getItem('TOKEN'), // 用户唯一标识 token
        }
    },
    // 处理异步 | 逻辑的地方
    actions:{
        async userLogin(data:loginForm){
            // 登录请求
            let result:any =  await reqLogin(data)
            // 登录请求：成功200:-> 得到 token
            // 登录请求：失败201:-> 返回登录失败错误的信息
            if(result.code == 200){
                // pinia 仓库存储一下 token
                // 由于 pinia | vuex 存储数据其实就是利用 js 对象进行存储，不会持久化
                this.token = result.data.token
                // 本地存储持久化存储一份
                localStorage.setItem('TOKEN',result.data.token)
                // 能保证当前 async 函数返回一个成功的 promise
                return 'ok'
            }else{
                return Promise.reject(new Error(result.data.message))
            }
            
        }
    },
    // 处理计算属性的地方
    getters:{

    }
})

// 对外暴露获取小仓库的方法
export default useUserStore