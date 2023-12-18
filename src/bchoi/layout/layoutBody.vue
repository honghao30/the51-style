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
          <!-- <btnComponent
            v-for="btnItem in item.btn"
            :btnType="btnItem.btnType"
            :btnName="btnItem.btnName"
            :btnCnt="btnItem.btnCnt"
            :isActive="btnItem.isActive"
            :ref="btnItem.isActive"
            @click="slideBtnClick(btnItem)"
          /> -->
          <div
            v-for="btnItem in item.btn"
            :class="`btn-wrap__btn btn-wrap__btn--${btnItem.btnType}`"
          >
            <btnComponent
              :btnType="btnItem.btnType"
              :btnName="btnItem.btnName"
              :btnCnt="btnItem.btnCnt"
              :isActive="btnItem.isActive"
              @click="slideBtnClick(btnItem)"
            />
          </div>
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
      <div class="btn-wrap__btn btn-wrap__btn--text">
        <btnComponent btnType="text" btnName="Home" :ref="false" />
      </div>
      <div class="btn-wrap__btn btn-wrap__btn--text">
        <btnComponent
          btnType="popup"
          btnName="Upload"
          :popupClass="pop01"
          @click="isPopup"
          :ref="false"
        />
      </div>
      <div class="btn-wrap__btn btn-wrap__btn--text">
        <btnComponent btnType="text" btnName="My Page" :ref="false" />
      </div>
    </div>
  </div>
  <popupComponent
    popupType="layer-bottom"
    popupClass="pop01"
    popupContent="Update Click popup"
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

const test = ref([])
console.log('test', test)
console.log('test value', test.value)

// if (test.value == false) {
//   console.log('test.value : false')
//   test.value = true
// } else {
//   console.log('test.value : true')
//   test.value = false
// }

const isPopup = () => {
  console.log('test:', test)
  if (test == true) {
    test.value = false
    console.log('test:', test.value)
  } else {
    test.value = true
    console.log('test:', test.value)
  }
}
// clickBtnTest()

const slideItemData = ref([
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
        btnCnt: '1',
        isActive: true,
      },
      {
        btnType: 'icon',
        btnName: 'comment',
        btnCnt: '0',
        isActive: false,
      },
      {
        btnType: 'icon',
        btnName: 'share',
        btnCnt: '0',
        popupClass: 'shareLayer',
        shareLink: 'https://github.com/honghao30/the51-style',
        shareType: ['link', 'kakao'],
        isActive: false,
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
        btnCnt: '1',
        isActive: true,
      },
      {
        btnType: 'icon',
        btnName: 'comment',
        btnCnt: '0',
        isActive: true,
      },
      {
        btnType: 'icon',
        btnName: 'share',
        btnCnt: '0',
        popupClass: 'shareLayer',
        shareLink: 'https://swiperjs.com/',
        isActive: false,
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
        isActive: false,
      },
      {
        btnType: 'icon',
        btnName: 'comment',
        btnCnt: '0',
        isActive: false,
      },
      {
        btnType: 'icon',
        btnName: 'share',
        btnCnt: '0',
        popupClass: 'shareLayer',
        shareLink: 'https://swiperjs.com/',
        isActive: false,
      },
    ],
  },
])

function slideBtnClick(target) {
  // toggle
  console.log('slideBtnClick')
  if (target.btnName == 'like') {
    console.log('btn target:', target.btnName)
    if (target.isActive == true) {
      target.isActive = false
      target.btnCnt--
      if (target.btnCnt < 1 || target.isActive == false) {
        target.btnCnt = 0
      }
    } else {
      target.isActive = true
      target.btnCnt++
    }
  } else if (target.btnName == 'comment') {
    console.log('btn target:', target.btnName)
    // layer popup - comment
  } else if (target.btnName == 'share') {
    target.isActive = true
    // shareLayer(target)
    let btnShareLink = target.shareLink
    navigator.clipboard.writeText(btnShareLink).then(() => {
      alert('주소가 복사되었습니다!')
      console.log(btnShareLink)
    })
  }
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
