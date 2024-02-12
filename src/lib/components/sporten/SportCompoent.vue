<template>
  <div class="container">
  <section class="sporten-overzicht row">
    <section class="sport col-md-6" v-for="sport in sporten" :key="sport.uid" id="  ">
      <figure class="image-wrapper">
        <PrismicImage :field="sport.data.image" />
      </figure>
      <section class="data-container">
        <div v-html="asHTML(sport.data.titel)"></div>

        <div v-html="asHTML(sport.data.inleiding)"></div>

        <div v-html="asHTML(sport.data.agenda_title)"></div>
        <div v-for="agenda in sport.data.agendas" :key="agenda.id">
          <div v-html="asHTML(agenda.agenda_content.text)">
          </div>-
        </div>


      </section>
    </section>
  </section>
  </div>
</template>

<script>
import {asHTML} from "@prismicio/helpers";
import Prismic from 'prismic-javascript';
import { PrismicImage } from '@prismicio/vue'

export default {
  name: "SportComponent",
  components: {
    PrismicImage
  },

  data() {
    return {
      sporten: [],
      isLoading: true,
    };
  },

  created() {
    this.fetchSporten();
  },

  methods:{
    async fetchSporten() {
      try {
        const apiEndpoint = 'https://streeds-voorwaarts.cdn.prismic.io/api/v2';
        const api = await Prismic.api(apiEndpoint);
        const response = await api.query(Prismic.Predicates.at('document.type', 'sporten'));

        this.sporten = response.results;
        console.log(this.sporten)
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