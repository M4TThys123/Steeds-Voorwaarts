<template>
  <div class="container">
    <section class="sporten-overzicht row">
      <template v-if="!isLoading">
        <section class="sport col-md-6" v-for="sport in sporten" :key="sport.uid">
          <figure class="image-wrapper">
            <PrismicImage :field="sport.data.image"  />
          </figure>

          <GenaricButon   :link="`lesaanbod/${sport.uid}`"
                          icon="bx bx-right-arrow-alt"
                          text="Lees meer"
                          style=""
            />

          <section class="data-container">
            <!-- Toon de titel -->
            <PrismicRichText :field="sport.data.titel" />


            <!-- Toon de inleiding -->
            <PrismicRichText :field="sport.data.inleiding" />

            <!-- Toon agenda titel -->
            <PrismicRichText :field="sport.data.agenda_title" />

            <!-- Itereer door de agenda items -->
            <div v-for="(agenda, index) in sport.data.agenda" :key="index">
              <PrismicRichText :field="agenda.agenda_content" />
            </div>

            <!-- Toon docent -->
            <div><strong>Docent:</strong> {{ sport.data.docent }}</div>

            <!-- Toon bio (lijst en paragrafen) -->
            <div class="bio">
              <PrismicRichText :field="sport.data.bio" />
            </div>

          </section>
        </section>
      </template>
    </section>
  </div>
</template>

<script>
import { PrismicImage, PrismicRichText } from "@prismicio/vue";
import Prismic from "prismic-javascript";
import GenaricButon from "@/lib/components/elements/GenaricButon.vue";

export default {
  name: "SportenSection",
  components: {
    GenaricButon,
    PrismicImage,
    PrismicRichText,
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
        const apiEndpoint = "https://streeds-voorwaarts.cdn.prismic.io/api/v2";
        const api = await Prismic.api(apiEndpoint);
        const response = await api.query(
            Prismic.Predicates.at("document.type", "sporten")
        );

        this.sporten = response.results;
      } catch (error) {
        console.error("Error fetching data from Prismic:", error);
      } finally {
        this.isLoading = false;
      }
    },

  },
};
</script>

<style scoped>
.image-wrapper {
  margin-bottom: 20px;
}

.data-container {
  margin-top: 10px;
}

.bio {
  margin-top: 20px;
}
</style>