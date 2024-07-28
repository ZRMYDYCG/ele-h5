<template>
  <div v-if="loading" class="el-loading">
    <slot name="template">
      <div v-if="type === 'loading'" class="loading-wrapper">
        <van-loading></van-loading>
      </div>
      <div v-if="type === 'skeleton'" class="skeleton-wrapper">
        <van-skeleton :row="10"></van-skeleton>
        <van-skeleton title avatar :row="5"></van-skeleton>
        <van-skeleton title :row="5"></van-skeleton>
      </div>
    </slot>
  </div>
  <slot v-else></slot>
</template>

<script setup lang="ts">
interface IProps {
  loading: boolean
  type: 'loading' | 'skeleton'
}

defineProps<IProps>()
</script>

<style scoped lang="scss">
.el-loading {
  .loading-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100px;
  }
  .skeleton-wrapper {
    padding: 20px 10px;
  }
}
</style>