<template>
  <ViewHero title="Lesaanbod" paragraph="Hier vind je het lesaanbod van onze vereniging
"></ViewHero>

  <SportenSection>
<!--    /*data*/-->

  </SportenSection>

  <RoosterComponent></RoosterComponent>
</template>

<script>
import ViewHero from "@/lib/components/hero/ViewHero.vue";
import SportenSection from "@/lib/components/sporten/SportenSection.vue";
import RoosterComponent from "@/lib/components/rooster/RoosterComponent.vue";

export default {
  name: "LesAanbodView",
  components: {RoosterComponent, SportenSection, ViewHero}
}
</script>

<style scoped>
/*isLoaded: false,*/

/*fetch*/
/*data*/

/*finally*/
/*isLoaded: true,*/


</style>