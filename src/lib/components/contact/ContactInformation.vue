<template>
  <section class="contact-info">
    <h3 class="mb-4 xsmall-heading">Steeds Voorwaarts Abbekerk</h3>
    <div class="mono">
      <dl class="contact-info__list">
        <div class="contact-info__item">
          <dt>Telefoon:</dt>
          <dd>
            <a @click.prevent="callPhone(telephone)" href="#">
              {{ telephone }}
            </a>
          </dd>
        </div>
        <div class="contact-info__item">
          <dt>Email:</dt>
          <dd>
            <a @click.prevent="sendEmail(email)" href="#">
              {{ email }}
            </a>
          </dd>
        </div>
        <div class="contact-info__item">
          <dt>Adres:</dt>
          <dd @click="openInGoogleMaps(address)">
            {{ address.street }} <br>
            {{ address.postalcode }} {{ address.city }}
          </dd>
        </div>
        <div class="contact-info__item">
          <dt>Postadres:</dt>
          <dd @click="openInGoogleMaps(postaddress)">
            {{ postaddress.street }} <br>
            {{ postaddress.postalcode }} {{ postaddress.city }}
          </dd>
        </div>
        <div class="contact-info__item">
          <dt>Iban:</dt>
          <dd @click="copyIban">{{ iban }}</dd>
        </div>
      </dl>
    </div>
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
      iban: "NL36INGB0004638688"
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

.contact-info__list {
  display: flex;
  flex-direction: column;
}

.contact-info__item {
  display: flex;
  align-items: baseline;
  margin-bottom: 12px; /* Increase space between rows for cleaner look */
}

/* Ensure consistent space between dt and dd */
.contact-info__item dt {
  min-width: 100px; /* Set a fixed width for dt to align dd elements */
  margin-right: 16px; /* Adds spacing between dt and dd */
  font-weight: bold;
  text-align: left; /* Ensure left alignment */
}

/* Align dd elements consistently to the left of each row */
.contact-info__item dd {
  margin: 0;
  text-decoration: underline var(--primary-button) 2px;
  cursor: pointer; /* Indicate clickable items */
}

/* Apply the specified font size for all dl children */
dl > * {
  font-size: 0.75rem;
}

</style>
