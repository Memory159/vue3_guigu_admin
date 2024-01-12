// 设置登录接口需要携带参数 ts 的类型
export interface loginForm {
    username:string,
    password:string
}

// 设置登录接口返回数据中字段 data 的类型
interface dataType {
    token:string
}

// 设置登录接口返回数据的类型
export interface loginResponseData {
    code:number,
    data:dataType
}

// 设置返回用户信息数据中字段 checkout 的类型
interface checkoutType{
    
}

// 设置服务器返回用户信息相关的数据类型
export interface userResponseData{
    code:number
}