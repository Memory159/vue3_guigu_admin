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
        return {}
    },
    // 处理异步 | 逻辑的地方
    actions:{
        userLogin(data){
            console.log(data);
        }
    },
    // 处理计算属性的地方
    getters:{

    }
})

// 对外暴露获取小仓库的方法
export default useUserStore