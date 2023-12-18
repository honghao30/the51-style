<template>
  <div class="phone-container">
    <div class="phone">
      <div class="screen">
        <div class="video">
          <swipe :videos="videoList"></swipe>
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

<script setup>
import BaseButton from "@/baejh/components/BaseButton.vue";
import swipe from "@/baejh/components/Swipe.vue";
import videoList from "@/baejh/components/videoList.js";
import '@/assets/scss/baejh.scss';
import { ref } from 'vue';

const isLiked = ref(false);
const isDisabled = ref(false);

const handleToggle = (isActive) => {
  isLiked.value = isActive;
};
</script>