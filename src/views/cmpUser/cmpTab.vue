<template>
  <div class="content-wrap">
    <Title 
      :level="2" 
      pageTitle="탭 메뉴"
    />
    <div class="discription-text">
      탭 메뉴에 대한 가이드입니다.(작업)
    </div>
    <TabsCmp :tabs="tabsList" @handleClicked="updataSelected">
        <template #content>
          <components :is="curContent"></components>
        </template>
    </TabsCmp>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Title from "@/components/element/PageTitle.vue"
import TabsCmp from "@/components/tabs/TabCmp.vue"


const tabsList = ref([
  {
    title: 'tab1',
    icon: '',
    content: 'tab1'
  },
  {
    title: 'tab2',
    icon: '',
    content: 'tab2'
  },
  {
    title: 'tab3',
    icon: '',
    content: 'tab3'
  }
])
const selected = ref(0)
const curContent = ref('tab1')

const updataSelected = (index) => {
  selected.value = index
  curContent.value = tabsList.value[index].content
}

</script>

<style>

</style>