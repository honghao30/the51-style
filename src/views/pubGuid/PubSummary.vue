<template>
  <div class="content__wrap">
    <Title 
        :level="2" 
        pageTitle="개요"
    />
    <div class="wsg-guide-body">
      <table class="wsg-table-body">
        <caption><span class="irtext">프로젝트, 작업기간,가이드 작업자, 최종 수정일로 구성된 프로젝트 정보입니다.</span></caption>
        <colgroup>
          <col style="width:20%">
          <col>
        </colgroup>
        <tbody>
          <tr>
            <th scope="row">프로젝트</th>
            <td>프로젝트명</td>
          </tr>
          <tr>
            <th scope="row">작업기간</th>
            <td>202304 ~ 202310</td>
          </tr>
          <tr>
            <th scope="row">가이드 작업자</th>
            <td>홍성호(hongsh@the-51.com)</td>
          </tr>
          <tr>
            <th scope="row">최종 수정일</th>
            <td>20231023</td>
            </tr>
        </tbody>
      </table>
      <h3 class="wsg-guide-title">예외사항</h3>
      <ul class="wsg_desc">
        <li>퍼블리싱 가이드는 RBC UX/UI 리뉴얼 기준으로 작성되었으며 타 프로젝트의 코드 규칙을 담보하지 않습니다.</li>
        <li>해당 가이드의 일부 내용은 코드 균일성을 위한 표준 가이드를 제시하나 필요하지 않은 경우 해당 규칙을 사용하지 않습니다.</li>
      </ul>
    </div>

  </div>
</template>

<style lang="scss">
    .content__wrap {
      width: 98%;
      margin: 0 auto;
      padding: 50px 0;
    }
    .wsg-guide-body {margin-top: 30px;}
    .wsg-table-body {
        width: calc(100% + 2px); 
        table-layout: fixed; 
        border-top: 1px solid #96acbf;
        margin-bottom:20px;
        th {
            background-color: #f4f8fb;
            border-right: 1px solid #d9e3ea;
        }
        th,
        td
        {
            height: 50px; 
            vertical-align: middle; 
            text-align: left; 
            line-height: 13px; 
            font-size: 13px;         
            line-height: 1.5;
            border-bottom: 1px solid #d9e3ea;
            padding-left:20px;
            &:first-child,
            &:last-child {border-left: 0;}
        }
        th[rowspan], 
        td[rowspan] {
            border-right: 1px solid #d9e3ea;
        }
    }
</style>
