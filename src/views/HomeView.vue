<template>
  <HomeHero class="mb-5 "></HomeHero>

  <NieuwsComponent02></NieuwsComponent02>

  <NieuwsComponent class="mb-5"></NieuwsComponent>

  <RoosterComponent class="mb-5"></RoosterComponent>

  <ContactSection class="mb-5"></ContactSection>



</template>

<script>

import NieuwsComponent from "@/lib/components/nieuws/NieuwsComponent.vue";
import ContactSection from "@/lib/components/contact/ContactSection.vue";
import HomeHero from "@/lib/components/home/HomeHero.vue";
import RoosterComponent from "@/lib/components/rooster/RoosterComponent.vue";
import NieuwsComponent02 from "@/lib/components/nieuws/NieuwsComponent02.vue";

export default {
  name: "HomeView",
  components: {NieuwsComponent02, RoosterComponent, HomeHero, ContactSection, NieuwsComponent, }
}
</script>

<style scoped>

</style>