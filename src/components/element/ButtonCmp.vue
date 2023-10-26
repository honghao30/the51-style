<template>
  <button
    type="button"
    class="btn"
    :class="[types, size]"
    :disabled="disabled"
    @click="$emit('click')"
    @mousedown="$emit('mousedown')"
  >
    <i
      v-if="iconName !== ''"
      :class="iconName"    
    ></i>
    {{ buttonName }}
    <!-- <slot></slot> -->
  </button>
</template>

<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  buttonName: {
    type: String,
    default: '버튼명 미지정'
  },
  types: {
    type: String,
    default: ''
  },
  size: {
    type: String,
    default: ''
  },
  iconName: {
    type: String,
    default: ''
  }
})
</script>