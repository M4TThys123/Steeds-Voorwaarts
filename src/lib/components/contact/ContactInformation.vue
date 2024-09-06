<template>
  <section class="contact-info">
    <h2 class="mb-4">Steeds Voorwaarts</h2>
    <section class="contact-info__item row">
      <strong class="col-4 col-sm-3">Telefoon:</strong>
      <a class="col-6" @click.prevent="callPhone(telephone)" href="#">
        {{ telephone }}
      </a>
    </section>
    <section class="contact-info__item row">
      <strong class="col-4 col-sm-3">Email:</strong>
      <a class="col-6" @click.prevent="sendEmail(email)" href="#">
        {{ email }}
      </a>
    </section>
    <section class="contact-info__item row">
      <strong class="col-4 col-sm-3 col-xs-1">Adres:</strong>
      <p class="col-6" @click="openInGoogleMaps(address)">
        {{ address.street }} <br>
        {{ address.postalcode }} {{ address.city }}
      </p>
    </section>
    <section class="contact-info__item row">
      <strong class="col-4 col-sm-3 col-xs-1">Postadres:</strong>
      <p class="col-6" @click="openInGoogleMaps(postaddress)">
        {{ postaddress.street }} <br>
        {{ postaddress.postalcode }} {{ postaddress.city }}
      </p>
    </section>
    <section class="contact-info__item row">
      <strong class="col-4 col-sm-3">Iban:</strong>
      <p @click="copyIban" class="col-6">{{ iban }}</p>
    </section>
  </section>
</template>

<script>
export default {
  name: "ContactInformation",
  data() {
    return {
      address: {
        street: "Burgemeester P. Kromplein 1",
        postalcode: "1657 AA",
        city: "Abbekerk"
      }, 
      postaddress: {
        street: "Zuideinde 4",
        postalcode: "1657 ED",
        city: "Abbekerk"
      }, 
      telephone: "06 12345678",
      email: "svwabbekerk1913@gmail.com",
      iban: " NL36INGB0004638688"
    };
  },
  methods: {
    openInGoogleMaps(address) {
      const query = `${address.street}, ${address.postalcode} ${address.city}`;
      const url = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
      window.open(url, '_blank');
    },
    copyIban() {
      navigator.clipboard.writeText(this.iban).then(() => {
      })
    },
    callPhone(phoneNumber) {
      window.location.href = `tel:${phoneNumber}`;
    },
    sendEmail(emailAddress) {
      window.location.href = `mailto:${emailAddress}`;
    },
  },
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

.contact-info__item > a{
  text-decoration: underline var(--primary-button) 2px !important;
}
.contact-info__item > p{
  text-decoration: underline var(--primary-button) 2px;
}
p.col-6 {
  cursor: pointer; /* Change cursor to pointer to indicate it's clickable */
}
</style>