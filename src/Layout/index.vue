<template>
    <div class="layout">
        <router-view></router-view>
        <TabBarComponent></TabBarComponent>
    </div>
</template>
<script setup lang="ts">
import TabBarComponent from "@/components/TabBarComponent.vue"
import { ref, reactive } from "vue"

</script>
<style lang="scss" scoped></style>
