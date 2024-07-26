<template>
    <div class="layout">
        <router-view></router-view>
        <el-tab-bar></el-tab-bar>
    </div>
</template>
<script setup lang="ts">
import { ref, reactive } from "vue"
import ElTabBar from "./components/ElTabBar.vue"
</script>
<style lang="scss" scoped></style>
