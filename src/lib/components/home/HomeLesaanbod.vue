<template>
  <section class="py-5">
    <div class="">
<!--      <h2 class="mt-5 mb-3 container">Lesaanbod</h2>-->
      <swiper :slidesPerView="1.125"  :options="swiperOptions" :space-between="28" class="swiper">
        <swiper-slide v-for="sport in sporten" :key="sport.uid" class="swiper-slide">
          <a :href="sport.data.uid">
            <span class="sport-subtitle">
            {{ sport.uid}}
            </span>
            <div class="h-100 fixed-card mt-3">
              <figure>
                <PrismicImage :field="sport.data.image"  class="les-image"/>
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

      swiperOptions: {
        slidesPerView: 1.125,
        breakpoints: {

        }
      }
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
.swiper {
  padding-left: 1em;
}

.sport-subtitle{
  font-size: .75rem;
   letter-spacing: -0.0014em;
  line-height: 1.6;
  margin-bottom: 1.5em;
}
.les-image{
  clip-path: inset(0);
  position: relative;
  width: 100%;
  /*height: 25vw;*/
  margin-top: 1rem;
  transition: clip-path 1s cubic-bezier(0.17, 0.67, 0, 1);
  max-height: calc(6* 5rem);
  background-color: rgba(20, 21, 26, .1);
}

:hover.swiper-slide .les-image{
  clip-path: inset(1.5rem round 1.5rem);
}

.swiper-slide {
  display: flex;
  justify-content: center;
  align-items: center;
  /*width: calc(100vw - 88px);*/
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

@media (width >= 992px) {
  .swiper {
    padding: 20px 0 0 105px;
  }
}
</style>
