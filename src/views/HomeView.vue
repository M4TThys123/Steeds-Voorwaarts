<template>
  <HomeHero class="mb-5"></HomeHero>

  <HomePar class="mb-5"></HomePar>
  

  <HomeLesaanbod></HomeLesaanbod>

  <RoosterComponent class="mb-5"></RoosterComponent>

  <ContactSection class="mb-5"></ContactSection>

  <NieuwsComponent></NieuwsComponent>


</template>

<script>

import NieuwsComponent from "@/lib/components/nieuws/NieuwsComponent.vue";
import ContactSection from "@/lib/components/contact/ContactSection.vue";
import HomeHero from "@/lib/components/home/HomeHero.vue";
import RoosterComponent from "@/lib/components/rooster/RoosterComponent.vue";
import HomeLesaanbod from "@/lib/components/home/HomeLesaanbod.vue";
import HomePar from "@/lib/components/home/HomePar.vue";

export default {
  name: "HomeView",
  components: {HomePar, HomeLesaanbod, RoosterComponent, HomeHero, ContactSection, NieuwsComponent, },

}
</script>

<style scoped>

</style>