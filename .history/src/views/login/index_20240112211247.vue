<template>
  <div class="login_container">
      <el-row>
        <el-col :span="12" :xs="0"></el-col>
        <el-col :span="12" :xs="24">
            <el-form class="login_form">
              <h1>Hello</h1>
              <h2>欢迎来到硅谷甄选</h2>
              <el-form-item>
                <el-input :prefix-icon="User" v-model="loginForm.username"></el-input>
              </el-form-item>
              <el-form-item>
                <el-input :prefix-icon="Lock" type="password" v-model="loginForm.password" show-password></el-input>
              </el-form-item>
              <el-form-item>
                <el-button class="login_btn" type="primary" @click="login">登录</el-button>
              </el-form-item>
            </el-form>
        </el-col>
      </el-row>
  </div>
</template>

<script lang="ts" setup>
import {User,Lock} from '@element-plus/icons-vue'
import {reactive} from 'vue'
// 引入用户相关的小仓库
import useUserStore from '@/store/modules/user'
let useStore = useUserStore()
// 收集表单数据
let loginForm = reactive({username:'admin',password:'111111'})

// 登录的方法
const login = async() =>{
  // 通知仓库发起登录请求
  // 请求成功->首页展示数据
  // 请求失败->弹出登录失败信息
  try {
    // 保证登录成功
    await useStore.userLogin(loginForm)
    // 登录成功后利用编程式导航跳转到首页展示数据
    $router.push('/')  
  } catch (error) {
    
  }
  
}
</script>

<style scoped lang="scss">
  .login_container{
    width:100%;
    height:100vh;
    background: url('@/assets/images/background.jpg') no-repeat;
    background-size: cover;
  }
  .login_form{
    position: relative;
    width: 80%;
    top: 30vh;
    background: url('@/assets/images/login_form.png') no-repeat;
    background-size: cover;
    padding: 40px;
    h1{
      color: white;
      font-size: 40px;
    }
    h2{
      color: white;
      font-size: 20px;
      margin: 20px 0px;
    }
    .login_btn{
      width: 100%;
    }
  }
</style>