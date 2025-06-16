<template>
    <v-card class="mx-auto mt-5 mt-sm-0 " elevation="2" max-width="600" rounded="xl">
      <v-card-title class="text-h5"><h2 class="mb-4">Contact</h2></v-card-title>

      <v-card-text>
        <v-form ref="contactForm" v-model="isFormValid">
          <!-- Name -->
          <v-text-field
              label="Naam"
              v-model="name"
              :rules="[requiredRule]"
              outlined
              dense
              required
              variant="outlined"
              class="mb-2"
          ></v-text-field>

          <!-- Email -->
          <v-text-field
              label="E-mailadres"
              v-model="email"
              :rules="[requiredRule, emailRule]"
              outlined
              dense
              type="email"
              required
              variant="outlined"
              class="mb-2"
          ></v-text-field>

          <!-- Message -->
          <v-textarea
              label="Bericht"
              v-model="message"
              :rules="[requiredRule]"
              outlined
              dense
              rows="3"
              variant="outlined"
              class="mb-2"
          ></v-textarea>
        </v-form>
      </v-card-text>

      <!-- Submit Button -->
      <v-card-actions>
        <v-btn
            class="custom-btn mono px-4"
            rounded
            @click="submitContactForm"
            :disabled="isSubmitting"
            style="color: white !important; background-color: #398070; text-transform: none;"
        >
          <v-icon left size="small" class="mr-2">mdi-send</v-icon>
          <span class="text-white">
            <span v-if="!isSubmitting" class="text-white">Verzenden</span>
            <span v-else>Bezig...</span>
          </span>
        </v-btn>
      </v-card-actions>
    </v-card>

    <!-- Snackbar -->
    <v-snackbar
        v-model="showSnackbar"
        :timeout="3000"
        color="success"
        top
        right
    >
      Formulier succesvol ingediend!
      <v-btn color="white" text @click="showSnackbar = false">Sluiten</v-btn>
    </v-snackbar>
</template>

<script>
export default {
  name: "UpdatedContactForm",
  data() {
    return {
      name: "",
      email: "",
      message: "",
      isSubmitting: false,
      isFormValid: false,
      showSnackbar: false,
      requiredRule: (v) => !!v || "Dit veld is verplicht.",
      emailRule: (v) =>
          /.+@.+\..+/.test(v) || "Voer een geldig e-mailadres in.",
    };
  },
  methods: {
    submitContactForm() {
      if (!this.$refs.contactForm.validate()) return;

      this.isSubmitting = true;

      setTimeout(() => {
        this.isSubmitting = false;
        this.showSnackbar = true;
        this.resetForm();
      }, 2000); // Simulate API call
    },
    resetForm() {
      this.name = "";
      this.email = "";
      this.message = "";
      this.$refs.contactForm.reset();
    },
  },
};
</script>

<style scoped>
.v-card {
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