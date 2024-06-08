<template>
  <section class="py-5">
    <div class="">
      <h1 class="mt-5 mb-3 container">Lesaanbod</h1>
      <swiper :slides-per-view="2.5" :space-between="28" class="my-swiper">
        <swiper-slide v-for="sport in sporten" :key="sport.uid">
          <a :href="sport.data.uid">
            <div class="h-100 fixed-card">
              <figure>
                <PrismicImage :field="sport.data.image" />
              </figure>
              <div class="card-body">
                <div v-html="asHTML(sport.data.titel)"></div>

                <div v-html="asHTML(sport.data.inleiding)"></div>
              </div>
            </div>
          </a>
        </swiper-slide>
      </swiper>
    </div>
  </section>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/swiper-bundle.css';
import Prismic from "prismic-javascript";
import {asHTML} from "@prismicio/helpers";
import { PrismicImage } from '@prismicio/vue'

export default {
  name: 'HomeLesaanbod',
  components: {
    Swiper,
    SwiperSlide,
    PrismicImage
  },
  data() {
    return {
      sporten: [],
      isLoading: true,
    }
  },
  created() {
    this.fetchSporten();
  },
  methods:{
    async fetchSporten() {
      console.log("fetchSporten werkt")
      try {
        const apiEndpoint = 'https://streeds-voorwaarts.cdn.prismic.io/api/v2';
        const api = await Prismic.api(apiEndpoint);
        const response = await api.query(Prismic.Predicates.at('document.type', 'sporten'));

        this.sporten = response.results;
        console.log(this.sporten)
        this.isLoading = false;
      } catch (error) {
        console.error('Error fetching data from Prismic:', error);
      }
    },
    asHTML,
  }
}
</script>

<style>
/* Custom styles for Swiper */
.my-swiper {
  padding: 20px 0 0 105px;
}

.swiper-slide {
  display: flex;
  justify-content: center;
  align-items: center;
  width: ;
}

.fixed-card {
  width: 100%;
  height: 400px; /* Set a fixed height for the cards */
  display: flex;
  flex-direction: column;
}

.fixed-img {
  height: 200px; /* Set a fixed height for the image */
  object-fit: cover;
}
</style>
