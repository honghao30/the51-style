import { createApp } from 'vue'
import App from './App.vue'
import { router } from './router/index.js'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import './assets/scss/index.scss'


const app = createApp(App)
createApp(App).use(ElementPlus).use(router).mount('#app')
