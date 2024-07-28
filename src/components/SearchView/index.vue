<template>
    <div class="search-view">
        <el-search show-action v-model="searchValue" shape="round" placeholder="请输入搜索关键词" @search="fetchSearchData"
            @cancel="emits('cancel')"></el-search>
        <div class="search-view__history" v-if="!searchValue">
          <div class="label">历史搜索</div>
          <TransitionGroup name="list">
            <div class="history-tag" v-for="item in historyTags" :key="item" @click="onTagClick(item)">{{ item }}</div>
            <div class="history-tag" key="arrow" @click="toggleHistoryTagShow">
              <van-icon v-if="isHistoryTagShow" name="arrow-up"></van-icon>
              <van-icon v-else name="arrow-down"></van-icon>
            </div>
          </TransitionGroup>
        </div>
        <div class="search-view__result">
            <div class="searching" v-if="searchState === DOING">正在搜索</div>
            <template v-if="searchState === DONE">
              <div class="result-item" v-for="item in searchResult" :key="item.label">
                <van-icon name="search"></van-icon>
                <div class="name">{{ item.label }}</div>
                <div class="count">约{{ item.resultCount }}个结果</div>
              </div>
              <div class="no-result" v-if="!searchResult.lenght">暂无推荐</div>
            </template>
        </div>
    </div>
</template>
<script setup lang="ts">
import ElSearch from '@/basic/ElSearch/index.vue'
import {ref, reactive, computed, watch} from "vue"
import { fetchSearchDataApi } from '@/api/index'
import type { ISearchResult } from '@/types'
import { useToggle } from "@/hooks/useToggle"
import { useDebounce } from '@/hooks/useDebounce'

interface SearchViewEmits {
    (e: 'cancel'): void
}

const emits = defineEmits<SearchViewEmits>()

const searchValue = ref('')
const searchResult = ref([] as ISearchResult)
const [INIT, DONE, DOING] = [-1, 0, 1]
const searchState = ref(INIT)
const HISTORY_TAGS = [
    '比萨',
    '栗子',
    '炒饭',
    '出前一丁',
    '玉米',
    '牛腩',
    '土豆焖饭',
    '烧烤',
    '水果'
]
const [isHistoryTagShow, toggleHistoryTagShow] = useToggle(false)
const historyTags = computed(() => isHistoryTagShow.value ? HISTORY_TAGS : HISTORY_TAGS.slice(0, 5))
const fetchSearchData = async (v?: string | number) => {
    try {
      searchState.value = DOING
      const { list } = await fetchSearchDataApi(v)
      searchResult.value = list
    } finally {
      searchState.value = DONE
    }
}
const onTagClick = (v: string) => {
  searchValue.value = v
  fetchSearchData(v)
}
// watch(searchValue, useDebounce((newValue) => {
//       if(!newValue) {
//         searchResult.value = [] as ISearchResult
//         return
//       }
//       fetchSearchData(newValue as string)
//     }, 1000)
// )
const debounceValue = useDebounce(searchValue, 1000)
watch(debounceValue, (newValue) => {
      if(!newValue) {
        searchResult.value = [] as ISearchResult
        return
      }
      fetchSearchData(newValue as string)
})
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

    &__history {
      padding: var(--van-padding-sm);
      .label {
        margin-bottom: var(--van-padding-xs);
      }
      .history-tag {
        display: inline-block;
        font-size: 12px;
        border-radius: 10px;
        color: var(--van-gray-6);
        background: var(--van-gray-1);
        padding: 4px 8px;
        margin-right: 10px;
        margin-bottom: var(--van-padding-xs);
      }
    }

    &__result {
        .result-item {
            display: flex;
            align-items: center;
            font-size: 12px;
            padding: 10px;
            border-radius: 1px solid var(--van-gran-1);

            .name {
                flex: 1;
            }

            .count {
                font-size: 12px;
                color: var(--van-gran-1);
            }
        }
      .no-result,
      .searching {
        font-size: 12px;
        padding: 100px 0;
        text-align: center;
        color: var(--van-gray-6);
      }
    }
}

.list-enter-active, .list-leave-active {
  transition: all 1s ease;
}
.list-enter-from, .list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
</style>
