<template>
  <ViewHero title="Prismic View" paragraph="Hier vind je al mijn experimenten"></ViewHero>
  <section class="container">
    <PrismicData></PrismicData>

    <PrismicData01></PrismicData01>
    <PrismicData02></PrismicData02>
    <PrismicData03></PrismicData03>
  </section>
</template>

<script>

import PrismicData from "@/lib/components/primsic/PrismicData.vue";
import ViewHero from "@/lib/components/hero/ViewHero.vue";
import PrismicData01 from "@/lib/components/primsic/PrismicData01.vue";
import PrismicData02 from "@/lib/components/primsic/PrismicData02.vue";
import PrismicData03 from "@/lib/components/primsic/PrismicData03.vue";


export default {
  name: 'PrismicView',
  components: {
    PrismicData03,
    PrismicData02,
    PrismicData01,
    ViewHero,
    PrismicData,
  },
}
</script>

<style>
.prismic__data{
  margin-top: 45px;
}
</style>