import { createApp } from 'vue'
import App from './App.vue'
import { router } from './router/index.js'
import axios from 'axios'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import './assets/scss/index.scss'


const app = createApp(App)
app.provide('$axios', axios)
createApp(App).use(ElementPlus).use(router).mount('#app')
