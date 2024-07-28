export interface ISearchRecomment {
    value: number
    label: string
}

export interface ISearchResultList {
    list: ISearchResult
}

export interface ISearchResult {
    type: number
    label: string
    resultCount: number
}

export interface IHomeInfo {
    banner: IBanner
    searchRecomments: ISearchRecomment[]
    transformer: ITransform[]
    countdown: ICountdown
    activities: string[]
}

export interface IBanner {
    imgUrl: string
}

export interface ITransform {
    imgUrl: string
    label: string
}

export interface ICountdown {
    time: number
    goods: IGood
}

export interface IGood {}