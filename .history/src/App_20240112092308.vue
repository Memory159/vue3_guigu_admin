<template>
  <h1>测试 axios </h1>
</template>

<script lang="ts" setup>
  import request from '@/utils/request'
  import {onMounted } from 'vue';

  onMounted(() => {
    request({
        url:'user/login',
        method:'post',
        data:{
          username:'admin',
          password:'111111'
        }
    }).then((res)=>{
        console.log(res);
    })
  });
</script>

<style scoped lang="scss">
</style>
