<template>
    <router-view></router-view>
</template>
<script setup lang="ts">
import { RouterView } from 'vue-router'
import { ref, reactive } from "vue"

</script>
<style lang="scss">
#app {
    /*字体抗锯齿, 使得字体看起来更加清晰*/
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    font-size: 14px;
}
</style>
