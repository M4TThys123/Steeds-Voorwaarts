<template>
  <section class="contact-section container">
    <UpdatedInformationSection :contact-informatie-data="contactInformatieData"
                               :is-contact-informatie-loading="isContactInformatieDataLoading"
                               :over-ons-data="overOnsData"
                               :is-over-ons-loading="isOverOnsDataLoading"
                               class="mb-5"/>

    <ContactOpnemenSection class="mb-5"/>
  </section>
</template>

<script>
import UpdatedInformationSection from "@/lib/components/contact/ContactInfromation/UpdatedInformationSection.vue";
import ContactOpnemenSection from "@/lib/components/home/ContactOpnemenSection.vue";

export default {
  name: "ContactSection",
  components: { UpdatedInformationSection, ContactOpnemenSection },
};
</script>

<style scoped></style>
