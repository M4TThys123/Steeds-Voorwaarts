<template>
  <section class="py-5">
    <div class="">
      <swiper :slidesPerView="1.20"
              :breakpoints="breakpoints"
              :options="swiperOptions"
              :space-between="20"
              class="swiper">

        <swiper-slide class="swiper-slide" v-if="false">
          <div class="swiper-slide__first">
            <div class="h-100 fixed-card">
              <div class="swiper-image__wrapper">
                <figure>
                  <v-skeleton-loader  type="image" color="grey" />

                </figure>
              </div>
              <v-skeleton-loader type="article"  color="grey" class="mt-4"></v-skeleton-loader>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide class="swiper-slide" v-if="isLoading">
          <div class="swiper-slide__first">
            <div class="h-100 fixed-card">
              <div class="swiper-image__wrapper">
                <figure>
                  <v-skeleton-loader  type="image" color="grey" />

                </figure>
              </div>
              <v-skeleton-loader type="article"  color="grey" class="mt-4"></v-skeleton-loader>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide class="swiper-slide" v-if="isLoading">
          <div class="swiper-slide__first">
            <div class="h-100 fixed-card">
              <div class="swiper-image__wrapper">
                <figure>
                  <v-skeleton-loader  type="image" color="grey" />

                </figure>
              </div>
              <v-skeleton-loader type="article"  color="grey" class="mt-4"></v-skeleton-loader>
            </div>
          </div>
        </swiper-slide>

        <swiper-slide v-for="sport in sporten" :key="sport.uid" class="swiper-slide">
          <a :href="`/lesaanbod/${sport.uid}`">
            <div class="h-100 fixed-card">
              <div class="swiper-image__wrapper">
                <GenaricButon :link="`/lesaanbod/#${sport.uid}`"
                              class="swiper-image__link"
                              icon="bx bx-right-arrow-alt"
                              text="Lees meer"></GenaricButon>
                <figure class="swiper-figure">
                  <PrismicImage v-if="sport && sport.data" :field="sport.data.image" class="swiper-image"/>
                </figure>
              </div>
              <div class="swiper-body">
                <div v-if="sport && sport.data" v-html="asHTML(sport.data.titel)" class="sport-heading__container"></div>
                <div v-if="sport && sport.data" v-html="asHTML(sport.data.inleiding)"></div>
              </div>
            </div>
          </a>
        </swiper-slide>
        <swiper-slide class="swiper-slide__last">
          <h3 class="heading-bold">Doe een gratis proefles!</h3>
          <GenaricButon link="/aanmelden"
                        icon="bx bxs-user-plus"
                        text="Aanmelden"></GenaricButon>
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
import GenaricButon from "@/lib/components/elements/GenaricButon.vue";

export default {
  name: 'HomeLesaanbod',
  components: {
    GenaricButon,
    Swiper,
    SwiperSlide,
    PrismicImage
  },
  data() {
    return {
      sporten: [],
      isLoading: true,

      breakpoints:{
        750: {
          slidesPerView: 1.885,
        },
        1024: {
          slidesPerView: 2.25,
        },
        1700: {
          slidesPerView: 2.75,
        }
      },
    }
  },
  created() {
    this.fetchSporten();
  },
  methods:{
    async fetchSporten() {
      try {
        const apiEndpoint = 'https://streeds-voorwaarts.cdn.prismic.io/api/v2';
        const api = await Prismic.api(apiEndpoint);
        const response = await api.query(Prismic.Predicates.at('document.type', 'sporten'));

        this.sporten = response.results;


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
.sport-heading__container > *{
  font-weight: 900;
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

.swiper-slide__first {
  width: 100%;
}


.swiper-slide__last{
  background: var(--green-color);
  position: relative;
  width: 25vw;
  height: 25vw;
  max-width: calc(6* 5rem);
  max-height: calc(6* 5rem);
  padding: 4.1666666667vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  /*margin-top: 2.125rem;*/
  clip-path: inset(0);
  transition: clip-path 1s cubic-bezier(0.17, 0.67, 0, 1);
}

.heading-bold{
  color: white;
  font-size: 22px;
  line-height: 1.25;
  letter-spacing: -0.04em;
  font-weight: 900;
}

/* =================+++++++======+++=+==++==+==+==+ */

/* =================+++++++======+++=+==++==+==+==+ */



/* All */

.swiper-image__wrapper {
  position: relative;
  width: 100%;
  transition: clip-path 1s cubic-bezier(0.17, 0.67, 0, 1);
  background-color: rgba(20, 21, 26, .1);
  clip-path: unset;
  border-radius: 1rem;
  overflow: hidden;

  clip-path: unset;
  height: calc((100vw - 88px) / 287* 360);
  transition: clip-path 1s cubic-bezier(0.17, 0.67, 0, 1);

}

.swiper-slide__last {
  height: calc((100vw - 88px) / 287* 360);
  border-radius: 1rem;
}

.swiper-image{
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
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

:hover.swiper-slide .swiper-image__link{
  opacity: 1;
}


.swiper-body{
  margin-top: 1.25em;
}



/* SM (for tablets - screens ≥ than 768px wide) */
@media (width >= 768px) {
  .swiper{
    margin-left: 4em;
  }
  .swiper-image__wrapper {
    height: calc((60vw - 88px) / 287* 360);
    overflow: hidden;
      border-radius: 0;
  }

  .swiper-slide__last {
    height: calc((60vw - 88px) / 287* 360);
      border-radius: 0;
  }

}

/* MD (for small laptops - screens ≥ than 992px wide) */
@media (width >= 992px) {
  .swiper-image__wrapper {
    height: 25vw;
    clip-path: inset(0);
  }
  :hover.swiper-slide .swiper-image__wrapper, .swiper-slide__last:hover{
    clip-path: inset(1.5rem round 1.5rem);
  }

  .swiper-slide__last {
    height: 25vw;
    max-height: none;
    max-width: none;
  }
}

/* LG (for laptops and desktops - screens ≥ than 1200px wide) */
@media (width >= 1200px) {
  .heading-bold{
    font-size: 1.6666666667vw;
  }
}




/* MD (for small laptops - screens ≥ than 992px wide) */
@media (width >= 992px) {
  .swiper {
    padding-left: calc((100vw - 120rem) / 2 + calc(1.5 * 5rem));

  }
}

/* Wide */
@media (width >= 1920px) {
  .heading-bold{
    font-size: calc(0.4 * 5rem);


  }
}
</style>
