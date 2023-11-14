import { useRouter } from 'vue-router'

export default function checkPwd() {
  const router = useRouter()
  const guideKey = '12345' // 비밀번호 키
  const enteredPwd = '' // 사용자가 입력한 비밀번호

  if (enteredPwd === guideKey) {
    // 비밀번호가 일치하는 경우
    router.push(router.history.pending) // 이전에 요청한 경로로 이동
  } else {
    // 비밀번호가 일치하지 않는 경우
    router.push('/checkPwd') // 다시 비밀번호 입력 페이지로 이동
  }
}