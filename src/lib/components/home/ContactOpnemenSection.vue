<template>
  <section>
    <div class="container">
      <div class="row align-center">
        <div class="col-md-8 col pr-md-15">
          <div class="swiper-image__wrapper">
            <router-link to="/aanmelden" style=" display: block;width: 100%; height: 100%;">
              <GenericButon link="/aanmelden"
                            class="swiper-image__link "
                            icon="bx bxs-user-plus"
                            text="Aanmelden"
                            style=" display: block;"/>
              <figure class="image-with-text__media">
                <v-img
                    :src="afbeelding"
                    :alt="alt"
                    :loading="isLoading"
                    @load="isLoading = false"
                    cover
                    height="100%"
                    class="swiper-image"
                >
                  <template v-slot:placeholder>
                    <v-skeleton-loader type="image"/>
                  </template>
                </v-img>
              </figure>
            </router-link>
          </div>
        </div>
        <div class="col-md-4 col">
          <ContactForm/>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import ContactForm from "@/lib/components/contact/ContactForm.vue";
import Prismic from "prismic-javascript";
import GenericButon from "@/lib/components/elements/GenaricButon.vue";

export default {
  name: "ContactOpnemenSection",
  components: {ContactForm, GenericButon},
  data() {
    return {
      isLoading: true,
      afbeelding: null,
      alt: null,
      contactOpnemenData: [],
    }
  },
  methods: {
    async fetchContactOpnemenAfbeelding() {
      try {
        const apiEndpoint = 'https://streeds-voorwaarts.cdn.prismic.io/api/v2';
        const api = await Prismic.api(apiEndpoint);
        const response = await api.query(Prismic.Predicates.at('document.type', 'contact_opnemen'));

        this.contactOpnemenData = response.results[0].data;

        this.afbeelding = this.contactOpnemenData.afbeelding.url;
        console.log(this.afbeelding);
        this.alt = this.contactOpnemenData.afbeelding.alt;

      } catch (error) {
        console.error('Error fetching data from Prismic:', error);
      }
    },
  },
  mounted() {
    this.fetchContactOpnemenAfbeelding();
  }
}
</script>

<style scoped>

.image-with-text__media {
  /*aspect-ratio: 4/3;*/
  width: 100%;
  height: 100%;
  clip-path: inset(0 round 1.5rem);
  /*clip-path: inset(0 round 0);*/
  transition: clip-path 1s cubic-bezier(0.17, 0.67, 0, 1);
  background-color: rgba(20, 21, 26, .1);
}

.swiper-image__wrapper {
  aspect-ratio: 4/3;
  width: 100%;
  height: auto;

  clip-path: inset(0 round 1.5rem);

  position: relative;
  width: 100%;
  transition: clip-path 1s cubic-bezier(0.17, 0.67, 0, 1);
  background-color: rgba(20, 21, 26, .1);
  border-radius: 1rem;
  overflow: hidden;

  transition: clip-path 1s cubic-bezier(0.17, 0.67, 0, 1);

}

.swiper-image__link{
  position: absolute;
  z-index: 1;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 0;
  pointer-events: none;
  transition: opacity .4s ease-out;
}

:hover.swiper-image__wrapper .swiper-image__link{
  opacity: 1;
}

.swiper-image{
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

@media (width >= 768px) {
  .swiper-image__wrapper {
    /*height: calc((60vw - 88px) / 287 * 360);*/
    overflow: hidden;
  }
}

@media (width >= 992px) {
  .swiper-image__wrapper {
    /*height: 25vw;*/
  }

  .swiper-image__wrapper:hover {
    clip-path: inset(1.5rem round 1.5rem);
  }
}

</style>