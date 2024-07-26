<template>
    <van-tabbar route v-model="active">
        <van-tabbar-item replace to="/home" icon="home-o">首页</van-tabbar-item>
        <van-tabbar-item replace to="/order" icon="gold-coin-o">订单</van-tabbar-item>
        <van-tabbar-item replace to="/mine" icon="contact-o">我的</van-tabbar-item>
    </van-tabbar>
</template>
<script setup lang="ts">
import { ref, reactive } from "vue"
const active = ref('home')
</script>
<style lang="scss" scoped></style>
