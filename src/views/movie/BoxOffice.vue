<template>
    <div class="content-wrap">
      <Title 
        :level="3" 
        pageTitle="영진위 영화 순위(주간)"
      />
      <div class="movie-rangking__wrap">
              <table class="table table-list">
                <caption><span class="ir-text">순위,영화명,개봉일,누적관객수,매출액으로 구성된 주간 박스 오피스</span></caption>
                <colgroup>
                  <col width="100" />
                  <col width="600" />
                  <col width="150" />
                  <col width="150" />
                  <col width="150" />
                </colgroup>
                <thead>
                  <tr>
                    <th scope="col">순위</th>
                    <th scope="col">영화명</th>
                    <th scope="col">개봉일</th>
                    <th scope="col">누적관객수</th>
                    <th scope="col">매출액</th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                  i v-for="movie in DailyRaingKing" :key="movie"
                  >
                   <td>{{ movie.rank }}</td>
                   <td>{{ movie.movieNm }}</td>
                   <td>{{ movie.openDt }}</td>
                   <td>{{ movie.audiAcc }}</td>
                   <td>{{ movie.salesAcc }}</td>
                  </tr>                                                                 
                </tbody>
              </table>                                                     
          </div>      
      <Title 
        :level="3" 
        pageTitle="영진위 영화 순위(일간)"
      />
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import Title from "@/components/element/PageTitle.vue"
import axios from 'axios';
import { dailyData, WeeklyData,ydate7 } from '@/assets/js/common.js';


const RankBaseUrl = 'http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice';
const Mykey = 'ff4677c1cc97ed619e2bb12bb03f9be5'

const getRanking = () => {
  const DailyRaingKing = ref([])
  const WeekRaingKing = ref([])

  const ranKing = async () => {
    axios
    .all([
        axios.get(`${RankBaseUrl}/searchDailyBoxOfficeList.json?key=${Mykey}&targetDt=${dailyData}`,),
        axios.get(`${RankBaseUrl}/searchWeeklyBoxOfficeList.json?key=${Mykey}&targetDt=${WeeklyData}`,)
        // ${WeeklyData}
    ])
    .then(
        axios.spread((res1,res2) => {
            console.log('1',res1.data);
            console.log('2',res2.data);
            res1.data.boxOfficeResult.dailyBoxOfficeList.forEach(result => {
                DailyRaingKing.value.push(result);
                console.log('데이터', DailyRaingKing)
            });
            console.log('데이터2', DailyRaingKing._rawValue)                          
        })
    )
    .catch(err => {
        console.log(err.message);
    });
  }
  ranKing ()
  return { DailyRaingKing, WeekRaingKing }
}

const { DailyRaingKing } = getRanking();

onMounted(() => {
  console.log('3333', DailyRaingKing._rawValue)
})
</script>

<style>

</style>