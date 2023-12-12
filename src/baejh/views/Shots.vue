<template>
  <div class="phone-container">
    <div class="phone">
      <div class="screen">
        <div class="video">
          <swipe></swipe>
        </div>
      <div class="button-bar">
        <base-button type="like" :is-active="isLiked" @toggle="handleToggle"></base-button>
        <base-button type="comments"></base-button>
        <base-button type="share"></base-button>
      </div>
      </div>
      <div class="navigation-bar">
        <base-button type="home"></base-button>
        <base-button type="shots"></base-button>
        <base-button type="plus"></base-button>
        <base-button type="subscriptions"></base-button>
        <base-button type="library"></base-button>
      </div>
    </div>
  </div>
</template>

<script>
import BaseButton from "@/baejh/components/BaseButton.vue";
import swipe from "@/baejh/components/Swipe.vue";
import '@/assets/scss/baejh.scss'

export default {
  components: {
    BaseButton,
    swipe
  },
  data() {
    return {
      isLiked: false,
      isDisabled: false, // 비활성화 여부를 원하는 대로 설정하세요
    };
  },
  methods: {
    handleToggle(isActive) {
      this.isLiked = isActive;
    },
  },
};
</script>