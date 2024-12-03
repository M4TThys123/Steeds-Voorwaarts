<template>
  <div class="container">
    <section class="sporten-overzicht row">
      <template v-if="!isLoading">
        <section class="sport col-md-6" v-for="sport in filteredSporten" :key="sport.uid">
          <figure class="image-wrapper">
            <PrismicImage :field="sport.data.image" @load="onImageLoaded" />
          </figure>
          <section class="data-container">
            <!-- Toon de titel -->
            <PrismicRichText :field="sport.data.titel" />

            <!-- Toon de inleiding -->
            <PrismicRichText :field="sport.data.inleiding" />

            <!-- Toon agenda titel -->
            <PrismicRichText :field="sport.data.agenda_title" />

            <!-- Itereer door de agenda items -->
            <div v-for="(agenda, index) in sport.data.agenda" :key="index">
              <PrismicRichText :field="agenda.agenda_content" />
            </div>

            <!-- Toon docent -->
            <div><strong>Docent:</strong> {{ sport.data.docent }}</div>

            <!-- Toon bio (lijst en paragrafen) -->
            <div class="bio">
              <PrismicRichText :field="sport.data.bio" />
            </div>

            {{ sport }}
          </section>
        </section>
      </template>
    </section>
  </div>
</template>

<script>
import { asHTML } from "@prismicio/helpers";
import Prismic from 'prismic-javascript';
import { PrismicImage } from '@prismicio/vue';

export default {
  name: "SportDetailSection",
  components: {
    PrismicImage
  },

  data() {
    return {
      sporten: [],
      isLoading: true,
    };
  },

  computed: {
    filteredSporten() {
      // "uid": "freerunning",
      return this.sporten.slice(0, 1);
    }
  },

  created() {
    this.fetchSporten();
  },

  methods: {
    async fetchSporten() {
      try {
        const apiEndpoint = 'https://streeds-voorwaarts.cdn.prismic.io/api/v2';
        const api = await Prismic.api(apiEndpoint);
        const response = await api.query(
            [
              Prismic.Predicates.at('document.type', 'sporten'),
              Prismic.Predicates.at('my.sporten.uid', 'freerunning')
            ]
        );
        this.sporten = response.results;
      } catch (error) {
        console.error('Error fetching data from Prismic:', error);
      } finally {
        this.isLoading = false;
      }
    },
    onImageLoaded() {
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

h4 {
  font-size: 50px;
}
</style>