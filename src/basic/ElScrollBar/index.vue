<!--
 * @Author: ZRMYDYCG 547471919@qq.com
 * @Date: 2024-07-29 19:36:22
 * @LastEditors: ZRMYDYCG 547471919@qq.com
 * @LastEditTime: 2024-08-13 13:53:50
 * @FilePath: \ele-h5\src\basic\ElScrollBar\index.vue
 * @Description: 
-->
<script setup lang="ts">
// import type { IScrollBarInfo } from '@/types'
interface IProps {
  intervalTime: number
  transitionTime: number
  height: number
  data?: IScrollBarInfo[]
}

const props = withDefaults(defineProps<IProps>(), {
  intervalTime: 3000,
  transitionTime: 1000,
  height: 40
})
</script>

<template>
  <div class="el-scroll-bar"></div>
</template>

<style scoped lang="scss">

</style>