<template>
  <div :class="`container container--popup container--pop-${popupType}`">
    <div :class="`popup ${popupClass}`">
      <div class="popup__inner">
        <div class="popup__body">
          <p>{{ popupContent }}</p>
        </div>
        <div class="popup__util">
          <button class="popup__util__btn popup__util__btn--close">
            <span class="A11y">close</span>
          </button>
        </div>
      </div>
    </div>
    <div class="dim"></div>
  </div>
</template>
<script setup>
import { defineProps } from 'vue'
// import '@/assets/scss/common/index.scss'
const props = defineProps({
  popupType: {
    type: String,
    default: '',
  },
  popupClass: {
    type: String,
    default: '',
  },
  popupContent: {
    type: String,
    default: '',
  },
})
</script>

<style lang="scss">
$desktop: 'min-width : 769px';

.container {
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
      box-sizing: border-box;
      &.container--pop-modal {
        padding: 100px;
        .popup {
          max-height: 500px;
        }
      }
      &.container--pop-modal {
        padding: 50px;
        @media ($desktop) {
          padding: 200px;
        }
        .popup {
          max-height: 150px;
          @media ($desktop) {
            max-height: 200px;
          }
        }
      }
      &.container--pop-layer-bottom {
        padding: 100px 0 40px;
        align-items: flex-end;
        .popup {
          max-height: 200px;
          &__inner {
            border-bottom-left-radius: 0;
            border-bottom-right-radius: 0;
          }
        }
      }
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
        width: 100%;
        height: 100%;
      }
      &__inner {
        position: relative;
        padding: 35px;
        background: #fff;
        border-radius: 5px;
        width: 100%;
        height: 100%;
        @media ($desktop) {
          padding: 40px;
        }
      }
      &_body {
        p {
          text-wrap: wrap;
          word-break: break-word;
        }
      }
      &__util {
        &__btn {
          &--close {
            position: absolute;
            top: 11px;
            right: 11px;
            width: 15px;
            height: 15px;
            @media ($desktop) {
              top: 10px;
              right: 10px;
              width: 20px;
              height: 20px;
            }
            &::before {
              display: block;
              content: '';
              clear: both;
              width: 100%;
              height: 100%;
              background: url('/src/assets/images/icon/btn-pop-close.svg')
                center / contain no-repeat;
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
      }
    }
  }
}
</style>
