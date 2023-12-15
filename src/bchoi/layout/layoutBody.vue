<template>
  <div class="container container--slide">
    <swiper
      :direction="'vertical'"
      :slides-per-view="1"
      :mousewheel="true"
      :modules="modules"
      class="mySwiper"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
    >
      <swiper-slide v-for="item in slideItemData">
        <slideContent :type="item.type" :src="item.src" :alt="item.title" />
        <div class="btn-wrap">
          <btnComponent
            v-for="btnItem in item.btn"
            :btnType="btnItem.btnType"
            :btnName="btnItem.btnName"
            :btnCnt="btnItem.btnCnt"
            :btnEvent="btnItem.isEvent"
          />
        </div>
        <slideInfo
          :title="item.title"
          :author="item.author"
          :date="item.date"
        />
      </swiper-slide>
    </swiper>
  </div>
  <div class="container container--bottom-util">
    <div class="btn-wrap">
      <btnComponent btnType="text" btnName="Home" />
      <btnComponent
        btnType="popup"
        btnName="Upload"
        popupClass="pop01"
        @click="btnPopup('pop01')"
      />
      <btnComponent btnType="text" btnName="My Page" />
    </div>
  </div>

  <!-- popupComponent 
        .container--popup > .popup > .popup__inner > .popup__body + .popup__util > ... 
        
        ! option
        popupType : modal, layer-bottom 
  -->
  <popupComponent
    popupType="layer-bottom"
    popupClass="pop01"
    popupContent="test01"
    @click="btnClosePopup('pop01')"
  />
</template>

<script setup>
import { ref } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import SwiperCore, { Mousewheel, A11y } from 'swiper'
import slideContent from '@/bchoi/layout/slideContentComponent.vue'
import slideInfo from '@/bchoi/layout/slideInfoComponent.vue'
import btnComponent from '@/bchoi/layout/btnComponent.vue'
import popupComponent from '@/bchoi/layout/popup.vue'
import 'swiper/swiper.scss'
SwiperCore.use([Mousewheel, A11y])

const btnEvent = ref([
  {
    type: 'video',
    title: '안녕하세요 이제 시작해주세요1',
    src: '/video/1.mp4',
    author: 'KKK',
    date: '2023-12-12',
    btn: [
      {
        btnType: 'icon',
        btnName: 'like',
        btnCnt: '0',
        isEvent: true,
      },
      {
        btnType: 'icon',
        btnName: 'comment',
        btnCnt: '0',
        isEvent: true,
      },
      {
        btnType: 'icon',
        btnName: 'share',
        btnCnt: '0',
        shareLink: 'https://swiperjs.com/',
        isEvent: true,
      },
    ],
  },
  {
    type: 'img',
    title: '안녕하세요 이제 시작해주세요2',
    src: '/src/assets/images/main/main02.jpg',
    author: 'KKK',
    date: '2023-12-13',
    btn: [
      {
        btnType: 'icon',
        btnName: 'like',
        btnCnt: '0',
        isEvent: true,
      },
      {
        btnType: 'icon',
        btnName: 'comment',
        btnCnt: '0',
        isEvent: true,
      },
      {
        btnType: 'icon',
        btnName: 'share',
        btnCnt: '0',
        shareLink: 'https://swiperjs.com/',
        isEvent: true,
      },
    ],
  },
  {
    type: 'video',
    title: '안녕하세요 이제 시작해주세요3',
    src: '/video/3.mp4',
    author: 'KKK',
    date: '2023-12-14',
    btn: [
      {
        btnType: 'icon',
        btnName: 'like',
        btnCnt: '0',
        event: 'likeEvent',
        isEvent: false,
      },
      {
        btnType: 'icon',
        btnName: 'comment',
        btnCnt: '0',
        isEvent: false,
      },
      {
        btnType: 'icon',
        btnName: 'share',
        btnCnt: '0',
        shareLink: 'https://swiperjs.com/',
        isEvent: false,
      },
    ],
  },
])

const btnRefLis = ref([])

const onSwiper = (swiper) => {
  console.log('onSwiper')
}
const onSlideChange = (swiper) => {
  console.log('slide change')
}

// dom 직접선택 X, ref([]) t/f 로 적용필요
function btnPopup(target) {
  const targetContainer = document.querySelector('.container--popup')
  const openTarget = targetContainer.querySelector('.' + target)

  targetContainer.classList.add('active')
  openTarget.classList.add('active')
}

function btnClosePopup(target) {
  const closeTarget = document.querySelector('.' + target)
  const targetContainer = document.querySelector('.container--popup')

  targetContainer.classList.remove('active')
  closeTarget.classList.remove('active')
}
</script>
<style lang="scss">
$desktop: 'min-width : 769px';
@media ($desktop) {
}
.container {
  &--slide {
    height: 100%;
  }
}
</style>
