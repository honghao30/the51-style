<template>
  <div class="content-wrap" ref="content">
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
    class="section section02 slideup" :class="{ slideInUp: scrolled}">
      <Title 
        :level="3" 
        alignType="center" 
        pageTitle="스크롤 이벤트2"
      />
    </div>
    <div class="section section03 slideup"  :class="{ slideInUp: scrolled}">
      <Title 
        :level="3" 
        alignType="center" 
        pageTitle="스크롤 이벤트3"
      />
    </div>
    <div  class="section section04 slideup"  :class="{ slideInUp: scrolled}">
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
const content = ref()

onMounted(() => {
  const handleScroll = () => {
    const obj = content.value.querySelectorAll('.slideup')
    const height = document.documentElement.clientHeight
    obj.forEach(section => {
      const { top, bottom } = section.getBoundingClientRect()
      const isInViewport = top < height && bottom > 0
      if (isInViewport && !section.classList.contains('slideInUp')) {
        section.classList.add('slideInUp')
      }
    })
  }

  window.addEventListener('scroll', handleScroll)
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