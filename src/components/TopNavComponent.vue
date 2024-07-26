<template>
    <div class="header">
        <van-search v-model="value" show-action placeholder="搜索商品、品类" @search="onSearch">
            <template #left>
                <div class="city" @click="onCity">{{ cityStore.city }}<span class="iconfont icon-jiantouxia"></span>
                </div>
            </template>
            <template #action>
                <div @click="onClickButton">搜索</div>
            </template>
        </van-search>
    </div>
</template>
<script setup lang="ts">
import { ref, reactive } from "vue"
import { useRouter } from "vue-router"
import { useCityStore } from "@/stores/modules/city"

const router = useRouter()
const cityStore = useCityStore()
const value = ref<string>("")

const onCity = (): void => {
    router.push("/city")
}

const onSearch = (val: string): void => {
    console.log(val);
}

const onClickButton = (): void => {
    console.log("点击搜索");
}

</script>
<style lang="scss" scoped>
.city {
    margin-right: 5px;

    span {
        font-size: 10px;
        margin: 0 3px;
    }
}
</style>