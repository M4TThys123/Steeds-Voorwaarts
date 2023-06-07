<template>
  <section>
      <h3>Sporten Data</h3>
      <p>Unorderd list met redirect naar de juiste route</p>
      <section class="row">
        <ul class="d-flex">
          <li v-for="sport in sporten" :key="sport.uid" class="item">
              <router-link :to="`/sporten/${sport.uid}`" class="btn btn-light">
                {{ capitalizeFirstLetter(sport.uid)}}
              </router-link>
          </li>
        </ul>
        <section v-if="isLoading" class="spinner-border" role="status">
          <span class="sr-only">Loading...</span>
        </section>
      </section>
    </section>

</template>

<script>
import Prismic from 'prismic-javascript';
import { asHTML } from '@prismicio/helpers'

export default {
  name: "PrismicData01",
  components: {
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