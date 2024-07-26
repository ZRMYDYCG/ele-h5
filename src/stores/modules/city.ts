import { defineStore } from "pinia"

export const useCityStore = defineStore("city", {
    state: () => ({
        city: "北京"
    })
})