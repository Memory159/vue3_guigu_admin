// 设置登录接口需要携带参数 ts 的类型
// <一>
export interface loginForm {
    username:string,
    password:string
}

// <二>
// 设置登录接口返回数据中字段 data 的类型
interface dataTokenType {
    token?:string
}

// 设置登录接口返回数据的类型
export interface loginResponseData {
    code:number,
    data:dataTokenType
}

// <三>
// 设置返回用户信息数据中字段 data 中 字段 checkUser 的类型
interface checkUserType{
    userId:number,
    avatar:string,
    username:string,
    password:string,
    desc:string,
    roles:string[],
    buttons:string[],
    routes:string[],
    token:string
}

// 设置返回用户信息数据中字段 data 的类型
interface dataCheckUserType{
    checkUser:checkUserType
}

// 设置服务器返回用户信息相关的数据类型
export interface userResponseData{
    code:number,
    data:dataCheckUserType
}