<template>
  <div class="wrap">
    <nav-header />

    <div id="container">
      <Nuxt />
    </div>

    <fox-footer />
  </div>
</template>

<script>
import NavHeader from '@/components/NavHeader.vue';
import FoxFooter from '@/components/FoxFooter.vue';

export default {
  components: {
    NavHeader,
    FoxFooter
  }
}
</script>

<style>
#container {
  min-height: 70vh;
  margin-top: 150px;
}

h2 {
  color: #1F3995;
}

h5 {
  font-size: 1.2rem;
}

hr {
  background-color: #1F3995;
  height: 1px;
}

.icons {
  height: 32px;
}

.bold {
  font-weight: bold;   
}

@media screen and (max-width: 600px) {
  .m-5 {
    margin: 0 !important;
  }
}
</style>