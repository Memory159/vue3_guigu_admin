<template>
  <div class="login_container">
      <el-row>
        <el-col :span="12" :xs="0">左边占位</el-col>
        <el-col :span="12" :xs="24">
            <el-form class="login_form">
              <h1>hello</h1>
              <h2>欢迎来到硅谷甄选</h2>
              <el-form-item>
                <el-input></el-input>
              </el-form-item>
              <el-form-item>
                <el-input type="password"></el-input>
              </el-form-item>
            </el-form>
        </el-col>
      </el-row>
  </div>
</template>

<script lang="ts" setup>
 // import { ref, reactive, onMounted } from 'vue';
  
 // onMounted(() => {});
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
    background: url();
  }
</style>