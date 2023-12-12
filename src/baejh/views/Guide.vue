<template>
  <div>
    <base-button type="like" :is-active="isLiked" @toggle="handleToggle"></base-button>
    <base-button type="comments"></base-button>
    <base-button type="share"></base-button>
  </div>
</template>

<script>
import BaseButton from "@/baejh/components/BaseButton.vue";

export default {
  components: {
    BaseButton,
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
<style scoped>
  div {
    background-color: gray;
    padding: 10px;
    display: flex;
    gap: 10px;
  }
</style>