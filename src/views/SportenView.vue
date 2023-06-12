<template>
  <ViewHero title="Sporten" paragraph="Overzicht van alle sporten"></ViewHero>
  <sport-component></sport-component>
</template>

<script>
import ViewHero from "@/lib/components/hero/ViewHero.vue";
import SportComponent from "@/lib/components/sporten/SportCompoent.vue";

export default {
  name: "SportenView",
  components: {SportComponent, ViewHero}
}
</script>

<style scoped>

</style>