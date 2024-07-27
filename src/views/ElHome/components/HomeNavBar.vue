<template>
    <div class="home-nav-bar">
        <!-- NavBarTop Start -->
        <div class="nav-bar-top">
            <img class="location-icon" src="@/assets/imgs/index_page/location.png" />
            <span class="location-text">翻斗花园（北一区东南门）</span>
            <img class="shopcart-icon" src="@/assets/imgs/index_page/shopcart.png" />
            <img class="comments-icon" src="@/assets/imgs/index_page/comments.png" />
        </div>
        <!-- NavBarTop End -->
        <!-- Action1 Search Start -->
        <van-search shape="round" background="linear-gradient(to right, rgb(53, 200, 250), rgb(31, 175, 343))"
            placeholder="世界茶饮 满35减2">
            <template #right-icon>
                <div>搜索</div>
            </template>
        </van-search>
        <!-- Action1 Search End -->
        <div class="search-recommend">
            <div v-for="item in recomments" :key="item.value" class="tag">{{ item.label }}</div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { ref, reactive } from "vue"
import type { ISearchRecomment } from '@/types/index'
interface HomeNavBarProps {
    recomments: ISearchRecomment[]
}
defineProps<HomeNavBarProps>()

</script>
<style lang="scss" scoped>
.home-nav-bar {
    background: linear-gradient(to right, rgb(53, 200, 250), rgb(31, 175, 343));
    color: white;

    .nav-bar-top {
        display: flex;
        align-items: center;
        padding: 10px 10px 0 10px;
        line-height: 15px;
        font-size: 15px;
        font-weight: bold;

        .location-icon {
            width: 24px;
            height: 24px;
        }

        .location-text {
            flex: 1;
        }

        .shopcart-icon {
            width: 24px;
            height: 24px;
        }

        .comments-icon {
            width: 28px;
            height: 24px;
            margin-left: 10px;
        }
    }

    /*重写 search*/
    .van-search {
        :deep(.van-field__right-icon) {
            margin-right: 0;
        }
    }

    .search-recommend {
        display: flex;
        padding: 0 10px 8px;

        .tag {
            font-size: 12px;
            border-radius: 10px;
            background: rgb(242, 242, 242, 0.3);
            padding: 2px 8px;
            margin-right: 10px;
        }
    }
}
</style>
