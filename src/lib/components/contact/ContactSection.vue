<template>
  <section class="contact-section container">
    <div class="row ">
      <ContactInformation class="col-12 col-md-6"></ContactInformation>
      <ContactForm class="col-12 col-md-6"></ContactForm>
    </div>
  </section>
</template>

<script>
import ContactForm from "@/lib/components/contact/ContactForm.vue";
import ContactInformation from "@/lib/components/contact/ContactInformation.vue";

export default {
  name: "ContactSection",
  components: {ContactInformation, ContactForm}
}
</script>

<style scoped>

</style>