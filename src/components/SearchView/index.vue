<template>
    <div class="search-view" @click="emits('cancel')">
        搜索页
    </div>
</template>
<script setup lang="ts">
import { ref, reactive } from "vue"
interface SearchViewEmits {
    (e: 'cancel'): void
}

const emits = defineEmits<SearchViewEmits>()
</script>
<style lang="scss" scoped>
.search-view {
    /*铺满整个屏幕*/
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: white;
    z-index: 999;
}
</style>
