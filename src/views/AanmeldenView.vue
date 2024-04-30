<template>
  <view-hero title="Aanmelden" paragraph="Vul het formulier volledig in en wij nemen contact met je op."></view-hero>

  <section class="container my-5">
    <div class="row">
      <AanmeldenVoorwaarden class="col-12 col-md-6 col-lg-8"></AanmeldenVoorwaarden>
      <div class="col-12 col-md-6 col-lg-4">
        <aanmelden-tarieven class=""></aanmelden-tarieven>
        <AanmeldenForm></AanmeldenForm>
      </div>

    </div>

  </section>
</template>

<script>
import ViewHero from "@/lib/components/hero/ViewHero.vue";
import AanmeldenVoorwaarden from "@/lib/components/aanmelden/AanmeldenVoorwaarden.vue";
import AanmeldenTarieven from "@/lib/components/aanmelden/AanmeldenTarieven.vue";
import AanmeldenForm from "@/lib/components/aanmelden/AanmeldenForm.vue";

export default {
  name: "AanmeldenView",
  components: {AanmeldenForm, AanmeldenTarieven, AanmeldenVoorwaarden, ViewHero },

};
</script>

<style scoped>

</style>
