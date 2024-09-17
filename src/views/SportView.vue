<template>
  <ViewHero title="Sportet x" paragraph="infomratie over deze sport"></ViewHero>

  <!-- <pre v-html="JSON.stringify(response, null, 2)"></pre> -->
</template>

<script>
import ViewHero from "@/lib/components/hero/ViewHero.vue";

export default {
  name: "SportenView",
  components: {ViewHero},
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