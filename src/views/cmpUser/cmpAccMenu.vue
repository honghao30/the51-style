<template>
  <div class="content-wrap">
    <Title 
      :level="2" 
      pageTitle="아코디언 메뉴"
    />
    <div class="discription-text">
      아코디언 메뉴에 대한 가이드입니다.
    </div>
    <div style="padding: 50px 0;">
      <Accordion>
        <AccordionItem>

        </AccordionItem>
      </Accordion>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Title from "@/components/element/PageTitle.vue"
import Accordion from '@/components/accodiun/accordion.vue'
import AccordionItem from '@/components/accodiun/accordion-item.vue'


</script>

<style>

</style>