<template>
  <div class="login_container">
      <el-row>
        <el-col :span="12">左边占位</el-col>
        <el-col :span="12">右边占位</el-col>
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
</style>