<template>
  <view-hero title="Aanmelden" paragraph="Vul het formulier volledig in en wij nemen contact met je op."></view-hero>

  <section class="container my-5">
    <div class="row">
      <div class="col-12 col-md-6 col-lg-8">
        <AanmeldenVoorwaarden :aanmeldenVoorwaardenData="aanmeldenVoorwaardenData"
                              :is-loading="isAanmeldenVoorwaardenDataLoading"
                              class="pb-10"/>


        <FacebookLink width="320px" class="py-10" />
      </div>
      <div class="col-12 col-md-6 col-lg-4">

        <UpdatedAanmeldenTarieven  :aanmelden-tarieven-data="aanmeldenTarievenData"
                                   :is-loading="isAanmeldenTarievenDataLoading"
                                   class="pb-10"/>

        <UpdatedAanmeldenForm/>
      </div>

    </div>

  </section>
</template>

<script>
import ViewHero from "@/lib/components/hero/ViewHero.vue";
import AanmeldenVoorwaarden from "@/lib/components/aanmelden/AanmeldenVoorwaarden.vue";
import FacebookLink from "@/lib/components/elements/FacebookLink.vue";

import Prismic from "prismic-javascript";
import UpdatedAanmeldenTarieven from "@/lib/components/aanmelden/UpdateAanmeldenTarieven.vue";
import UpdatedAanmeldenForm from "@/lib/components/aanmelden/UpdatedAanmeldenForm.vue";


export default {
  name: "AanmeldenView",
  components: {
    UpdatedAanmeldenForm,
    UpdatedAanmeldenTarieven, FacebookLink, AanmeldenVoorwaarden, ViewHero },
  data() {
    return {
      aanmeldenVoorwaardenData: [],
      isAanmeldenVoorwaardenDataLoading: true,

      aanmeldenTarievenData: [],
      isAanmeldenTarievenDataLoading: true,
    };
  },
  methods:{
    async fetchAanmeldenVoorwaarden() {
      try {
        const apiEndpoint = 'https://streeds-voorwaarts.cdn.prismic.io/api/v2';
        const api = await Prismic.api(apiEndpoint);
        const response = await api.query(Prismic.Predicates.at('document.type', 'verenigingsjaar'));

        this.aanmeldenVoorwaardenData = response.results[0].data;
      } catch (error) {
        console.error('Error fetching data from Prismic:', error);
      } finally {
        this.isAanmeldenVoorwaardenDataLoading = false;
      }
    },
    async fetchAanmeldenTarieven() {
      try {
        const apiEndpoint = 'https://streeds-voorwaarts.cdn.prismic.io/api/v2';
        const api = await Prismic.api(apiEndpoint);
        const response = await api.query(Prismic.Predicates.at('document.type', 'tarieven'));

        this.aanmeldenTarievenData = response.results[0].data;
      } catch (error) {
        console.error('Error fetching data from Prismic:', error);
      } finally {
        this.isAanmeldenTarievenDataLoading = false;
      }
    },
  },
  mounted() {
    this.fetchAanmeldenVoorwaarden();
    this.fetchAanmeldenTarieven();
  }
};
</script>

<style scoped>

</style>
