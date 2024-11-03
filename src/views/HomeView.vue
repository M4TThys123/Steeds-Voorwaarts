<template>
  <HeroSectie :hero-sectie-data="heroSectieData"
              :is-loading="isHeroSectieDataLoading"
              class="mb-5"/>

  <Introductie :introductie-data="introductieData"
               :is-loading="isIntroductieDataLoading"
               class="mb-5"/>

  <UitgelichteActiviteiten :uitgelichte-activiteiten-data="uitgelichteActiviteitenData"
                           :is-loading="isUitgelichteActiviteitenDataLoading"
                           class="mb-5"/>

  <RoosterComponent class="mb-5"/>

  <UpdatedInformationSection :contact-informatie-data="contactInformatieData"
                             :is-contact-informatie-loading="isContactInformatieDataLoading"
                             :over-ons-data="overOnsData"
                             :is-over-ons-loading="isOverOnsDataLoading"
                             class="mb-5"/>
</template>

<script>
// import HeroSectie from "@/lib/components/home/HomeHero.vue";
import HeroSectie from "@/lib/components/home/HeroSectie.vue";
import Introductie from "@/lib/components/home/HomePar.vue";
import RoosterComponent from "@/lib/components/rooster/RoosterComponent.vue";
import UitgelichteActiviteiten from "@/lib/components/home/HomeLesaanbod.vue";
import UpdatedInformationSection from "@/lib/components/contact/ContactInfromation/UpdatedInformationSection.vue";

import Prismic from "prismic-javascript";

export default {
  name: "HomeView",
  components: { UpdatedInformationSection, Introductie, UitgelichteActiviteiten, RoosterComponent, HeroSectie },
  data() {
    return {
      heroSectieData: [],
      isHeroSectieDataLoading: true,

      introductieData: [],
      isIntroductieDataLoading: true,

      uitgelichteActiviteitenData: [],
      isUitgelichteActiviteitenDataLoading: true,

      contactInformatieData: [],
      isContactInformatieDataLoading: true,

      overOnsData: [],
      isOverOnsDataLoading: true,

      prismicPath: 'results[0].data',
    };
  },
  methods:{
    async fetchHeroSectie() {
      try {
        const apiEndpoint = 'https://streeds-voorwaarts.cdn.prismic.io/api/v2';
        const api = await Prismic.api(apiEndpoint);
        const response = await api.query(Prismic.Predicates.at('document.type', 'hero_sectie'));

        this.heroSectieData = response.results[0].data;
        console.log('fetchHeroSectie', this.heroSectieData)
      } catch (error) {
        console.error('Error fetching data from Prismic:', error);
      } finally {
        this.isHeroSectieDataLoading = false;
      }

    },
    async fetchIntroductie() {
      try {
        const apiEndpoint = 'https://streeds-voorwaarts.cdn.prismic.io/api/v2';
        const api = await Prismic.api(apiEndpoint);
        const response = await api.query(Prismic.Predicates.at('document.type', 'introductie'));

        this.introductieData = response.results[0].data;

        this.isDocumentLoading = false;
      } catch (error) {
        console.error('Error fetching data from Prismic:', error);
      }
    },
    async fetchUitgelichteActiviteiten() {
      try {
        const apiEndpoint = 'https://streeds-voorwaarts.cdn.prismic.io/api/v2';
        const api = await Prismic.api(apiEndpoint);
        const response = await api.query(Prismic.Predicates.at('document.type', 'uitgelichte_activiteiten'));
        this.uitgelichteActiviteitenData = response.results[0].data;
        this.isDocumentLoading = false;
      } catch (error) {
        console.error('Error fetching data from Prismic:', error);
      }
    },
    async fetchContactInformatie() {
      try {
        const apiEndpoint = 'https://streeds-voorwaarts.cdn.prismic.io/api/v2';
        const api = await Prismic.api(apiEndpoint);
        const response = await api.query(Prismic.Predicates.at('document.type', 'contactinformatie'));

        this.contactInformatieData = response.results;
        // console.log('fetchContactInformatie', this.contactInformatieData)

        this.isDocumentLoading = false;
      } catch (error) {
        console.error('Error fetching data from Prismic:', error);
      }
    },
    async fetchOverOns() {
      try {
        const apiEndpoint = 'https://streeds-voorwaarts.cdn.prismic.io/api/v2';
        const api = await Prismic.api(apiEndpoint);
        const response = await api.query(Prismic.Predicates.at('document.type', 'over_ons'));

        this.overOnsData = response.results;
        // console.log('fetchOverOns', this.overOnsData)

        this.isDocumentLoading = false;
      } catch (error) {
        console.error('Error fetching data from Prismic:', error);
      }
    },
  },
  async mounted() {
    await this.fetchHeroSectie();
    this.fetchIntroductie();
    this.fetchContactInformatie();
    this.fetchOverOns();
    this.fetchUitgelichteActiviteiten();
  }
}
</script>

<style scoped>

</style>