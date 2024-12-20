<template>
  <ViewHero :title="category" paragraph="infomratie over deze sport"></ViewHero>

<!--  <BreadCrubmsComponent></BreadCrubmsComponent>-->
  <!--   <pre v-html="JSON.stringify(response, null, 2)"></pre>-->

  <SportDetailSection :sportdata="sportData" :is-loading="isloading"></SportDetailSection>

  <RoosterComponent></RoosterComponent>
</template>

<script>
import ViewHero from "@/lib/components/hero/ViewHero.vue";
import RoosterComponent from "@/lib/components/rooster/RoosterComponent.vue";
// import BreadCrubmsComponent from "@/lib/components/breadcrums/BreadCrubmsComponent.vue";
import SportDetailSection from "@/lib/components/sporten/detail/SportDetailSection.vue";
import Prismic from "prismic-javascript";

export default {
  name: "SportenView",
  components: {SportDetailSection,
    // BreadCrubmsComponent,
    ViewHero, RoosterComponent},
  data() {
    return {
      response: null,
      sportData: [],
      isLoading: true,
    };
  },
  methods: {
    async fetchSporten() {
      try {
        const apiEndpoint = 'https://streeds-voorwaarts.cdn.prismic.io/api/v2';
        const api = await Prismic.api(apiEndpoint);
        const response = await api.query(
            [
              Prismic.Predicates.at('document.type', 'sporten'),
              Prismic.Predicates.at('my.sporten.uid', this.category)
            ]
        );
        this.sportData = response.results[0];
        console.log(this.category, this.sportData)
      } catch (error) {
        console.error('Error fetching data from Prismic:', error);
      } finally {
        this.isLoading = false;
      }
    },
  },
  computed: {
    category() {
      return this.$route.params.les; // haalt 'fysiogym' op
    }
  },
  mounted() {
    this.fetchSporten()
  },
}
</script>

<style scoped>
  
</style>