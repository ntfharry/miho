<template>
  <div class="m-5 p-5">
    <h1 class="mb-4">Team</h1>
    <hr class="mb-5" />

    <round-image-section />
    <round-image-section />
  </div>
</template>

<script>
import RoundImageSection from '@/components/RoundImageSection.vue';

export default {
  components: {
    RoundImageSection
  }
}
</script>