<template>
  <section class="sporten-overzicht">
    <section class="sport">
      <figure class="image-wrapper">
<!--        <PrismicImage :field="sport.data.image" />-->
      </figure>
      <section class="data-container">
<!--        <div class="title-field"-->
<!--&lt;!&ndash;             v-html="asHTML(sport.data.titel)">&ndash;&gt;-->
<!--        </div>-->

      </section>
    </section>
  </section>
</template>

<script>
import {asHTML} from "@prismicio/helpers";
import Prismic from 'prismic-javascript';
// import { PrismicImage } from '@prismicio/vue'

export default {
  name: "SportComponent",
  components: {
    // PrismicImage
  },

  methods:{
    async fetchSporten() {
      try {
        const apiEndpoint = 'https://streeds-voorwaarts.cdn.prismic.io/api/v2';
        const api = await Prismic.api(apiEndpoint);
        const response = await api.query(Prismic.Predicates.at('document.type', 'sporten'));

        this.sporten = response.results;
        this.isLoading = false;
      } catch (error) {
        console.error('Error fetching data from Prismic:', error);
      }
    },
    asHTML,
  }
}
</script>

<style scoped>

</style>