<template>
  <div class="content-wrap">
    <div  class="section section00">
      <Title 
        :level="2" 
        alignType="center" 
        pageTitle="스크롤 이벤트"
      />
    </div>    
    <div  class="section section01"
      ref="section1"
    >
      <Title 
        :level="3" 
        alignType="center" 
        pageTitle="스크롤 이벤트1"
      />
      <div class="slideup" style="width: 500px;height: 600px;background-color: red;">

      </div>
    </div>
    <div 
    ref="section2"
    class="section section02 slideup">
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
import { ref, onBeforeUnmount, onMounted } from 'vue'

const handleScroll = () => {
  // 스크롤 up animation event
  let obj = document.querySelectorAll('.slideup')
  let height = document.documentElement.clientHeight
  obj.forEach(section => {
    let { top, bottom } = section.getBoundingClientRect() // 각 섹션의 위치를 가져옵니다.
    let isInViewport = top < height && bottom > 0 // 섹션이 뷰포트 안에 있는지 확인합니다.
    if (isInViewport) {
      section.classList.add('slideInUp')
    }
  })
  // 배경칼라 변경
  // const sections = this.$refs
  // const scrollVal = window.scrollY
  // const docBody = document.body

  // for (const key in sections) {
  //   const section = sections[key]
  //   if (section && section.offsetTop <= scrollVal && section.offsetTop + section.clientHeight > scrollVal) {
  //     const color = section.dataset.color
  //     if (color) {
  //       this.bodyColor = color
  //     }
  //   }
  // }
  // docBody.className = this.bodyColor
}
onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})
onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style lang="scss">
.section {
  height: 1020px;
  border-bottom: 1px solid #ccc;
  position: relative;
  &.section01,
  &.section03 {
    background: #ccc;
  }
}
</style>