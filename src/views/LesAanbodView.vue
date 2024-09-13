<template>
  <ViewHero :pageLoaded="pageLoaded" title="Lesaanbod" paragraph="Hier vind je het lesaanbod van onze vereniging
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
import Prismic from "prismic-javascript";

export default {
  name: "LesAanbodView",
  components: {RoosterComponent, SportenSection, ViewHero},
  data() {
    return {
      pageLoaded: false,
      sporten: [],
    };
  },
  methods: {
    async fetchAllSporten() {
      try {
        const apiEndpoint = 'https://streeds-voorwaarts.cdn.prismic.io/api/v2';
        const api = await Prismic.api(apiEndpoint);
        const response = await api.query(Prismic.Predicates.at('document.type', 'sporten'));

        this.sporten = response.results;
        console.log(this.sporten)
        console.log(this.sporten.data.titel)
      } catch (error) {
        console.error('Error fetching data from Prismic:', error);
      } finally {
        this.pageLoaded = false;
      }
    },
  },
  created() {
    this.fetchAllSporten();
  },
}
</script>

<style scoped>
/*isLoaded: false,*/

/*fetch*/
/*data*/

/*finally*/
/*isLoaded: true,*/


</style>