<template>
  <ViewHero title="Sportet x" paragraph="infomratie over deze sport"></ViewHero>

<!--  <BreadCrubmsComponent></BreadCrubmsComponent>-->
  <!--   <pre v-html="JSON.stringify(response, null, 2)"></pre>-->


  <SportDetailSection></SportDetailSection>

  <RoosterComponent></RoosterComponent>
</template>

<script>
import ViewHero from "@/lib/components/hero/ViewHero.vue";
import RoosterComponent from "@/lib/components/rooster/RoosterComponent.vue";
// import BreadCrubmsComponent from "@/lib/components/breadcrums/BreadCrubmsComponent.vue";
import SportDetailSection from "@/lib/components/sporten/detail/SportDetailSection.vue";

export default {
  name: "SportenView",
  components: {SportDetailSection,
    // BreadCrubmsComponent,
    ViewHero, RoosterComponent},
  data() {
    return {
      response: null
    };
  },
  methods: {
    // async getContent() {
    //   // Query the API and assign the response to "response"
    //   const response = await this.$prismic.client.query('seniorengym')
    //   $prismic.client.getByUID('blog-post', 'hello-world')
    //   this.response = response
    // }
  },
  created() {
    // const uid = this.$route.params.uid || this.$route.path.split('/').pop();

    // Call the API query method
    // this.getContent(uid)
  }
  
}
</script>

<style scoped>
  
</style>