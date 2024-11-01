<template>
  <v-list-item>
    <v-list-item-content>
      <v-list-item-title class="font-weight-bold">{{ label }}:</v-list-item-title>
      <v-list-item-subtitle>
        <template v-if="type === 'phone'">
          <a @click.prevent="callPhone" class="contact-link">{{ value }}</a>
        </template>
        <template v-else-if="type === 'email'">
          <a @click.prevent="sendEmail" class="contact-link">{{ value }}</a>
        </template>
        <template v-else-if="type === 'address'">
          <span @click="openInGoogleMaps(value)" class="contact-link">
            {{ value.street }} <br>
            {{ value.postalcode }} {{ value.city }}
          </span>
        </template>
        <template v-else-if="type === 'iban'">
          <span @click="copyIban" class="contact-link">{{ value }}</span>
        </template>
      </v-list-item-subtitle>
    </v-list-item-content>
  </v-list-item>
</template>

<script>
export default {
  name: "UpdatedContactItem02",
  props: {
    label: String,
    value: [String, Object],
    type: String,
  },
  methods: {
    openInGoogleMaps(address) {
      const query = `${address.street}, ${address.postalcode} ${address.city}`;
      const url = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
      window.open(url, '_blank');
    },
    copyIban() {
      navigator.clipboard.writeText(this.value).then(() => {
        alert("IBAN copied to clipboard!");
      });
    },
    callPhone() {
      window.location.href = `tel:${this.value}`;
    },
    sendEmail() {
      window.location.href = `mailto:${this.value}`;
    },
  },
};
</script>

<style scoped>
.contact-link {
  text-decoration: underline;
  cursor: pointer;
}
</style>