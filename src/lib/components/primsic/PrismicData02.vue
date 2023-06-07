<template>
  <section>
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
  </section>
</template>

<script>
import Prismic from 'prismic-javascript';

export default {
  name: "PrismicData02",
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