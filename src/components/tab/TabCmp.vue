<template>
  <div class="tab__wrap"
  :class="[tabClass, size]"
  >
    <ul
      class="tab-list"
      role="tablist"
    >
      <li
        v-for="(tab, i) in tabs"
        :key=i
        class="tab-item"
        :class="[{active: activeIndex === i}, {new: tab.tabIsNew}]"
      >
        <a role="tab"
          @click="tabCtrl(i)"
        >
          <span>{{ tab.tabTitle }}</span>
        </a>
      </li>
    </ul>
    <div class="tab-contents">
      <slot></slot>
    </div>
  </div>
</template>

<script setup>
import { ref, watch, onMounted } from 'vue'

const props = defineProps({
  tabClass: String,
  activeIndex: {
    type: Number,
    default: 0
  },
  size: String
})

const tabs = ref([])

onMounted(() => {
  if (tabs.value.length > 0) {
    tabs.value[props.activeIndex].isActive = true
  }
})

watch(() => props.activeIndex, (newValue, oldValue) => {
  tabCtrl(newValue)
})

const tabCtrl = (num) => {
  props.activeIndex = num
  tabs.value.forEach((tab, index) => {
    tab.isActive = (index === props.activeIndex)
  })
}
</script>
