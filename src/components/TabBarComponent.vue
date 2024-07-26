<template>
    <van-tabbar v-model="active" active-color="#684886" @change="onChange">
        <van-tabbar-item name="shouye" replace to="/">
            <span>首页</span>
            <template #icon="props">
                <img :src="props.active ? shouye_select : shouye" />
            </template>
        </van-tabbar-item>
        <van-tabbar-item name="place" replace to="/place">
            <span>选址</span>
            <template #icon="props">
                <img :src="props.active ? place_select : place" />
            </template>
        </van-tabbar-item>
        <van-tabbar-item name="shop" replace to="/shop">
            <span>商城</span>
            <template #icon="props">
                <img :src="props.active ? shop_select : shop" />
            </template>
        </van-tabbar-item>
        <van-tabbar-item name="person" replace to="/person">
            <span>人才</span>
            <template #icon="props">
                <img :src="props.active ? person_select : person" />
            </template>
        </van-tabbar-item>
        <van-tabbar-item name="mine" replace to="/mine">
            <span>我的</span>
            <template #icon="props">
                <img :src="props.active ? mine_select : mine" />
            </template>
        </van-tabbar-item>
    </van-tabbar>
</template>
<script setup lang="ts">
import { ref, onMounted } from "vue"
import shouye from "../assets/images/shouye.png"
import shouye_select from "../assets/images/shouye_select.png"
import shop from "../assets/images/shop.png"
import shop_select from "../assets/images/shop_select.png"
import mine from "../assets/images/mine.png"
import mine_select from "../assets/images/mine_select.png"
import place from "../assets/images/place.png"
import person_select from "../assets/images/person_select.png"
import person from "../assets/images/person.png"
import place_select from "../assets/images/place_select.png"


const active = ref<any>('shouye')

onMounted(() => {
    if (sessionStorage.getItem("key")) {
        active.value = sessionStorage.getItem("key")
    }
})


/**
 * tabBar点击事件
 */
const onChange = (index: string) => {
    sessionStorage.setItem("key", index)
}

</script>
<style scoped></style>