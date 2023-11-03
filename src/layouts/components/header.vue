<template>
  <div class="header">
    <div class="inner__wrap">
      <div class="logo">
        <h1>MyPackage</h1>
      </div>
      <el-menu
        :default-active="activeIndex"
        class="el-menu-demo"
        mode="horizontal"
        :ellipsis="false"
        @select="handleSelect"
      >        
        <el-sub-menu index="1">
          <template #title>영화정보</template>
          <el-menu-item index="1-1">
            <router-link to="/MovieList">인기영화</router-link>
          </el-menu-item>
          <!-- <el-menu-item index="1-2">상영중</el-menu-item>           -->
          <el-menu-item index="1-2">박스오피스</el-menu-item>
        </el-sub-menu>
        <el-sub-menu index="2">
          <template #title>컴포넌트</template>
          <el-menu-item index="2-1">
            <router-link to="/cmpButton">버튼</router-link>
          </el-menu-item>
          <el-menu-item index="2-2">
            <router-link to="/cmpTitle">타이틀</router-link>
          </el-menu-item>
          <el-menu-item index="2-3">
            <router-link to="/cmpModal">모달</router-link>
          </el-menu-item>
          <el-menu-item index="2-4">
            <router-link to="/cmpToolTip">말풍선</router-link>
          </el-menu-item>
          <el-menu-item index="2-5">
            <router-link to="/cmpAccordion">아코디언</router-link>
          </el-menu-item>   
          <el-menu-item index="2-6">
            <router-link to="/cmpTab">탭메뉴</router-link>
          </el-menu-item>          
          <el-menu-item index="2-7">
            <router-link to="/cmpKoreaMap">SVG맵</router-link>
          </el-menu-item>                 
        </el-sub-menu>  
        <el-sub-menu index="3">
          <template #title>스크립트</template>
          <el-menu-item index="3-1">swiper</el-menu-item>
          <el-menu-item index="3-2">
            <router-link to="/scrollEvent">스크롤이벤트</router-link>
          </el-menu-item>
          <el-menu-item index="3-3">동영상 제어</el-menu-item>
          <el-menu-item index="3-4">
            <router-link to="/cmpKoreaWeather">전국날씨</router-link>
          </el-menu-item>          
        </el-sub-menu> 
        <el-sub-menu index="4">
          <template #title>미니게임</template>
          <el-menu-item index="4-1">롤렛</el-menu-item>
          <el-menu-item index="4-1">주차관리</el-menu-item>
        </el-sub-menu>
        <el-sub-menu index="5">
          <template #title>자료실</template>
          <el-menu-item index="5-1">퍼블리싱 가이드</el-menu-item>          
        </el-sub-menu>                     
      </el-menu>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { ref } from 'vue'

  const activeIndex = ref('1')
  const handleSelect = (key: string, keyPath: string[]) => {
    console.log(key, keyPath)
  }
</script>
