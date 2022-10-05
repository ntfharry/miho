<template>
  <div class="m-5 p-5">
    <h1 class="mb-4">What is attribute?</h1>
    <hr class="mb-5" />

    <h5 class="my-5">
        속성이란, Miho의 성격을 결정짓는 것을 말합니다. Miho의 속성에는 화, 수, 목, 금, 토 5가지의 속성이 존재해요. 속성은 Miho를 기르는 주인에 따라 달라진답니다. 당신의 Miho는 어떤 속성을 가지게 될까요?
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