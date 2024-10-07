<template>
  <view-hero title="Club Nieuws" paragraph="De laatste updates"></view-hero>

  <section class="container my-5">
    <v-data-table
      :headers="nieuwsHeaders"
      :items="nieuwsItems"
      height="50vh"
      class="elevation-1"
    >
      <template v-slot:[`item.info`]="{ item }">
        <NieuwsDialog :isOpen="isDialogOpen" :data="selectedItem" @update:isOpen="isDialogOpen = $event" />
        <v-icon color="primary" @click="openDialog(item)">
          mdi-information
        </v-icon>
      </template>
    </v-data-table>
  </section>
</template>

<script>
import ViewHero from "@/lib/components/hero/ViewHero.vue";
import NieuwsDialog from "@/lib/components/dialogs/NieuwsDialog.vue";
import Prismic from "prismic-javascript";

export default {
  name: "NieuwsView",
  components: { ViewHero, NieuwsDialog },
  data() {
    return {
      nieuwsHeaders: [
        { title: 'Onderwerp', value: 'onderwerp' },
        { title: 'Mededeling', value: 'message' },
        { title: 'Datum', value: 'date' },
        { title: 'Info', value: 'info', sortable: false },
      ],
      nieuwsItems: [
        { id: 1, onderwerp: 'Nieuws 1', message: 'Dit is nieuws 1', date: '2021-01-01' },
        { id: 2, onderwerp: 'Nieuws 2', message: 'Dit is nieuws 2', date: '2021-01-02' },
        { id: 3, onderwerp: 'Nieuws 3', message: 'Dit is nieuws 3', date: '2021-01-03' },
        { id: 4, onderwerp: 'Nieuws 4', message: 'Dit is nieuws 4', date: '2021-01-04' },
        { id: 5, onderwerp: 'Nieuws 5', message: 'Dit is nieuws 5', date: '2021-01-05' },
      ],

      isDialogOpen: false,
      selectedItem: { title: '', message: '', date: '' },
      prismicData: null,
      isLoading: false,
    };
  },
  methods: {
    openDialog(item) {
      this.selectedItem = item;
      this.isDialogOpen = true;
    },
    async fetchPrismicData() {
      try {
        this.isLoading = true;

        const apiEndpoint = 'https://streeds-voorwaarts.cdn.prismic.io/api/v2';
        const api = await Prismic.api(apiEndpoint);
        const response = await api.query(Prismic.Predicates.at('document.type', 'club_nieuws'));

        this.prismicData = response.results;
        console.log(this.prismicData);

      } catch (error) {
        console.error('Error fetching data from Prismic:', error);
      } finally {
        this.isLoading = false;
      }
    },
  },

  created() {
    console.log('test')
    this.fetchPrismicData();
  },
};
</script>

<style scoped>
/* Add your styles here */
</style>