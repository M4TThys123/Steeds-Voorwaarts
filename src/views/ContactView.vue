<template>
  <view-hero title="Contact" paragraph=""></view-hero>



  <ContactSection class="mb-5"></ContactSection>
  <RoosterComponent class="mb-5"></RoosterComponent>
</template>

<script>
import ViewHero from "@/lib/components/hero/ViewHero.vue";
import ContactSection from "@/lib/components/contact/ContactSection.vue";
import RoosterComponent from "@/lib/components/rooster/RoosterComponent.vue";

export default {
  name: "ContactView",
  components: {RoosterComponent, ContactSection, ViewHero}
}
</script>

<style scoped>

</style>