import { createRouter, createWebHistory } from 'vue-router'
import home from "@/views/main/main.vue";
import cmpTitle from "@/views/cmpUser/cmpTitle.vue";
import cmpButton from "@/views/cmpUser/cmpButton.vue";
import cmpModal from "@/views/cmpUser/cmpModal.vue";
import cmpToolTip from "@/views/cmpUser/cmpToolTip.vue";
import cmpKoreaMap from "@/views/cmpUser/cmpSvgMap.vue";
import cmpAccordion from "@/views/cmpUser/cmpAccMenu.vue";
import cmpKoreaWeather from "@/views/cmpUser/cmpKoreaWeather.vue";

// 라우터 
const routes = [
    {
        path: "/",
        name: "home",
        component: home,
    } ,
    {
        path: "/cmpTitle",
        name: "cmpTitle",
        component: cmpTitle,
    },
    {
        path: "/cmpButton",
        name: "cmpButton",
        component: cmpButton,
    },
    {
        path: "/cmpModal",
        name: "cmpModal",
        component: cmpModal,
    },
    {
        path: "/cmpToolTip",
        name: "cmpToolTip",
        component: cmpToolTip,
    },
    {
        path: "/cmpKoreaMap",
        name: "cmpKoreaMap",
        component: cmpKoreaMap,
    }, 
    {
        path: "/cmpAccordion",
        name: "cmpAccordion",
        component: cmpAccordion,
    },
    {
        path: "/cmpKoreaWeather",
        name: "cmpKoreaWeather",
        component: cmpKoreaWeather,
    } 
]

// 라우터 생성
const router = createRouter({
    history: createWebHistory(),
    routes
});

// 라우터 추출 (main.js에서 import)
export {router}