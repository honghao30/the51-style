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
          <!-- <div
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
          </div> -->
          <div
            class="btn-wrap__btn btn-wrap__btn--icon"
            v-if="item.usedBtnLike"
          >
            <btnComponent
              btnType="icon"
              btnName="like"
              btnCnt="1"
              isActive="true"
              @click="slideBtnClick(btnItem)"
            />
          </div>
          <div
            class="btn-wrap__btn btn-wrap__btn--icon"
            v-if="item.usedBtnComment"
          >
            <btnComponent
              btnType="icon"
              btnName="comment"
              btnCnt="0"
              isActive="false"
              @click="slideBtnClick(btnItem)"
            />
          </div>
          <div
            class="btn-wrap__btn btn-wrap__btn--icon"
            v-if="item.usedBtnShare"
          >
            <btnComponent
              btnType="icon"
              btnName="share"
              btnCnt="0"
              isActive="false"
              popupClass="shareLayer"
              @click="togglePopup"
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
        <btnComponent btnType="text" btnName="Home" />
      </div>
      <div class="btn-wrap__btn btn-wrap__btn--text">
        <btnComponent
          btnType="popup"
          btnName="Upload"
          :popupClass="pop01"
          @click="togglePopup"
        />
      </div>
      <div class="btn-wrap__btn btn-wrap__btn--text">
        <btnComponent btnType="text" btnName="My Page" />
      </div>
    </div>
  </div>
  <popupComponent
    popupType="layer-bottom"
    popupClass="shareLayer"
    popupContent="Update Click popup"
    :visible="isBottomPopupVisible"
    @close="closePopup"
    ref="popupRef"
  />
  <popupComponent
    popupType="modal"
    popupClass="pop02"
    popupContent="share link!"
    :visible="isPopupVisible"
    @close="closePopup"
    ref="popupRef"
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

// 1- 버튼수정 필요
// const slideItemData = ref([
//   {
//     type: 'video',
//     title: '안녕하세요 이제 시작해주세요1',
//     src: '/video/1.mp4',
//     author: 'KKK',
//     date: '2023-12-12',
//     btn: [
//       {
//         btnType: 'icon',
//         btnName: 'like',
//         btnCnt: '1',
//         isActive: true,
//       },
//       {
//         btnType: 'icon',
//         btnName: 'comment',
//         btnCnt: '0',
//         isActive: false,
//       },
//       {
//         btnType: 'icon',
//         btnName: 'share',
//         btnCnt: '0',
//         popupClass: 'shareLayer',
//         shareLink: 'https://github.com/honghao30/the51-style',
//         shareType: ['link', 'kakao'],
//         isActive: false,
//       },
//     ],
//   },
//   {
//     type: 'img',
//     title: '안녕하세요 이제 시작해주세요2',
//     src: '/src/assets/images/main/main02.jpg',
//     author: 'KKK',
//     date: '2023-12-13',
//     btn: [
//       {
//         btnType: 'icon',
//         btnName: 'like',
//         btnCnt: '1',
//         isActive: true,
//       },
//       {
//         btnType: 'icon',
//         btnName: 'comment',
//         btnCnt: '0',
//         isActive: true,
//       },
//       {
//         btnType: 'icon',
//         btnName: 'share',
//         btnCnt: '0',
//         popupClass: 'shareLayer',
//         shareLink: 'https://swiperjs.com/',
//         isActive: false,
//       },
//     ],
//   },
//   {
//     type: 'video',
//     title: '안녕하세요 이제 시작해주세요3',
//     src: '/video/3.mp4',
//     author: 'KKK',
//     date: '2023-12-14',
//     btn: [
//       {
//         btnType: 'icon',
//         btnName: 'like',
//         btnCnt: '0',
//         event: 'likeEvent',
//         isActive: false,
//       },
//       {
//         btnType: 'icon',
//         btnName: 'comment',
//         btnCnt: '0',
//         isActive: false,
//       },
//       {
//         btnType: 'icon',
//         btnName: 'share',
//         btnCnt: '0',
//         popupClass: 'shareLayer',
//         shareLink: 'https://swiperjs.com/',
//         isActive: false,
//       },
//     ],
//   },
// ])

const slideItemData = ref([
  {
    type: 'video',
    title: '안녕하세요 이제 시작해주세요1',
    src: '/video/1.mp4',
    author: 'KKK',
    date: '2023-12-12',
    usedBtnLike: true,
    usedBtnComment: true,
    usedBtnShare: true,
    likeCnt: 0,
    commentCnt: 0,
    shareCnt: 0,
  },
  {
    type: 'img',
    title: '안녕하세요 이제 시작해주세요2',
    src: '/src/assets/images/main/main02.jpg',
    author: 'KKK',
    date: '2023-12-13',
    usedBtnLike: true,
    usedBtnComment: true,
    usedBtnShare: true,
    likeCnt: 0,
    commentCnt: 0,
    shareCnt: 0,
  },
  {
    type: 'video',
    title: '안녕하세요 이제 시작해주세요3',
    src: '/video/3.mp4',
    author: 'KKK',
    date: '2023-12-14',
    usedBtnLike: true,
    usedBtnComment: true,
    usedBtnShare: true,
    likeCnt: 0,
    commentCnt: 0,
    shareCnt: 0,
  },
])

const isBottomPopupVisible = ref(false)
// const isPopupVisible = ref(false)

// 팝업 t/f 토글로 노출 비노출
const togglePopup = () => {
  isBottomPopupVisible.value = !isBottomPopupVisible.value
}

// 팝업 닫기
const closePopup = () => {
  isBottomPopupVisible.value = false
}

// 좋아요 버튼
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
