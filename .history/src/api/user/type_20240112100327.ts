// 设置登录接口需要携带参数 ts 的类型
export interface loginForm {
    username:string,
    password:string
}

// 设置登录接口返回数据中字段 data 的类型
interface dataTokenType {
    token:string
}

// 设置登录接口返回数据的类型
export interface loginResponseData {
    code:number,
    data:dataTokenType
}

// 设置返回用户信息数据中字段 data 中 字段 checkUser 的类型
interface checkUserType{
    
}

// 设置返回用户信息数据中字段 data 的类型
interface dataCheckUserType{
    checkUser:object
}

// 设置服务器返回用户信息相关的数据类型
export interface userResponseData{
    code:number,
    // data:dataCheckUserType
}