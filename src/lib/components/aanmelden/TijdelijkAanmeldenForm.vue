<template>
  <v-card class="mx-auto email-aanmeld-card" elevation="2" max-width="600" rounded="xl">
    <v-card-title class="text-h5">
      <h2 class="mb-4">Aanmelden</h2>
    </v-card-title>

    <v-card-text>
      <p>
        Wil je je direct aanmelden of heb je een vraag? Klik op de knop hieronder om een e-mail te sturen naar onze vereniging.
      </p>
    </v-card-text>

    <v-card-actions>
      <v-btn
        class="custom-btn mono px-4"
        rounded
        :href="'mailto:svwabbekerk1913@gmail.com'"
        style="color: white !important; background-color: #398070; text-transform: none;"
      >
        <v-icon left size="small" class="mr-2">mdi-email</v-icon>
        <span class="text-white">Mail ons</span>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: "AanmeldenEmailCard",
};
</script>

<style scoped>
.email-aanmeld-card {
  padding: 16px;
}
.custom-btn {
  background-color: #398070 !important;
  color: #FFFFFF !important;
}
.custom-btn .v-icon {
  color: #FFFFFF !important;
}
.custom-btn .v-btn__content {
  color: white !important;
}
</style>
