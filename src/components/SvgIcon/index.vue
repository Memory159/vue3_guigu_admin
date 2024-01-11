<template>
  <svg :style="{ width, height }">
    <use :xlink:href="prefix + name" :fill="color"></use>
  </svg>
</template>

<script lang="ts" setup>
// 接收父组件传递过来的参数
defineProps({
  // xlink:href 属性值前缀
  prefix: {
    type: String,
    default: '#icon-',
  },
  // 提供父组件传递图标的名字
  name: String,
  // 提供父组件传递图标的颜色
  color: {
    type: String,
    default: '',
  },
  // 接收父组件传递过来图标的宽度
  width: {
    type: String,
    default: '16px',
  },
  // 接收父组件传递过来图标的高度
  height: {
    type: String,
    default: '16px',
  },
})
</script>

<style scoped lang="scss"></style>
