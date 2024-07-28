import instance from "@/api/config"
import type { IHomeInfo } from '@/types'

export function fetchHomePageData() {
    return instance<IHomeInfo, IHomeInfo>({
        url: '/home_page'
    })
}