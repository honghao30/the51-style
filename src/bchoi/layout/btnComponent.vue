<template>
  <div :class="`btn-wrap__btn btn-wrap__btn--${btnType}`">
    <button href="#" :class="`btn btn-wrap__btn--${btnType}--${btnName}`">
      <span v-if="btnName" :class="`${!btnCnt ? 'btn-wrap__text' : 'A11y'}`">{{
        btnName
      }}</span>
    </button>
    <span v-if="btnCnt" class="btn-wrap__cnt">{{ btnCnt }} </span>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'
import { directive as vClickOutside } from 'click-outside-vue3'
import { reactive } from 'vue'
const props = defineProps({
  btnType: {
    type: String,
    default: '',
  },
  btnName: {
    type: String,
    default: '',
  },
  btnCnt: {
    type: String,
    default: '',
  },
  popId: {
    type: String,
    default: '',
  },
})
</script>
<style lang="scss">
$desktop: 'min-width : 769px';
.container {
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
  &--slide {
    .btn-wrap {
      position: absolute;
      right: 10px;
      bottom: 130px;
      z-index: 1;
      @media ($desktop) {
        right: 15px;
        bottom: 150px;
      }
      &__btn {
        position: relative;
        text-align: center;
        & + .btn-wrap__btn {
          margin-top: 15px;
          @media ($desktop) {
            margin-top: 30px;
          }
        }
        &--icon {
          display: block;
          .btn {
            display: block;
            width: 35px;
            height: 35px;
            @media ($desktop) {
              width: 50px;
              height: 50px;
            }
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
        }
      }
      &__cnt {
        font-size: 13px;
        font-weight: bold;
        color: #fff;
        @media ($desktop) {
          font-size: 15px;
        }
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
    background: rgba(0, 0, 0, 0.3);
    .btn-wrap {
      display: flex;
      justify-content: center;
      align-items: center;
      border-top: 1px solid #666;
      border-bottom: 1px solid #666;
      width: 100%;
      height: 100%;
      &__btn {
        width: 33.3%;
        height: 100%;
        text-align: center;
        button {
          width: 100%;
          height: 100%;
          .btn-wrap__text {
            display: block;
            padding: 5px 0;
            color: #fff;
          }
        }
      }
    }
  }
}
</style>
