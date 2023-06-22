<template>
  <section class="contact-info">
    <h2 class="mb-4">Steeds Voorwaarts</h2>
    <section class="contact-info__item row">
      <strong class="col-4 col-sm-3">Telefoon:</strong>
      <p class="col-6">{{ telephone }}</p>
    </section>
    <section class="contact-info__item row">
      <strong class="col-4 col-sm-3">Email:</strong>
      <p class="col-6">{{ email }}</p>
    </section>
    <section class="contact-info__item row">
      <strong class="col-4 col-sm-3 col-xs-1">Adres:</strong>
      <p class="col-6">{{ address }} <br> <br>{{ city }}</p>
    </section>
    <section class="contact-info__item row">
      <strong class="col-4 col-sm-3">KVK:</strong>
      <p class="col-6">{{ kvkNumber }}</p>
    </section>
  </section>
</template>

<script>
export default {
  name: "ContactInformation",
  data() {
    return {
      address: "Burgemeester P. Kromplein 1,",
      city: "1657 AA Abbekerk",
      telephone: "06 12345678",
      email: "svwabbekerk1913@gmail.com",
      kvkNumber: "12345678"
    };
  }
};
</script>

<style scoped>
.contact-info {
  display: flex;
  flex-direction: column;
}

.contact-info__item {
  margin-bottom: 8px;
  display: flex;
}
.contact-info__item {
  display: flex;
}
.contact-info__item > p{
  text-decoration: underline var(--primary-button) 2px;
}
</style>