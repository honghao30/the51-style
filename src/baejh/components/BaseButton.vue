<template>
  <button :class="computedClasses" @click="toggle">
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: "default", // 다양한 타입을 지원할 수 있습니다. 예: primary, secondary, danger 등
    },
    isActive: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    computedClasses() {
      return [
        'base-button',
        `base-button--${this.type}`,
        {
          'active': this.isActive,
        },
      ];
    },
  },
  methods: {
    toggle() {
      if (!this.disabled) {
        this.$emit('toggle', !this.isActive);
      }
    },
  },
};
</script>

<style scoped>
  .base-button {
    /* 기본 버튼 스타일 */
    padding: 16px;
    cursor: pointer;
    border: 0;
  }

  .base-button--like {
    /* 좋아요 버튼 */
    background: url(@/assets/icon/like-bf.svg) center / contain no-repeat;
    vertical-align: middle;
  }

  .base-button--like.active {
    /* 좋아요 버튼 활성 상태 */
    background: url(@/assets/icon/like-af.svg) center / contain no-repeat;
    vertical-align: middle;
  }

  .base-button--comments {
    /* 댓글 버튼 */
    background: url(@/assets/icon/comments.svg) center / contain no-repeat;
    vertical-align: middle;
  }

  .base-button--share {
    /* 공유 버튼 */
    background: url(@/assets/icon/share.svg) center / contain no-repeat;
    vertical-align: middle;
  }

/* 네비게이션 */
  .base-button--home {
    /* 홈 버튼 */
    background: url(@/assets/icon/home.svg) center / contain no-repeat;
    vertical-align: middle;
  }
  .base-button--shots {
    /* 숏츠 버튼 */
    background: url(@/assets/icon/shots.svg) center / contain no-repeat;
    vertical-align: middle;
  }
  .base-button--plus {
    /* 더보기 버튼 */
    background: url(@/assets/icon/plus.svg) center / contain no-repeat;
    vertical-align: middle;
  }
  .base-button--subscriptions {
    /* 구독 버튼 */
    background: url(@/assets/icon/subscriptions.svg) center / contain no-repeat;
    vertical-align: middle;
  }
  .base-button--library {
    /* 라이브러리 버튼 */
    background: url(@/assets/icon/library.svg) center / contain no-repeat;
    vertical-align: middle;
  }
</style>