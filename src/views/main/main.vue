<template>
  <div class="main-guide">
      <h1>안내문</h1>
      <h2>기본 설치 사양</h2>
      <div class="description">
        <p>Vue3.3.4, vuetify : 3.4.0, element-plus: 2.4.1, swiper: 6.4.6</p>
        <p>Vue3 vite 를 권장이유: </p>
        <p>Vue3 Nuxt는 Router등 자동 셋팅되나 실제 프로젝트에서 Router 설정을 해야 하는 경우를 대비 해 Vue3 vite 버전을 권장 </p>
      </div>
      <h2>라이브러리?</h2>
      <div class="description">
        <p>vuetify, element-plus로 기본 레이아웃 구성은 잡을수 있다.</p>                 
      </div>     
      <h2>라우터</h2>
      <div class="description">
        <p>라우터에서 meta등을 설정해 다양하게 구현가능하나 1차의 목표는 페이지 생성시 라우터에서 추가하는것 까지 </p>  
        <p>*** meta를 설정하고 경우에 따라 다른 레이아웃 구현</p>               
      </div>                
      <h2>카테고리</h2>
      <div class="description">
        <p>전체 메뉴 카테고리는 /Layouts/components/gnb.js 에 있으며 import해서 사용하면 된다.</p>        
        <p>레이아웃을 만들때 gnb.js를 호출해 v-for등을 활용해 메뉴 구성를 할수 있다.</p>        
        <p>헤더,푸터등을 구현하고자 할때 /Layouts/ 에서 하면 된다.</p>  
      </div>  
      <h2>컴포넌트 설명</h2>
      <div class="description">
        <p><strong>타이틀 컴포넌트: </strong><br>
          h1~h6 태그로 구성된 페이지내 타이틀, 소제목등을 컴포넌트화 하는것,<br>
          props로 제목, 태그 레벨, 디스크립션 유무등 전달        
        </p>        
        <p>
          예) <br>
          pageTitle="전체 프롬스"<br>
          :level="3" - h1~h6태그 선택 <br>          
          alignType="center"<br>
        </p>
      </div>             
      <div class="description">
        <p><strong>버튼 컴포넌트: </strong><br>
          버튼 태그에 props로 크기, 색상,아이콘,버튼명을 전달하고 클릭 이벤트등을 부모 컴포넌트에 emit을 해야 한다. 
        </p>    
        <p>*** 아이콘이 있는 경우, 아이콘이 svg path인 경우 등</p>          
      </div>       
      <div class="description">
        <p><strong>input: </strong><br>
          input 을 컴포넌트로 구현 한다. 
        </p>               
        <p>input 컴포넌트는 text,password 타입을 정할수 있어야 한다.</p>
        <p>input 에 대한 안내문구 , 에러 메시지, label 혹은 title 로 기본 구성한다.</p>
        <p>*** 가능하면 유효성 체크를 해서 오류 시 에러문구 노출</p>
      </div>       
      <div class="description">
        <p><strong>select: </strong><br>
          select를 컴포넌트로 구현 한다. option 값을 배열로 전달한다.
        </p>                       
        <p>select 에 대한 안내문구, 에러 메시지, label 혹은 title 로 기본 구성한다.</p>
        <p>값이 바뀌였을때 변경된 value를 바인딩한다.</p>
        <p>***v-model,emit 등을 활용해볼수 있다.</p>  
      </div>        
      <div class="description">
        <p><strong>모달창 :  </strong><br>
          버튼 클릭시 모달창 호출/배경 딤처리, 윈도우 스크롤 막기 등 기능 구현,
        </p>               
        <p>모달창의 제목등은 props로 전달한다.</p>  
        <p>*** Teleport, slot등을 활용해볼수 있다.</p>  
      </div> 
      <div class="description">
        <p><strong>swiper :  </strong><br>
          swiper를 활용해 다양한 슬라이드 구현
        </p>               
        <p>*** swiper change 이벤트가 발생할때 애니메이션 효과 구현</p>                  
      </div>       
      <div class="description">
        <p><strong>스크롤 이벤트 :  </strong><br>
          window scroll 이벤트 발생시 헤더 고정 혹은 간단한 인터럭션 구현, 예) 스크롤 탑 버튼
        </p>               
        <p>mounted 등 활용할수 있다.</p>                  
      </div>                
      <div class="description">
        <p><strong>API 활용 :  </strong><br>
         무료 API를 활용해, ui구성
        </p>               
        <p>모달창의 제목등은 props로 전달한다.</p>          
        <p>/api 폴더 참고 && key값은 개인별 신청</p>     
      </div>        
      <h2>참고사항</h2>
      <h2>버전별 차이점</h2>
      <div class="description">
        <p>아래 블로그 링크 참고</p>                 
        <p>https://engineer-mole.tistory.com/419</p>            
        <p>https://mine-it-record.tistory.com/640</p>       
      </div>         
      <div class="description">
        created() {<br>
          // this.userInfo.userId =<br>
          // DOM이 만들어 지기 전 실행 되는 곳<br>
          // Data를 사전에 준비할 경우 사용된다.<br>
        },<br><br>
        mounted() {<br>
          // DOM에 해당 .vue가 들어가게 되면 실행 되는 곳<br>
          // onload 상태와 동일하다. DOM 이후에 조작할 경우 이곳에서 수행<br>
          this.getCorpInfo()<br>
        },<br><br>
        computed: {<br>
          // 값이 자주 변경됨에 따라, 관련되어 데이터 혹은 view가 바뀌어야 할 경우 사용<br>
          // method를 바로 연결하면 tic 단위로 계속 실행되기 때문에, 값이 변경할 때만 수행되고,<br>
          // cache로 남는 computed를 활용하는 것이 성능에 좋음<br>
          // authReqListFlag() {<br>
          //   return this.authReqListCheck<br>
          // },<br>
          // reqListFlag() {<br>
          //   return this.reqListCheck<br>
          // }<br>
        },​       
      </div>           
  </div>
</template>
<script setup>

</script>

<style lang="scss" scoped>
.main-guide {
  width: 100%;
  max-width: 1020px;
  margin: 0 auto;
  padding: 50px 0;
  h1 {
    font-size: 20px;
    font-weight: 700;
    text-align: center;
    line-height: 30px;
  }
  h2 {
    font-size: 16px;
    font-weight: 500;   
    margin: 20px 0 10px; 
  }
  .description {
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    &+.description {
      margin-top: 10px;
    }
  }
}
</style>