<template>
  <div :class="`btn-wrap__btn ${btnType}`">
    <button href="#" :class="`btn btn-wrap__btn--${btnType}`">
      <span :class="`btn-wrap__text ${btnCnt}`"
        >{{ btnName }} {{ btnCnt }}</span
      >
    </button>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'
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
<style lang="scss" scoped></style>
