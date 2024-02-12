<template>
  <ViewHero title="Lesaanbod" paragraph="Hier vind je het lesaanbod van onze vereniging
"></ViewHero>

  <sport-component></sport-component>

  <RoosterComponent></RoosterComponent>
</template>

<script>
import ViewHero from "@/lib/components/hero/ViewHero.vue";
import SportComponent from "@/lib/components/sporten/SportCompoent.vue";
import RoosterComponent from "@/lib/components/rooster/RoosterComponent.vue";

export default {
  name: "LesAanbodView",
  components: {RoosterComponent, SportComponent, ViewHero}
}
</script>

<style scoped>

</style>