<template>
  <section class="py-5">
    <div class="">
<!--      <h2 class="mt-5 mb-3 container">Lesaanbod</h2>-->
      <swiper :slidesPerView="1.125" :breakpoints="breakpoints" :options="swiperOptions" :space-between="28" class="swiper">
        <swiper-slide v-for="sport in sporten" :key="sport.uid" class="swiper-slide">
          <a :href="sport.data.uid">
<!--            <span class="sport-subtitle">-->
<!--            {{ sport.uid}}-->
<!--            </span>-->
            <div class="h-100 fixed-card mt-3">
              <figure>
                <PrismicImage :field="sport.data.image"  class="les-image"/>
              </figure>
              <div class="card-body">
                <div v-html="asHTML(sport.data.titel)" class="sport-heading__container"></div>

                <div v-html="asHTML(sport.data.inleiding)"></div>
              </div>
            </div>
          </a>
        </swiper-slide>
        <swiper-slide class="swiper-slide__last">
          <h3 class="heading-bold">Ontdek all onze sporten</h3>
          <ButtonComponent></ButtonComponent>
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
import ButtonComponent from "@/lib/components/elements/ButtonComponent.vue";

export default {
  name: 'HomeLesaanbod',
  components: {
    ButtonComponent,
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
        1920: {
          slidesPerView: 3.375,
        }
      },
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
.sport-heading__container > *{
  font-weight: 900;
}
.les-image{
  clip-path: inset(0);
  position: relative;
  width: 100%;
  /*height: 25vw;*/
  /*margin-top: 1rem;*/
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
  margin-top: 2.125rem;
  clip-path: inset(0);
  transition: clip-path 1s cubic-bezier(0.17, 0.67, 0, 1);
}
.swiper-slide__last:hover{
  clip-path: inset(1.5rem round 1.5rem);
}
.heading-bold{
  font-size: 1.6666666667vw;
  line-height: 1.25;
  letter-spacing: -0.04em;
  font-weight: 900;
}

@media (width >= 992px) {
  .swiper {
    padding-left: calc((100vw - 120rem) / 2 + calc(1.5 * 5rem));

  }
}

@media (width >= 1920px) {
  .heading-bold{
    font-size: calc(0.4 * 5rem);


  }
}
</style>
