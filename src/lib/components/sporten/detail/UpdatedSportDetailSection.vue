<template>
  <div class="container">
    <section class="sporten-overzicht row">
      <template v-if="!isLoading">
        <section class="sport">
          <figure class="image-wrapper">
            <PrismicImage v-if="afbeelding && afbeelding.url" :field="afbeelding" />
            <div v-else class="fallback">Afbeelding niet beschikbaar</div>
          </figure>
          <section class="data-container">


            <PrismicRichText :field="agendaTitle" />

            <div v-for="(agenda, index) in agenda" :key="index">
              <PrismicRichText :field="agenda.agenda_content" />
            </div>

            <div><strong>Docent:</strong> {{ docent }}</div>

            <div class="bio">
              <PrismicRichText :field="bio" />
            </div>

          </section>
        </section>
      </template>
    </section>
  </div>
</template>

<script>
import { asHTML } from "@prismicio/helpers";
import { PrismicImage } from '@prismicio/vue';

export default {
  name: "SportDetailSection",
  components: {
    PrismicImage
  },

  props: {
    sportdata: {
      type: Object,
      required: true,
    },
    isLoading: {
      type: Boolean,
      required: true,
    },
  },

  data() {
    return {
      };
  },

  computed: {
    afbeelding() {
      const image = this.sportdata?.data?.image;
      if (image && image.url) {
        return image;
      }
      return null; // Geen geldige afbeelding
    },
    agendaTitle() {
      return this.sportdata?.data?.agenda_title || null;
    },
    agenda() {
      return this.sportdata?.data?.agenda || [];
    },

    docent() {
      return this.sportdata?.data?.docent || null;
    },
    bio() {
      return this.sportdata?.data?.bio || null;
    },
  },

  mounted() {
  },

  methods: {
    asHTML,
  }
}
</script>

<style>
.aspect-ratio-box {
  position: relative;
  width: 100%;
}

.aspect-ratio-box v-skeleton-loader {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

h4 {
  font-size: 50px;
}

.data-container ul {
 display: flex;
 flex-direction: column;
}
.data-container li{
  padding-left: 20px;
  margin-bottom: 8px;
  list-style-type: disc;
}
</style>