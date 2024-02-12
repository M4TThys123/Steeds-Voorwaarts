<template>
  <HomeHero class="mb-5 "></HomeHero>

  <section>
    <h2></h2>
    <p></p>
  </section>
  
  <NieuwsComponent class="mb-5"></NieuwsComponent>

  <RoosterComponent class="mb-5"></RoosterComponent>

  <ContactSection class="mb-5"></ContactSection>



</template>

<script>

import NieuwsComponent from "@/lib/components/nieuws/NieuwsComponent.vue";
import ContactSection from "@/lib/components/contact/ContactSection.vue";
import HomeHero from "@/lib/components/home/HomeHero.vue";
import RoosterComponent from "@/lib/components/rooster/RoosterComponent.vue";

export default {
  name: "HomeView",
  components: { RoosterComponent, HomeHero, ContactSection, NieuwsComponent, }
}
</script>

<style scoped>

</style>