<template>
  <view-hero title="Club Nieuws" paragraph="De laatste updates"></view-hero>

  <section class="container my-5">
    <v-data-table
        :headers="nieuwsHeaders"
        :items="nieuwsItems"
        height="50vh"
        class="elevation-2 pa-5 rounded-xl"
        :loading="isLoading"
        @click:row="openDialog"
    >
      <!-- Loading template -->
      <template v-slot:loading>
        <v-skeleton-loader type="table-row@10"></v-skeleton-loader>
      </template>

      <!-- Slot voor het aanpassen van volledige rijen -->
      <template v-slot:item="{ item }">
        <tr
            :class="[getRowClass(item), hoveredRow === item ? 'hover-class' : '']"
            @click="openDialog(item)"
            @mouseenter="hoveredRow = item"
            @mouseleave="hoveredRow = null">
          <td>{{ item.onderwerp }}</td>
          <td>{{ item.mededeling }}</td>
          <td>{{ item.date }}</td>
          <td class="text-center">
            <v-icon color="primary" @click="openDialog(item)">
              mdi-information
            </v-icon>
          </td>
        </tr>
      </template>
    </v-data-table>

    <!-- NieuwsDialog component -->
    <NieuwsDialog
        :isOpen="isDialogOpen"
        :data="selectedItem"
        @update:isOpen="isDialogOpen = $event"
    />

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
        { title: 'Onderwerp', value: 'onderwerp', width: '15vw' },
        { title: 'Mededeling', value: 'mededeling', width: '65vw' },
        { title: 'Datum', value: 'date', width: '10vw', sortable: true },
        { title: 'Info', value: 'info', sortable: false, width: '5vw', align: 'center' },
      ],
      hoveredRow: null,
      nieuwsItems: [],
      isDialogOpen: false,
      selectedItem: {},
      prismicData: null,
      isLoading: false,
      newNewsItems: [],
      unreadNewsItems: [],
    };
  },
  methods: {
    openDialog(item) {
      this.selectedItem = item;
      this.isDialogOpen = true;
      this.markAsRead(item)
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

          if (isWithinOneMonth) {
            this.newNewsItems.push(doc.id);
            this.saveReadNewsItems();
          }

          return {
            id: doc.id,
            onderwerp: doc.data.onderwerp || "Geen onderwerp",
            mededeling: doc.data.mededeling[0]?.text || "Geen mededeling",
            body: doc.data.mededeling,
            date: doc.data.datum || "Onbekende datum",
            unread: isWithinOneMonth,
          };
        });

      } catch (error) {
        console.error(error);
      } finally {
        this.isLoading = false;
      }
    },
    getRowClass(item) {
      return item.unread ? 'highlight' : '';
    },
    saveReadNewsItems() {
      localStorage.setItem('readNewsItems', JSON.stringify(this.newNewsItems));
    },
   markAsRead(item) {
    // Retrieve the current read items from localStorage
    const readItems = JSON.parse(localStorage.getItem('readNewsItems')) || [];

    // Check if the ID of the item is not in the list of read items
    if (!readItems.includes(item.id)) {
      // Add the ID of the item to the list of read items
      readItems.push(item.id);

      // Update localStorage
      localStorage.setItem('readNewsItems', JSON.stringify(readItems));

      // Update the status of the item locally
      item.read = true;

      // Force a re-render by reassigning the items
      this.nieuwsItems = [...this.nieuwsItems];
    }
  }
  },
  created() {
    this.fetchPrismicData();
  },
};
</script>

<style>
/* Voeg hier je stijlen toe */
.highlight {
  background-color: var(--light-green-color);
}

.hover-class {
  background-color: var(--light-green-color);
  transition: background-color 0.2s ease;
}

tr:hover {
  cursor: pointer; /* Laat de cursor veranderen als visuele feedback */
}
</style>
