<template>
  <div>
    <h5 class="mt-5 ml-5">성장단계: 1일차 방문</h5>
    <h1 class="text-center">
      오늘은 미호를 위해 어떤 활동을 할까요?
    </h1>
    <div class="row text-center m-5 p-5">
      <div class="col">
        <div>
          <img src="images/food.png" alt="food">
        </div>
        <h4 class="mt-5">음식</h4>
      </div>
      <div class="col">
        <div>
          <img src="images/drink.png" alt="drink">
        </div>
        <h4 class="mt-5">음료</h4>
      </div>
      <div class="col">
        <div>
          <img src="images/helth.png" alt="helth">
        </div>
        <h4 class="mt-5">운동</h4>
      </div>
      <div class="col">
        <div>
          <img src="images/hobby.png" alt="hobby">
        </div>
        <h4 class="mt-5">취미</h4>
      </div>
    </div>
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
h1 {
  margin: 125px 0;
}

.row {
  border: 5px #1F3995 solid;
  border-radius: 30px;
  margin-bottom: 200px !important;
}

h4 {
  color: #1F3995;
}
</style>