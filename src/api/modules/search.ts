import instance from '../config'
import type { ISearchResultList } from '@/types'

export const fetchSearchDataApi = (key?: string | number) => {
    return instance<ISearchResultList, ISearchResultList>({
        url: '/home_search',
        params: {
            _label_like: key
        }
    })
}