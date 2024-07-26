import { createApp } from 'vue'
import pinia  from '@/stores/index'

import "normalize.css"
import "./assets/css/main.css"
import "./assets/font/iconfont.css"

import App from './App.vue'
import router from './router'


const app = createApp(App)

app.use(pinia)
app.use(router)
app.mount('#app')
