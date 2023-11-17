import { createApp } from 'vue'
import App from './App.vue'
import { router } from './router/index.js'
import axios from 'axios'
import ClickOutside from './utils/ClickOutsideDirective'

// import Swiper core and required components
import SwiperCore, { Navigation, Pagination, A11y, Parallax } from "swiper"
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/swiper.scss"
import "swiper/components/navigation/navigation.scss"
import "swiper/components/pagination/pagination.scss"
// install Swiper components
SwiperCore.use([Navigation, Pagination, A11y])

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

// import "@/plugins/myComponents";
import globalComponents from './plugins/myComponents'

const vuetify = createVuetify({
  components,
  directives,
})

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import './assets/scss/index.scss'

const app = createApp(App)
app.provide('$axios', axios)
createApp(App).use(ElementPlus).use(vuetify).use(router).use(globalComponents).mount('#app')
app.directive('click-outside', ClickOutside)
