<template>
    <div class="el-home">
        <search-view v-if="isSearchViewShown" @cancel="toggleSearchView"></search-view>
        <home-nav-bar :recomments="recomments" @searchClick="toggleSearchView"></home-nav-bar>
    </div>
</template>
<script setup lang="ts">
import { ref, reactive } from "vue"
import SearchView from '@/components/SearchView/index.vue'
import HomeNavBar from "./components/HomeNavBar.vue"

import { useToggle } from "@/hooks/useToggle"

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

const [isSearchViewShown, toggleSearchView] = useToggle(false)
</script>
<style lang="scss" scoped></style>
