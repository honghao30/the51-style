<template>
    <ModalView
      v-model="isAuth" 
      @closeModal="isAuth = false"
      modalTitle="비밀번호 확인"
      modalSize="500"
    >
      <template #content>
        <div class="check-pwd">
          <input class="check__text" v-model="checkPwd"  @keyup.enter="clickPwd" placeholder="비번 입력 후 입장 가능합니다." />
          <Button
            types="btn-primary-line"
            size="medium"
            buttonName="확인"
            @click="clickPwd"
          />          
         </div>
      </template>       
    </ModalView> 

</template>

<script setup>
  import { ref } from 'vue'
  import guideKey from '@/utils/guideKey'
  import ModalView from "@/components/modal/ModalView.vue"
  import Button from "@/components/element/ButtonCmp.vue"
  import { useRoute, useRouter } from 'vue-router'

  const isAuth = ref(true)
  const checkPwd = ref('')

  const route = useRoute()
  const router = useRouter()

  const clickPwd = () => {
    if (checkPwd.value === guideKey) {
        router.replace({
            path: '/RullGuide',
            query: {
                [guideKey]: true,
            },
        })
    } else {
      alert('잘못된 비밀번호을 입력하셨습니다.')
    }
  }
</script>

<style lang="scss">
.check-pwd {
  display: flex;
  gap: 10px;
  .check__text {
    height: 33px;
    border: 1px solid #ccc;
    font-size: 15px;
    text-indent: 15px;    
    width: calc(100% - 100px);
  }
}
</style>