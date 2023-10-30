<template>
  <div class="main-container">
    <el-card class="box-card main-weather">
      <template #header>
        <div class="card-header">
          <span>안녕하세요?</span>
          <el-button class="button" text>전국날씨</el-button>
        </div>
      </template>
      <div class="text item">
        10월 30일 서울 날씨 입니다.<br>
        여러분이 계신곳은 어떠신가요?
      </div>
    </el-card>    
    <div class="main-swiper">
      <swiper
        :modules="modules"
        :slides-per-view="1"
        :space-between="0"
        navigation
      >
        <swiper-slide>
          <img src="@/assets/images/main/main02.jpg" alt="">
        </swiper-slide>
        <swiper-slide>
          <img src="@/assets/images/main/main01.jpg" alt="">
        </swiper-slide>
        <swiper-slide>
          <img src="@/assets/images/main/main03.jpg" alt="">
        </swiper-slide>     
      </swiper>
    </div>
  </div>
</template>
<script setup>
// import Swiper core and required components
import SwiperCore, { Navigation, Pagination, A11y } from "swiper"
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/swiper.scss"
import "swiper/components/navigation/navigation.scss"
import "swiper/components/pagination/pagination.scss"
// install Swiper components
SwiperCore.use([Navigation, Pagination, A11y])

// import Weather from '@/api/getWeather'
import axios from 'axios'
import { ref } from 'vue'

const Weather= async () => {
  const RankBaseUrl = 'https://api.openweathermap.org/data/2.5/weather?q=';
  const Mykey = '13b55b2bf5bf4b64df063ddbfe1f3c5c'
  let citis = 'Seoul'
  
    axios
    .get(`${RankBaseUrl}${citis}&APPID=${Mykey}&units=metric`,)
    .then(res => {            
        console.log(res.data)

    })
    .catch(err => {
        console.log(err.message);
    })       
}
Weather ()
</script>