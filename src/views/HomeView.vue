<template>
  <HomeHero class="mb-5"></HomeHero>

  <HomePar class="mb-5"></HomePar>
  

  <HomeLesaanbod></HomeLesaanbod>

  <RoosterComponent class="mb-5"></RoosterComponent>

  <UpdatedInformationSection />



</template>

<script>
import HomePar from "@/lib/components/home/HomePar.vue";

import HomeHero from "@/lib/components/home/HomeHero.vue";
import RoosterComponent from "@/lib/components/rooster/RoosterComponent.vue";
import HomeLesaanbod from "@/lib/components/home/HomeLesaanbod.vue";
import UpdatedInformationSection from "@/lib/components/contact/ContactInfromation/UpdatedInformationSection.vue";
// import NieuwsComponent from "@/lib/components/nieuws/NieuwsComponent.vue";

export default {
  name: "HomeView",
  components: {
    UpdatedInformationSection,
  HomePar, HomeLesaanbod, RoosterComponent, HomeHero,  },

}
</script>

<style scoped>

</style>