<template>
  <div class="content-wrap">
    <div  class="section section00">
      <Title 
        :level="2" 
        alignType="center" 
        pageTitle="스크롤 이벤트"
      />
    </div>    
    <div  class="section section01 slideup">
      <Title 
        :level="3" 
        alignType="center" 
        pageTitle="스크롤 이벤트1"
      />
    </div>
    <div class="section section02 slideup">
      <Title 
        :level="3" 
        alignType="center" 
        pageTitle="스크롤 이벤트2"
      />
    </div>
    <div class="section section03 slideup">
      <Title 
        :level="3" 
        alignType="center" 
        pageTitle="스크롤 이벤트3"
      />
    </div>
    <div  class="section section04 slideup">
      <Title 
        :level="3" 
        alignType="center" 
        pageTitle="스크롤 이벤트4"
      />
    </div>
  </div>  
</template>

<script setup>
import Title from "@/components/element/PageTitle.vue"
import { onMounted, onUnmounted } from 'vue'

onMounted(() => {
  handleScroll()
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

const handleScroll = () => {
  let obj = document.querySelectorAll('.slideup')
  let height = document.documentElement.clientHeight
  obj.forEach(section => {
    let { top, bottom } = section.getBoundingClientRect()
    let isInViewport = top < height && bottom > 0
    if (isInViewport) {
      section.classList.add('slideInUp')
    }
  })
}
</script>

<style lang="scss">
.section {
  height: 1020px;
  border-bottom: 1px solid #ccc;
  &.section01,
  &.section03 {
    background: #ccc;
  }
}
</style>