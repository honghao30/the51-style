<template>
  <div class="content-wrap">
    <Title 
      :level="2" 
      pageTitle="전국 날씨"
    />
    <div class="discription-text">
      SVG 지도와 날씨 API 활용
    </div>
    <Title 
      :level="3" 
      pageTitle="전국날씨"
    />
    <div class="map--wrap">
      <div class="map-wrap">
        <mapCmp        
          :MapChartData="WeatherList[0]"
          :ColorType="ColorType"      
        />
      </div>     
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Title from "@/components/element/PageTitle.vue"
import mapCmp from "@/components/svgmap/mapCmp.vue"
import { getWeatherKorea } from '@/api/getWeatherKorea'
const WeatherList = getWeatherKorea()

const ColorType = ref('blue')

</script>

<style>
.map--wrap {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  gap: 120px;
  padding: 0 0 30px;
}
.map-wrap {
  width: 280px;
}
</style>