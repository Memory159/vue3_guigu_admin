<template>
  <h1>App 根组件</h1>
</template>

<script lang="ts" setup>
// 引入登录接口
import {reqLogin} from './api/user'
import { onMounted } from 'vue';

onMounted(async () => {
  const result = await reqLogin({username:'admin',password:'111111'})
  console.log(result);
});
</script>

<style scoped lang="scss">
</style>