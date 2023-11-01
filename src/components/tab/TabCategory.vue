<template>
  <div class="category-tab">
      <ul>
        <li
          v-show="allTabUseYn"
          :class="{active: activeTab === 'ALL' || activeTab === ''}"
        >
          <a role="button" @click="tabCtrl(-1, null)">전체</a>
        </li>
        <li
          v-for="(item, i) in category"
          :key="i"
          :class="[{active: activeTab === item.code}, {new: newTabList.includes(item.code)}]"
        >
          <a role="button" @click="tabCtrl(i, item)">{{ item.codeNm }}</a>
        </li>
      </ul>
    </div>
</template>

<script setup>
import { defineProps, ref, onMounted } from 'vue'

const props = defineProps({
  allTabUseYn: {
    type: Boolean,
    default: false
  },
  category: Array,
  activeTab: String,
  newTabList: {
    type: Array,
    default() {
      return []
    }
  }
})

const newTabIndex = ref(null)
const activeTabIndex = ref(null)

onMounted(() => {
  if (!newTabIndex.value) {
    newTabIndex.value = []
  }

  if (!activeTabIndex.value && props.allTabUseYn) {
    activeTabIndex.value = -1
  } else if (!activeTabIndex.value && !props.allTabUseYn) {
    activeTabIndex.value = 0
  }
})

const tabCtrl = (index, item) => {
  emit('click', index, item)
}
</script>  

<style>

</style>
