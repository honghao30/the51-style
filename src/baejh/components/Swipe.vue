<template>
  <div class="shots-slider">
    <swiper :options="swiperOptions" :direction="'vertical'" :loop=true>
      <swiper-slide v-for="(image, index) in images" :key="index">
        <img :src="image" alt="Slide {{ index + 1 }}">
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper';
// 이것도 오류나는데 찾아보고 있습니답~!
// import { Mousewheel } from 'swiper/modules'
import 'swiper/swiper.min.css'

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      images: [
        'https://via.placeholder.com/360X720',
        'https://via.placeholder.com/360X720',
        'https://via.placeholder.com/360X720',
      ],
      // 이 옵션이 안먹히는데.. 왜 안 먹히는지 모르겠습니다ㅠㅠ
      swiperOptions: {
        direction: 'vertical',
        loop: true,
      },
    };
  },
};
</script>

<style scoped>
.vertical-slider {
  width: 100%;
  height: 100%;
}
</style>
