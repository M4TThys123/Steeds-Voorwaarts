<template>
  <div>
    <!-- Activator met badge -->
    <v-badge :content="nieuwsItems.length" color="red" overlap>
      <v-icon
          icon="mdi-message-bulleted"
          size="large"
          :color="activatorColor"
          @click="isDialogOpen = true"
          class="pointer"
      >
      </v-icon>
    </v-badge>

    <!-- Dialog met VDataTable -->
    <v-dialog v-model="isDialogOpen" max-width="800px">
      <v-card>
        <v-card-title class="headline">Club Nieuws</v-card-title>
        <v-card-text>
          <v-data-table
              :headers="nieuwsHeaders"
              :items="nieuwsItems"
              :loading="isLoading"
              @click:row="openNieuwsDialog"
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
      selectedItem: {},
      isLoading: false,
    };
  },
  methods: {
    openNieuwsDialog(item) {
      console.log("Geselecteerde rij:", item);
      this.selectedItem = item;
      this.isNieuwsDialogOpen = true;
    },
    async fetchPrismicData() {
      try {
        this.isLoading = true;
        const apiEndpoint = "https://streeds-voorwaarts.cdn.prismic.io/api/v2";
        const api = await Prismic.api(apiEndpoint);
        const response = await api.query(
            Prismic.Predicates.at("document.type", "club_nieuws"),
            { orderings: "[document.last_publication_date desc]" }
        );

        this.nieuwsItems = response.results.map((doc) => ({
          id: doc.id,
          onderwerp: doc.data.onderwerp || "Geen onderwerp",
          mededeling: doc.data.mededeling[0]?.text || "Geen mededeling",
          date: doc.data.datum || "Onbekende datum",
        }));
      } catch (error) {
        console.error(error);
      } finally {
        this.isLoading = false;
      }
    },
    getRowClass(item) {
      return item.unread ? "highlight" : "";
    },
  },
  created() {
    this.fetchPrismicData();
  },
};
</script>

<style scoped>
.pointer {
  cursor: pointer;
}

.highlight {
  background-color: var(--light-green-color);
}

.hover-class {
  background-color: rgba(0, 0, 0, 0.05);
  transition: background-color 0.2s ease;
}

tr:hover {
  cursor: pointer;
}
</style>