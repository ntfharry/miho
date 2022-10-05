<template>
  <div class="m-5 p-5">
    <h1 class="mb-4">How to care</h1>
    <hr class="mb-5" />

    <h5 class="tit">1. 반려여우를 분양해주세요.</h5>

    <h5 class="tit">2. 아기 여우로 성장 시켜주세요.</h5>
    <h5>1) 3일간 공식 사이트에 접속합니다.</h5>
    <h5>2) 퀴즈를 풉니다.</h5>
    <h5>3) 꼬리 하나의 흰 여우로 성장합니다.</h5>

    <h5 class="tit">3. 사랑으로 키운 여우에게 속성이 생깁니다.</h5>
    <h5>1) 8일간 공식 사이트에 접속합니다.</h5>
    <h5>2) 퀴즈를 풉니다.</h5>
    <h5>3) 꼬리 9개를 가진 색상이 있는 여우로 성장합니다.</h5>
    
    <h5 class="tit">4. 성장한 여우의 훈련으로 특성이 생깁니다.</h5>
    <h5>1) 3일간 공식 사이트에 접속합니다.</h5>
    <h5>2) 특정 미션을 수행합니다.</h5>
    <h5>3) 랜덤으로 특성이 생성됩니다.</h5>

    <h5 class="tit">5. 속성과 특성을 가진 여우는 부족을 알 수 있어요. 부족을 받으면 부족 확인 후 커뮤니티에 가입 할 수 있습니다.</h5>

    <image-section />
    <image-section />
  </div>
</template>

<script>
import ImageSection from '@/components/ImageSection.vue';

export default {
  components: {
    ImageSection
  }
}
</script>

<style scoped>
h5.tit {
    margin-top: 2rem;
    margin-left: 0;
}

h5 {
    margin-left: 2rem;
}
</style>