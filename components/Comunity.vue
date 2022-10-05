<template>
  <div class="m-5 p-5">
    <h1 class="mb-4">Comunity</h1>
    <hr class="mb-5" />

    <image-section />

    <div class="text-center">
      <h5 class="mt-5 pt-5 mb-5">다양한 이야기들이 궁금하다면, 지금 가입하세요.</h5>

      <button type="button" class="btn btn-primary btn-lg">Go Discord</button>
    </div>
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
.btn-lg {
  background-color: #1F3995;
  width: 300px;
  border-radius: 30px;
}
</style>