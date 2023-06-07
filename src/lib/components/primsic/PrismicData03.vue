<template>
  <section>
    <h3>Key Textfield, Title Field, Rich Textfield & Images van prismic</h3>

    <section class="row">
      <section class="" v-for="sport in sporten" :key="sport.uid">
        <section>
          <ul>
            <li>{{ sport.data.docent }}</li>
            <li v-html="asHTML(sport.data.titel)"></li>
            <li v-html="asHTML(sport.data.inleiding)"></li>

            <PrismicImage :field="sport.data.image" />
          </ul>
        </section>
      </section>
    </section>




    <section v-if="isLoading" class="spinner-border" role="status">
      <span class="sr-only">Loading...</span>
    </section>
  </section>
</template>

<script>
import Prismic from 'prismic-javascript';
import { asHTML } from '@prismicio/helpers'
import { PrismicImage } from '@prismicio/vue'



export default {
  name: "PrismicData03",
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
  methods: {
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
    asHTML
  },
  computed: {
    capitalizeFirstLetter() {
      return function(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
      };
    }
  },
};
</script>

<style scoped>
li{
  margin-right: 1em;
}
</style>