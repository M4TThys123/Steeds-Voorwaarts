<template>
  <div>
    <!-- Activator met badge -->
    <v-badge
        v-if="unreadBadgeCount > 0"
        :content="unreadBadgeCount"
        color="red"
        overlap
    >
      <v-icon
          icon="mdi-message-bulleted"
          size="large"
          :color="activatorColor"
          @click="isDialogOpen = true"
          class="pointer"
      />
    </v-badge>
    <v-icon
        v-else
        icon="mdi-message-bulleted"
        size="large"
        :color="activatorColor"
        @click="isDialogOpen = true"
        class="pointer"
    />

    <!-- Dialog met VDataTable -->
    <v-dialog v-model="isDialogOpen" max-width="1000px">
      <v-card class="elevation-2 pa-5 rounded-xl">
        <v-card-title class="content-heading">
          <h2>
            Club Nieuws
          </h2>
        </v-card-title>

        <v-card-text>
          <v-data-table
              height="50vh"
              fixed-header
              :headers="nieuwsHeaders"
              :items="nieuwsItems"
              :loading="isLoading"
              @click:row="openNieuwsDialog"
              items-per-page-text="Berichten per pagina"
              :items-per-page-options="[
                {value: 5, title: '5'},
                {value: 10, title: '10'},
                {value: -1, title: 'Alles'}
              ]"
          >
            <!-- Loading template -->
            <template v-slot:loading>
              <v-skeleton-loader type="table-row@10"></v-skeleton-loader>
            </template>

            <!-- Rijen op maat -->
            <template v-slot:item="{ item }">
              <tr
                  :class="[getRowClass(item), hoveredRow === item ? 'hover-class' : '']"
                  @click="openNieuwsDialog(item)"
                  @mouseenter="hoveredRow = item"
                  @mouseleave="hoveredRow = null"
              >
                <td>{{ item.onderwerp }}</td>
                <td>{{ item.mededeling }}</td>
                <td>{{ item.date }}</td>
                <td class="text-center">
                  <v-icon
                      color="primary"
                      @click.stop="openNieuwsDialog(item)"
                  >
                    mdi-information
                  </v-icon>
                </td>
              </tr>
            </template>
          </v-data-table>
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn text @click="isDialogOpen = false">Sluiten</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <!-- NieuwsDialog voor specifieke details -->
    <NieuwsDialog
        :isOpen="isNieuwsDialogOpen"
        :data="selectedItem"
        @update:isOpen="isNieuwsDialogOpen = $event"
    />
  </div>
</template>

<script>
import NieuwsDialog from "@/lib/components/dialogs/NieuwsDialog.vue";
import Prismic from "prismic-javascript";

export default {
  name: "NieuwsOverzichtDialog",
  components: { NieuwsDialog },
  props: {
    activatorColor: {
      type: String,
      default: "black", // Standaard kleur voor activator
    },
  },
  data() {
    return {
      newsItemsThisMonth: [],
      nieuwsHeaders: [
        { title: "Onderwerp", value: "onderwerp", width: "15vw" },
        { title: "Mededeling", value: "mededeling", width: "65vw" },
        { title: "Datum", value: "date", width: "10vw", sortable: true },
        { title: "Info", value: "info", sortable: false, width: "5vw", align: "center" },
      ],
      nieuwsItems: [],
      hoveredRow: null,
      isDialogOpen: false,
      isNieuwsDialogOpen: false,
      selectedItem: [],
      isLoading: false,
    };
  },
  methods: {
    openNieuwsDialog(item) {
      this.selectedItem = item;
      this.isNieuwsDialogOpen = true;
      this.markAsRead(item)
    },

    async fetchNieuwsData() {
      try {
        this.isLoading = true;
        const apiEndpoint = "https://streeds-voorwaarts.cdn.prismic.io/api/v2";
        const api = await Prismic.api(apiEndpoint);

        const response = await api.query(
            Prismic.Predicates.at("document.type", "club_nieuws"),
            { orderings: "[document.last_publication_date desc]" }
        );

        const now = new Date();
        const oneMonthAgo = new Date();
        oneMonthAgo.setMonth(now.getMonth() - 1);

        const storedItems = JSON.parse(localStorage.getItem('readNewsItems')) || [];

        this.nieuwsItems = response.results.map((doc) => {
          const messageDate = new Date(doc.data.datum);
          const isWithinOneMonth = messageDate >= oneMonthAgo;
          const isRead = storedItems.includes(doc.id);

          const highlight = isWithinOneMonth && !isRead;

          if (highlight) {
            this.newsItemsThisMonth.push(doc.id); // Keep track of highlighted items if needed
          }

          return {
            id: doc.id,
            onderwerp: doc.data.onderwerp || "Geen onderwerp",
            mededeling: doc.data.mededeling[0]?.text || "Geen mededeling",
            body: doc.data.mededeling,
            date: doc.data.datum || "Onbekende datum",
            highlight: highlight
          };
        });
      } catch (error) {
        console.error('Error fetching nieuws data:', error);
      } finally {
        this.isLoading = false;
      }
    },
    getRowClass(item) {
      return item.highlight ? "highlight" : "";
    },
    markAsRead(item) {
      const readItems = JSON.parse(localStorage.getItem('readNewsItems')) || [];

      if (!readItems.includes(item.id)) {
        // Add the ID of the item to the list of read items
        readItems.push(item.id);

        // Update localStorage
        localStorage.setItem('readNewsItems', JSON.stringify(readItems));

        // Update the status of the item locally
        item.highlight = false;

        this.newsItemsThisMonth = this.newsItemsThisMonth.filter(id => id !== item.id);

        // Force a re-render by reassigning the items
        this.nieuwsItems = [...this.nieuwsItems];
      }
  },
  },
  created() {
      this.fetchNieuwsData();
    },
  computed:{
    unreadBadgeCount() {
      return this.newsItemsThisMonth.length;
    },
}
  }
</script>

<style scoped>
.pointer {
  cursor: pointer;
}

.highlight {
  background-color: var(--light-green-color);
}

.hover-class {
  background-color: var(--light-green-color);
  transition: background-color 0.2s ease;
}

tr:hover {
  cursor: pointer;
}
</style>