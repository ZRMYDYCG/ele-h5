<template>
    <div class="el-home">
        <Transition name="fade">
            <search-view v-if="isSearchViewShown" @cancel="toggleSearchView"></search-view>
        </Transition>
        <home-nav-bar :recomments="recomments" @searchClick="toggleSearchView"></home-nav-bar>
    </div>
    {{ pending }}
    {{ data }}
</template>
<script setup lang="ts">
import { ref, reactive } from "vue"
import SearchView from '@/components/SearchView/index.vue'
import HomeNavBar from "./components/HomeNavBar.vue"

import { useToggle } from "@/hooks/useToggle"
import { useAsync } from "@/hooks/useAsync"
import { fetchHomePageData } from "@/api/modules/home"
import type {IHomeInfo} from "@/types"

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
const { data, pending }  = useAsync(fetchHomePageData, {} as IHomeInfo)
</script>
<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>
