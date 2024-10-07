<template>
  <view-hero title="Club Nieuws" paragraph="De laatste updates"></view-hero>

  <section class="container my-5">
    <v-data-table
      :headers="nieuwsHeaders"
      :items="nieuwsItems"
      height="50vh"
      class="elevation-2 pa-5 rounded-xl"
      :loading="isLoading"
    >
      <template v-slot:loading>
        <v-skeleton-loader type="table-row@10"></v-skeleton-loader>
      </template>

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
        { title: 'Onderwerp', value: 'onderwerp', width: '15vw'},
        { title: 'Mededeling', value: 'message',  width: '65vw'},
        { title: 'Datum', value: 'date', width: '10vw',  sortable: true,},
        { title: 'Info', value: 'info', sortable: false, width: '5vw', align: 'center' },
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

        console.log('data:', this.prismicData );

        // Map de Prismic data naar het juiste format voor nieuwsItems
        this.nieuwsItems = this.prismicData.map((doc) => {
          return {
            onderwerp: doc.data.onderwerp || "Geen onderwerp",  // Onderwerp veld uit Prismic
            message: doc.data.mededeling[0]?.text || "Geen mededeling",  // Eerste paragraaf tekst uit mededeling veld
            date: doc.data.datum || "Onbekende datum",  // Datum veld uit Prismic
          };
        });

        console.log("Mapped nieuwsItems:", this.nieuwsItems);

      } catch (error) {
        console.error('Error fetching data from Prismic:', error);
      } finally {
        console.log('Done fetching data from Prismic');
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