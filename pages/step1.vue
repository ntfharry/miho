<template>
  <div class="text-center">
    <img src="images/step1.png" alt="step1" @click="$router.push('step2')">
  </div>
</template>

<script>
import TitleSection from '@/components/TitleSection.vue';
import Story from '@/components/Story.vue';
import HowToCare from '@/components/HowToCare.vue';
import WhatIsAttribute from '@/components/WhatIsAttribute.vue';
import WhatIsProperty from '@/components/WhatIsProperty.vue';
import Vision from '@/components/Vision.vue';
import Mision from '@/components/Mision.vue';
import Roadmap from '@/components/Roadmap.vue';
import Team from '@/components/Team.vue';
import Comunity from '@/components/Comunity.vue';

export default {
  components: {
    TitleSection,
    Story,
    HowToCare,
    WhatIsAttribute,
    WhatIsProperty,
    Vision,
    Mision,
    Roadmap,
    Team,
    Comunity
  }
}
</script>

<style scoped>
img {
  width: 100%;
  max-width: 1040px;
}
</style>