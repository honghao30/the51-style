<template>
  <div class="content-wrap">
    <Title 
      :level="2" 
      pageTitle="버튼 컴포넌트"
    />
    <div class="discription-text">
      버튼 컴포넌트에 대한 설명입니다.
    </div>

    <div style="text-align:center;padding: 50px 0;">
      
    </div>

  </div>
</template>

<script setup>
  import Title from "@/components/element/PageTitle.vue"
  // import Button from "@/components/element/ButtonCmp.vue"
</script>

<style lang="scss">
.discription-text {
  margin: 10px 0 30px;
  font-size: 15px;
}
</style>