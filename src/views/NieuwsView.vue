<template>
  <view-hero title="Club Nieuws" paragraph="De laatste updates"></view-hero>

  <section class="container my-5">
    <v-data-table
      :headers="nieuwsHeaders"
      :items="nieuwsItems"
      height="50vh"
      class="elevation-2 pa-5 rounded-xl"
      :loading="isLoading"
      :item-class="getRowClass"
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
        { title: 'Mededeling', value: 'mededeling',  width: '65vw'},
        { title: 'Datum', value: 'date', width: '10vw',  sortable: true,},
        { title: 'Info', value: 'info', sortable: false, width: '5vw', align: 'center' },
      ],

      isDialogOpen: false,
      selectedItem: { title: '', message: '', date: '' },
      prismicData: null,
      isLoading: false,
      newNewsItems: [],
      unreadNewsItems: [],
    };
  },
  methods: {
    openDialog(item) {
      console.log('item.id', item.id)
      this.selectedItem = item;
      this.isDialogOpen = true;
    },
    async fetchPrismicData() {
      try {
        this.isLoading = true;

        const apiEndpoint = 'https://streeds-voorwaarts.cdn.prismic.io/api/v2';
        const api = await Prismic.api(apiEndpoint);
        const response = await api.query(
            Prismic.Predicates.at('document.type', 'club_nieuws'),
            { orderings: '[document.last_publication_date desc]' }
        );

        this.prismicData = response.results;


        this.nieuwsItems = this.prismicData.map((doc) => {
          const messageDate = new Date(doc.data.datum);
          const now = new Date();
          const oneMonthAgo = new Date();
          oneMonthAgo.setMonth(now.getMonth() - 1);
          const isWithinOneMonth = messageDate >= oneMonthAgo;

          if(isWithinOneMonth){
            this.newNewsItems.push(doc.id);
            console.log('newNewsItems:', this.newNewsItems);
            this.saveUnreadNewsItems()
          }



          return {
            id: doc.id,
            onderwerp: doc.data.onderwerp || "Geen onderwerp",  // Onderwerp veld uit Prismic
            mededeling: doc.data.mededeling[0]?.text || "Geen mededeling",  // Eerste paragraaf tekst uit mededeling veld
            body: doc.data.mededeling,
            date: doc.data.datum || "Onbekende datum",  // Datum veld uit Prismic
            // unread: doc.data.unread || false,  // Ongelezen veld uit Prismic
            unread: isWithinOneMonth,
          };
        });

        console.log("Mapped nieuwsItems:", this.nieuwsItems);

      } catch (error) {
        console.error(error);
      } finally {
        this.isLoading = false;
      }
    },
    getRowClass(item) {
      // Controleer of het item ongelezen is en geef de juiste class
      return item.unread ? 'highlight' : '';
    },
    saveUnreadNewsItems() {
      localStorage.setItem('unreadNewsItems', JSON.stringify(this.newNewsItems));
    },
  },

  created() {
    this.fetchPrismicData();
  },
};
</script>

<style scoped>
/* Add your styles here */
.highlight {
  background-color: red;
}
</style>