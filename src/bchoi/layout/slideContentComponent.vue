<template>
  <img
    v-if="type === 'img'"
    :class="`mySwiper__type-${type}`"
    :src="src"
    :alt="title"
    :key="title"
  />
  <iframe
    v-if="type === 'iframe'"
    :class="`mySwiper__type-${type}`"
    width="100%"
    height="100%"
    :src="`https://www.youtube.com/embed/${src}?autoplay=1`"
    title="YouTube video player"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen
  />
  <video
    v-if="type === 'video'"
    controls
    autoplay
    muted
    playsinline
    loop="loop"
    :class="`mySwiper__type-${type}`"
  >
    <source :src="src" type="video/webm" />
  </video>
</template>
<script setup>
import { defineProps } from 'vue'
const props = defineProps({
  type: {
    type: String,
    default: '',
  },
  src: {
    type: String,
    default: '',
  },
  title: {
    type: String,
    default: '',
  },
})
</script>
<style lang="scss">
.container {
  &--slide {
    .mySwiper {
      height: 100%;
      &__type-img {
        width: 100%;
        height: 100%;
      }
      &__type-iframe {
        width: 100%;
      }
      &__type-video {
        width: 100%;
        height: 100vh;
        object-fit: fill;
      }
    }
  }
}
</style>
