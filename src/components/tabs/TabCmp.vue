<template>
  <div class="tab__wrap">
    <ul
      class="tab-list"
      role="tablist"
    >
      <li        
        class="tab-item"    
        v-for="(tab, index) in tabs"
        :key="index"    
        :class="['tab', selected === index && ' active']"    
        @click="handleSelected(index)"             
      >
          <span>
            {{ tab.title }}
          </span>
      </li>
    </ul>
    <div class="tab-contents">
      <slot name="tabCont"></slot>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { defineProps, defineEmits } from 'vue'

const props = defineProps({
  tabs: {
    type: Array,
    required: true
  },
  selected: {
    type: Number,
    default: 0
  }
})
const emit = defineEmits(['click: handleSelected(index)'])
const handleSelected = (index) => {  
  emit('click:handleSelected', index)
  console.log(handleSelected)
};
</script>
