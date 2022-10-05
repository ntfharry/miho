<template>
  <div>
    <title-section />
    <story id="story" />
    <how-to-care id="howto" />
    <what-is-attribute />
    <what-is-property />
    <vision id="vision" />
    <mision />
    <roadmap id="roadmap" />
    <team id="team" />
    <comunity id="comunity" />
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
