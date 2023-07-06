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
      </section>

    <p>Button list met uid</p>
    <section class="row">
      <ul class="d-flex">
        <li v-for="sport in sporten" :key="sport.uid" class="item">
          <button @click="changeSport(sport.uid, sport)" class="btn btn-dark">
            {{ capitalizeFirstLetter(sport.uid)}}
          </button>

<!--          <pre>{{ sport.data }}</pre>-->
        </li>
      </ul>
    </section>

    <h3>Knoppen huisstijl met Data render</h3>
    <section class="row">
      <ul class="d-flex col-12 col-md-4">
        <li v-for="sport in sporten" :key="sport.uid" class="item" >
          <button @click="changeSport(sport.uid, sport)" class="btn btn-dark flex">
            {{ capitalizeFirstLetter(sport.uid)}}
          </button>
        </li>
      </ul>

      <section class="col-12 col-md-8" v-for="sport in sporten" :key="sport.uid">
        <section>
          <ul>
            Key texfield
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
  name: "PrismicData",
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