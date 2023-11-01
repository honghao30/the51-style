<template>
  <div class="content-wrap">
    <Title 
      :level="2" 
      pageTitle="탭 메뉴"
    />
    <div class="discription-text">
      탭 메뉴에 대한 가이드입니다.(작업중)
    </div>
    <TabCategory :category="category" :activeTab="0"/>
    <div style="padding: 50px 0;">
      <TabCmp>
        <TabItem title="Tab1">
          <div>Tab1 내용</div>
        </TabItem>
        <TabItem title="Tab2">
          <div>Tab2 내용</div>
        </TabItem>
        <TabItem title="Tab3">
          <div>Tab3 내용</div>
        </TabItem>
        <TabItem title="Tab4" :isNew="true">
          <div>Tab4 내용</div>
        </TabItem>
      </TabCmp>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Title from "@/components/element/PageTitle.vue"
import TabCmp from '@/components/tab/TabCmp.vue'
import TabItem from '@/components/tab/TabItem.vue'
import TabCategory from '@/components/tab/TabCategory.vue'

const currentTab = ref(0)
const category = ref([
  {
    code: 0,
    codeNm: 'tab1'
  },
  {
    code: 1,
    codeNm: 'tab2'
  },
  {
    code: 2,
    codeNm: 'tab3'
  }
])
</script>

<style>

</style>