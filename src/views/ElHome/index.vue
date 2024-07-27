<template>
    <div class="el-home">
        <home-nav-bar :recomments="recomments"></home-nav-bar>
    </div>
</template>
<script setup lang="ts">
import { ref, reactive } from "vue"
import HomeNavBar from "./components/HomeNavBar.vue"

const recomments = [
    {
        value: 0,
        label: '牛腩'
    },
    {
        value: 1,
        label: '牛肉'
    },
    {
        value: 2,
        label: '牛排'
    }
]
</script>
<style lang="scss" scoped></style>
