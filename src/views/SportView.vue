<template>
  <ViewHero :title="formattedCategory" :paragraph="paragraphText"></ViewHero>

<!--  <BreadCrubmsComponent></BreadCrubmsComponent>-->


  <UpdatedSportDetailSection :sportdata="sportData" :is-loading="isloading"/>

  <RoosterComponent></RoosterComponent>
</template>

<script>
import ViewHero from "@/lib/components/hero/ViewHero.vue";
import RoosterComponent from "@/lib/components/rooster/RoosterComponent.vue";
// import BreadCrubmsComponent from "@/lib/components/breadcrums/BreadCrubmsComponent.vue";
import UpdatedSportDetailSection from "@/lib/components/sporten/detail/UpdatedSportDetailSection.vue";
import Prismic from "prismic-javascript";

export default {
  name: "SportenView",
  components: {UpdatedSportDetailSection,
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
      console.log('fetching sporten', this.fetchSporten)
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
        console.log(this.sportData.data.inleiding)
        console.log(this.sportData.data.inleiding[0].text)
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
      return this.$route.params.les;
    },
    formattedCategory() {
      if (!this.category) return '';
      return this.category.charAt(0).toUpperCase() + this.category.slice(1);
    },

    paragraphText() {
      return this.sportData.data?.inleiding?.[0]?.text || '';
    }
  },
  mounted() {
    this.fetchSporten()
  },
}
</script>

<style scoped>
  
</style>