<template>
  <div class="container">
  <section class="sporten-overzicht row">
    <template v-if="!isLoading">
      <section  class="sport col-md-6" v-for="sport in sporten" :key="sport.uid" id="  ">
      <figure class="image-wrapper">
        <PrismicImage :field="sport.data.image"  @load="onImageLoaded" />
<!--        <div class="aspect-ratio-box">-->
<!--          <v-skeleton-loader type="image"></v-skeleton-loader>-->
<!--        </div>-->
      </figure>
      <section class="data-container">
        <div v-html="asHTML(sport.data.titel)"></div>

        <div v-html="asHTML(sport.data.inleiding)"></div>

        <div v-html="asHTML(sport.data.agenda_title)"></div>
        <div v-for="agenda in sport.data.agendas" :key="agenda.id">
          <div v-html="asHTML(sport.data.agenda_content)">
          </div>-
        </div>

        <div>

        </div>

        <div>{{ sport.data.docent }}</div>


      </section>
    </section>
    </template>


    <SportenComponent v-if="isLoading"></SportenComponent>
    <SportenComponent v-if="isLoading"></SportenComponent>
    <SportenComponent v-if="isLoading"></SportenComponent>
  </section>
  </div>
</template>

<script>
import {asHTML} from "@prismicio/helpers";
import Prismic from 'prismic-javascript';
import { PrismicImage } from '@prismicio/vue'
import SportenComponent from "@/lib/components/sporten/SportenComponent.vue";

export default {
  name: "SportenSection",
  components: {
    SportenComponent,
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
        console.log(this.sporten.data.titel)
      }
      catch (error) {
        console.error('Error fetching data from Prismic:', error);
      }
      finally {
        this.isLoading = false;
      }
    },
    onImageLoaded() {
      console.log('image loaded')
    },
    asHTML,
  }
}
</script>

<style>

.aspect-ratio-box {
  position: relative;
  width: 100%;
}

.aspect-ratio-box v-skeleton-loader {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

h4{
  font-size: 50px;
}

</style>