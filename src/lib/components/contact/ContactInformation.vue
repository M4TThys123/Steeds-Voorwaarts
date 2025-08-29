<template>
  <section class="contact-info">
    <h3 class="mb-4 xsmall-heading">Steeds Voorwaarts Abbekerk</h3>
    <div class="mono">
      <dl class="contact-info__list">
        <div class="contact-info__item">
          <dt>
            <v-icon
              color="black"
              class="mr-2"
              size="large"
              @click="callPhone(telephone)"
              style="cursor: pointer;"
            >
              mdi-phone
            </v-icon>
          </dt>
          <dd>
            <!-- Nieuw: duidelijke label wie je belt -->
            <div class="contact-person">
              {{ chairTitle }} {{ chairName }}
            </div>
            <a @click.prevent="callPhone(telephone)" href="#">
              <v-btn
                text
                style="background-color: transparent; box-shadow: none; text-transform: none;"
                :aria-label="`Bel ${chairTitle} ${chairName} op ${telephone}`"
              >
                {{ telephone }}
              </v-btn>
            </a>
          </dd>
        </div>

        <div class="contact-info__item">
          <dt>
            <v-icon
              color="black"
              class="mr-2"
              size="large"
              @click="sendEmail(email)"
              style="cursor: pointer;"
            >
              mdi-email
            </v-icon>
          </dt>
          <dd>
            <a @click.prevent="sendEmail(email)" href="#">
              <v-btn text style="background-color: transparent; box-shadow: none; text-transform: none;">
                {{ email }}
              </v-btn>
            </a>
          </dd>
        </div>

        <div class="contact-info__item">
          <dt>
            <v-icon
              color="black"
              class="mr-2"
              size="large"
              @click="openInGoogleMaps(address)"
              style="cursor: pointer;"
            >
              mdi-map-marker
            </v-icon>
          </dt>
          <dd @click="openInGoogleMaps(address)">
            <v-btn text style="background-color: transparent; box-shadow: none; text-transform: none; text-align: left">
              {{ address.street }} <br>
              {{ address.postalcode }} {{ address.city }}
            </v-btn>
          </dd>
        </div>

        <div class="contact-info__item">
          <dt>
            <v-icon
              color="black"
              class="mr-2"
              size="large"
              @click="openInGoogleMaps(postaddress)"
              style="cursor: pointer;"
            >
              mdi-home-map-marker
            </v-icon>
          </dt>
          <dd @click="openInGoogleMaps(postaddress)">
            <v-btn text style="background-color: transparent; box-shadow: none; text-transform: none; text-align: left">
              {{ postaddress.street }} <br>
              {{ postaddress.postalcode }} {{ postaddress.city }}
            </v-btn>
          </dd>
        </div>

        <div class="contact-info__item">
          <dt>
            <v-icon
              color="black"
              class="mr-2"
              size="large"
              @click="handleCopyIban"
              style="cursor: pointer;"
            >
              mdi-bank
            </v-icon>
          </dt>
          <dd @click="handleCopyIban" class="copy-iban">
            <v-btn
              text
              style="background-color: transparent; box-shadow: none; text-transform: none;"
              :class="{ 'text-copied': copied }"
              :aria-label="`Kopieer IBAN ${iban}`"
            >
              {{ iban }}
              <v-icon
                color="black"
                class="ml-2"
                size="x-small"
                style="cursor: pointer;"
                :class="{ 'icon-copied': copied }"
              >
                mdi-content-copy
              </v-icon>
            </v-btn>
          </dd>
        </div>
      </dl>
    </div>
  </section>
</template>

<script>
import Prismic from "prismic-javascript";

export default {
  name: "ContactInformation",
  data() {
    return {
      copied: false,
      address: { street: null, postalcode: null, city: null },
      postaddress: { street: null, postalcode: null, city: null },
      telephone: null,
      email: null,
      iban: null,
      chairTitle: 'Voorzitter',
      chairName: 'Lucie Boon/Mulder',
      contactInformatieData: [],
      isContactInformatieDataLoading: true,
    };
  },
  methods: {
    async fetchContactInformatie() {
      try {
        const apiEndpoint = 'https://streeds-voorwaarts.cdn.prismic.io/api/v2';
        const api = await Prismic.api(apiEndpoint);
        const response = await api.query(Prismic.Predicates.at('document.type', 'contactinformatie'));

        this.contactInformatieData = response.results[0].data;

        // Adres
        this.address.street = this.contactInformatieData.adres?.[0]?.straat || null;
        this.address.postalcode = this.contactInformatieData.adres?.[0]?.postcode || null;
        this.address.city = this.contactInformatieData.adres?.[0]?.stad || null;

        // Postadres
        this.postaddress.street = this.contactInformatieData.post_adres?.[0]?.straat || null;
        this.postaddress.postalcode = this.contactInformatieData.post_adres?.[0]?.postcode || null;
        this.postaddress.city = this.contactInformatieData.post_adres?.[0]?.stad || null;

        this.telephone = this.contactInformatieData.telefoonnummer || null;
        this.chairName = this.contactInformatieData.voorzitter_naam || null;
        this.email = this.contactInformatieData.email || null;
        this.iban = this.contactInformatieData.bank || null;

        // Optioneel: probeer voorzitter uit Prismic te lezen als het veld bestaat
        // Pas 'voorzitter' en/of 'voorzitter_naam' aan naar jullie echte veldnamen indien anders.
        this.chairName =
          this.contactInformatieData.voorzitter_naam ||
          this.contactInformatieData.voorzitter?.[0]?.text ||
          this.chairName;

        this.isContactInformatieDataLoading = false;
      } catch (error) {
        console.error('Error fetching data from Prismic:', error);
      }
    },

    openInGoogleMaps(address) {
      const query = `${address.street}, ${address.postalcode}, ${address.city}`;
      const url = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
      window.open(url, '_blank');
    },
    handleCopyIban() {
      this.copyIban();
      this.copied = true;
      setTimeout(() => { this.copied = false; }, 1000);
    },
    copyIban() {
      const iban = this.iban;
      navigator.clipboard.writeText(iban).then(() => {});
    },
    callPhone(phoneNumber) {
      window.location.href = `tel:${phoneNumber}`;
    },
    sendEmail(emailAddress) {
      window.location.href = `mailto:${emailAddress}`;
    },
  },
  mounted() {
    this.fetchContactInformatie();
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
  margin-bottom: 12px;
  align-items: center;
}

.contact-info__item dt {
  margin-right: 8px;
  font-weight: bold;
  text-align: left;
}

.contact-info__item dd {
  margin: 0;
  font-size: 16px;
  cursor: pointer;
}

/* Nieuw: subtiele label-styling voor wie je belt */
.contact-person {
  font-weight: 600;
  line-height: 1.2;
  margin-bottom: 2px;
  padding: 0 16px;
}



dl > * {
  font-size: 0.75rem;
}

.button-copied {
  background-color: green !important;
  color: white !important;
}

.icon-copied, .text-copied {
  color: var(--green-color) !important;
}
</style>
