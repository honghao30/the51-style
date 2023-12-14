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
        <img :src="item.src" :alt="item.title" :key="item.title" />
        <iframe
          v-if="item.type === 'iframe'"
          width="100%"
          height="100%"
          :src="`https://www.youtube.com/embed/${item.src}?autoplay=1`"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        />
        <!-- video case -->
        <div class="btn-wrap">
          <!-- <iconButton
            v-for="(btnItem, index) in item.btn"
            :key="slideBtn"
            :class="btnItem"
            :like="btnItem.like"
            :cnt="btnItem.cnt"
            :comment="btnItem.comment"
            :share="btnItem.share"
            :thema="btnItem.active"
          ></iconButton> -->
          <div
            :class="`btn-wrap__btn btn-wrap__btn--${btnItem.type}`"
            v-for="(btnItem, index) in item.btn"
          >
            <button
              :class="`btn btn-wrap__btn--${btnItem.type}--${btnItem.name} ${
                btnItem.isActive ? `btn-wrap__btn--isActive` : ``
              }`"
              @click="btnIsActive(btnItem.isActive, btnItem.cnt)"
            >
              <span class="A11y">{{ btnItem.name }}</span>
            </button>
            <span class="btn-wrap__cnt">{{ btnItem.cnt }}</span>
          </div>
        </div>
        <div class="slide-info">
          <div class="slide-info__inner">
            <div class="slide-info__text-box">
              <span class="slide-info__text slide-info__text--title">{{
                item.title
              }}</span>
            </div>
            <div class="slide-info__util-box">
              <span class="slide-info__text slide-info__text--author">{{
                item.author
              }}</span>
              <span class="slide-info__text slide-info__text--date">{{
                item.date
              }}</span>
            </div>
          </div>
        </div>
      </swiper-slide>
    </swiper>
  </div>
  <div class="container container--bottom-util">
    <div class="btn-wrap">
      <!-- <My-btn btnType="btn-text-default" btnName="홈" @click="goHeme"> </My-btn>
      <My-btn btnType="iconOnly" btnName="업로드" iconNme="icon-heart">
        <template #svgicon> </template>
      </My-btn>
      <My-btn btnType="iconOnly" btnName="마이페이지" iconNme="icon-heart">
        <template #svgicon> </template>
      </My-btn> -->
      <btnComponent
        btnType="text"
        btnName="Home"
        btnTag="button"
      ></btnComponent>
      <btnComponent
        btnType="popup"
        btnName="Upload"
        btnTag="button"
        popId="#pop1"
      ></btnComponent>
      <btnComponent
        btnType="text"
        btnName="My Page"
        btnTag="button"
      ></btnComponent>
      <!--       
      <div
        :class="`${
          bottomUtilBtn[0].href
            ? 'btn-wrap__btn btn-wrap__btn--popup'
            : 'btn-wrap__btn'
        }`"
      >
        <a href="#" class="btn btn-wrap__btn--text">
          <span class="">Home</span>
        </a>
      </div>
      <div
        :class="`${
          bottomUtilBtn[1].href
            ? 'btn-wrap__btn btn-wrap__btn--popup'
            : 'btn-wrap__btn'
        }`"
      >
        <button
          :data-href="bottomUtilBtn[1].href"
          class="btn btn-wrap__btn--text btn-wrap__btn--popup"
          @click="btnPopup(bottomUtilBtn[1].href)"
        >
          <span class="">Upload</span>
        </button>
      </div>
      <div
        :class="`${
          bottomUtilBtn[2].href
            ? 'btn-wrap__btn btn-wrap__btn--popup'
            : 'btn-wrap__btn'
        }`"
      >
        <button class="btn btn-wrap__btn--text">
          <span class="">My Page</span>
        </button>
      </div> -->
    </div>
  </div>
  <div class="container container--popup">
    <div :class="`popup ${popupAll[0].popupType}`" id="pop1">
      <div class="popup__inner">
        <div class="popup__body">
          <p>test popup #pop1</p>
        </div>
        <div class="popup__util">
          <button
            class="popup__util__btn popup__util__btn--close"
            @click="btnCloasePopup(bottomUtilBtn.href)"
          >
            <span class="A11y">close</span>
          </button>
        </div>
      </div>
    </div>
    <div class="dim"></div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed, defineComponent, reactive } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import SwiperCore, { Mousewheel, A11y } from 'swiper'
import 'swiper/swiper.scss'
import btnComponent from '@/bchoi/layout/iconBtn.vue'

SwiperCore.use([Mousewheel, A11y])
const slideItemData = ref([
  {
    type: 'img',
    title: '안녕하세요 이제 시작해주세요1',
    src: '/src/assets/images/main/main01.jpg',
    author: 'KKK',
    date: '2023-12-12',
    btn: [
      {
        type: 'icon',
        name: 'like',
        tag: 'button',
        cnt: '0',
        isActive: false,
      },
      {
        type: 'icon',
        name: 'comment',
        tag: 'button',
        cnt: '0',
      },
      {
        type: 'icon',
        name: 'share',
        tag: 'button',
        cnt: '0',
        shareLink: 'https://swiperjs.com/',
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
        type: 'icon',
        name: 'like',
        tag: 'button',
        cnt: '0',
        isActive: false,
      },
      {
        type: 'icon',
        name: 'comment',
        tag: 'button',
        cnt: '0',
      },
      {
        type: 'icon',
        name: 'share',
        tag: 'button',
        cnt: '0',
        shareLink: 'https://swiperjs.com/',
      },
    ],
  },
  {
    type: 'img',
    title: '안녕하세요 이제 시작해주세요3',
    src: '/src/assets/images/main/main03.jpg',
    author: 'KKK',
    date: '2023-12-14',
    btn: [
      {
        type: 'icon',
        name: 'like',
        tag: 'button',
        cnt: '0',
        isActive: false,
      },
      {
        type: 'icon',
        name: 'comment',
        tag: 'button',
        cnt: '0',
      },
      {
        type: 'icon',
        name: 'share',
        tag: 'button',
        cnt: '0',
        shareLink: 'https://swiperjs.com/',
      },
    ],
  },
])

const bottomUtilBtn = ref([
  {
    btnName: 'home',
  },
  {
    btnName: 'upload',
    href: '#pop1',
    popupType: 'modal',
  },
  {
    btnName: 'MyPage',
  },
])

const popupAll = ref([
  {
    popupType: 'modal',
    popupName: 'pop01',
  },
])

const onSwiper = (swiper) => {
  console.log('onSwiper')
}
const onSlideChange = (swiper) => {
  console.log('slide change')
  //   players[mySwiper.previousIndex].pauseVideo()
}

function btnIsActive(isActive, cnt) {
  // isActive -> click -> cnt -1
  // x -> click -> cnt +1
  console.log('click')
  console.log(isActive, cnt)
  if (isActive == true) {
    console.log('isActive true', 'cnt = ', cnt)
    cnt--
    console.log('cnt', cnt)
    isActive === false
    return isActive
  } else {
    console.log('isActive false', 'cnt = ', cnt)
    cnt++
    console.log('cnt', cnt)
    isActive === true
    return isActive
  }
}

function btnPopup(href) {
  const popupId = document.querySelector(href)
  const popupContainer = popupId.closest('.container--popup')
  popupContainer.classList.add('active')
  popupId.classList.add('active')
}

function btnCloasePopup(href) {
  console.log('close', href)
}
</script>
<style lang="scss">
.container {
  &--slide {
    height: 100%;
    .mySwiper {
      height: 100%;
      .swiper-slide {
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
    .btn-wrap {
      position: absolute;
      right: 15px;
      bottom: 150px;
      z-index: 1;
      &__btn {
        position: relative;
        text-align: center;
        & + .btn-wrap__btn {
          margin-top: 30px;
        }
        &--icon {
          display: block;
          .btn {
            display: block;
            width: 50px;
            height: 50px;
            &:before {
              display: block;
              content: '';
              clear: both;
              width: 100%;
              height: 100%;
            }
          }

          &--like {
            &::before {
              background: url('/src/assets/images/icon/btn-icon-like.svg')
                center / contain no-repeat;
            }
            &.btn-wrap__btn--isActive {
              background: url('/src/assets/images/icon/btn-icon-like-fill.svg')
                center / contain no-repeat;
            }
          }
          &--comment {
            &::before {
              background: url('/src/assets/images/icon/btn-icon-comment.svg')
                center / contain no-repeat;
            }
          }
          &--share {
            &::before {
              background: url('/src/assets/images/icon/btn-icon-share.svg')
                center / contain no-repeat;
            }
          }
          .A11y {
            overflow: hidden;
            clip: rect(0, 0, 0, 0);
            position: absolute;
            width: 1px;
            height: 1px;
            margin: -1px;
            border: 0;
            padding: 0;
            color: #fff;
            background-color: rgb(0, 0, 0);
          }
        }
      }
      &__cnt {
        font-size: 15px;
        font-weight: bold;
        color: #fff;
      }
    }
    .slide-info {
      position: absolute;
      left: 0;
      bottom: 0;
      background: rgba(0, 0, 0, 0.5);
      box-sizing: border-box;
      width: 100%;
      &__inner {
        padding: 20px 10px 50px;
      }
      &__util-box {
        display: flex;
        justify-content: flex-start;
        flex-wrap: wrap;
        column-gap: 10px;

        .slide-info__text + .slide-info__text {
          &:before {
            display: inline-block;
            content: '';
            clear: both;
            margin-right: 10px;
            width: 1px;
            height: 10px;
            background: #fff;
          }
        }
      }
      &__text {
        color: #fff;
        font-size: 15px;
      }
    }
  }
  &--bottom-util {
    position: fixed;
    left: 50%;
    bottom: 0;
    transform: translateX(-50%);
    z-index: 1;
    width: 100%;
    max-width: 750px;
    height: 40px;
    box-sizing: border-box;
    .btn-wrap {
      display: flex;
      justify-content: center;
      align-items: center;
      background: rgba(0, 0, 0, 0.5);
      border-top: 1px solid #666;
      border-bottom: 1px solid #666;
      &__btn {
        width: 33.3%;
        text-align: center;
        &--text {
          span {
            display: block;
            padding: 5px 0;
            color: #fff;
          }
        }
      }
    }
  }
  &--popup {
    display: none;
    .dim {
      display: none;
    }
    &.active {
      position: fixed;
      left: 50%;
      top: 0;
      transform: translateX(-50%);
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      max-width: 750px;
      height: 100%;
      z-index: 1;
      .dim {
        display: block;
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.5);
      }
    }
    .popup {
      display: none;
      &.active {
        display: block;
        z-index: 1;
      }
      &__inner {
        position: relative;
        padding: 20px;
        background: #fff;
        border-radius: 5px;
      }
    }
  }
}
</style>
