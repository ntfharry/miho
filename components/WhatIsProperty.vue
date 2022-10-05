<template>
  <div class="m-5 p-5">
    <h1 class="mb-4">What is property?</h1>
    <hr class="mb-5" />

    <h5 class="my-5">
      특성이란, Miho가 가지게 되는 배경, 옷, 아이템을 말합니다. 특성은 랜덤으로 주어지는데 사이트를 자주 방문할 수록 특성을 가질 확률이 높아져요.
    </h5>

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