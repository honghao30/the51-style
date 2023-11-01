<template>
  <div class="tab-panel"
    role="tabpanel"
    v-show="isActive"
  >
    <slot></slot>
  </div>
</template>

<script setup>
import { defineProps, computed } from 'vue'

const props = defineProps({
  title: String,
  isNew: Boolean
})

const tabTitle = computed(() => props.title)
const tabIsNew = computed(() => props.isNew)
</script>
