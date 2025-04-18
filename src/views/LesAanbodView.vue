<template>
  <ViewHero :pageLoaded="pageLoaded" title="Lesaanbod" paragraph="Hier vind je het lesaanbod van onze vereniging
"></ViewHero>

<!---->


  <HomeLesaanbod />




  <RoosterComponent></RoosterComponent>
</template>

<script>
import ViewHero from "@/lib/components/hero/ViewHero.vue";
import RoosterComponent from "@/lib/components/rooster/RoosterComponent.vue";
import Prismic from "prismic-javascript";
import HomeLesaanbod from "@/lib/components/home/HomeLesaanbod.vue";

export default {
  name: "LesAanbodView",
  components: {HomeLesaanbod, RoosterComponent, ViewHero},
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