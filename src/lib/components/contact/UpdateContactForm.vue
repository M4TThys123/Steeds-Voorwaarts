<template>
    <v-card class="mx-auto mt-5 mt-sm-0 " elevation="2" max-width="600" rounded="xl">
      <v-card-title class="text-h5"><h2 class="mb-4">Contact</h2></v-card-title>

      <v-card-text>
        <v-form ref="contactForm" v-model="isFormValid" @submit.prevent="submitContactForm">
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

          <!--
            Honeypot tegen spambots: onzichtbaar voor mensen, maar bots vullen
            doorgaans elk invoerveld in. Is dit veld gevuld, dan negeren we de inzending.
          -->
          <input
              v-model="honeypot"
              type="text"
              name="botcheck"
              tabindex="-1"
              autocomplete="off"
              aria-hidden="true"
              class="honeypot-field"
          />

          <!-- hCaptcha ("ben jij een computer?"-check, server-side gevalideerd door Web3Forms) -->
          <div v-if="hcaptchaSiteKey" ref="hcaptcha" class="mb-2"></div>
        </v-form>
      </v-card-text>

      <!-- Submit Button -->
      <v-card-actions>
        <v-btn
            class="custom-btn mono px-4"
            rounded
            :loading="isSubmitting"
            :disabled="isSubmitting"
            @click="submitContactForm"
            style="color: white !important; background-color: #398070; text-transform: none;"
        >
          <v-icon left size="small" class="mr-2">mdi-send</v-icon>
          <span class="text-white">Verzenden</span>
        </v-btn>
      </v-card-actions>
    </v-card>

    <!-- Snackbar: succes -->
    <v-snackbar
        v-model="showSnackbar"
        :timeout="5000"
        color="success"
        location="top right"
    >
      Bedankt voor je bericht! We nemen zo snel mogelijk contact met je op.
      <template #actions>
        <v-btn color="white" variant="text" @click="showSnackbar = false">Sluiten</v-btn>
      </template>
    </v-snackbar>

    <!-- Snackbar: fout -->
    <v-snackbar
        v-model="showError"
        :timeout="6000"
        color="error"
        location="top right"
    >
      {{ errorMessage }}
      <template #actions>
        <v-btn color="white" variant="text" @click="showError = false">Sluiten</v-btn>
      </template>
    </v-snackbar>
</template>

<script>
import axios from "axios";

export default {
  name: "UpdatedContactForm",
  data() {
    return {
      name: "",
      email: "",
      message: "",
      honeypot: "",
      isSubmitting: false,
      isFormValid: false,
      showSnackbar: false,
      showError: false,
      errorMessage: "",
      hcaptchaToken: "",
      hcaptchaWidgetId: null,
      requiredRule: (v) => !!v || "Dit veld is verplicht.",
      emailRule: (v) =>
          /.+@.+\..+/.test(v) || "Voer een geldig e-mailadres in.",
    };
  },
  computed: {
    // Web3Forms access key uit de omgeving (.env.local). Publiek, geen geheim.
    accessKey() {
      return process.env.VUE_APP_WEB3FORMS_ACCESS_KEY || "";
    },
    // Gedeelde hCaptcha-sleutel van Web3Forms: zij valideren 'm server-side, gratis en
    // zonder secret. Te overschrijven met een eigen sleutel via VUE_APP_HCAPTCHA_SITEKEY.
    hcaptchaSiteKey() {
      return process.env.VUE_APP_HCAPTCHA_SITEKEY || "50b2fe65-b00b-4b9e-ad62-3ba471098be2";
    },
  },
  mounted() {
    this.loadHcaptcha();
  },
  methods: {
    async submitContactForm() {
      const { valid } = await this.$refs.contactForm.validate();
      if (!valid) return;

      // Honeypot gevuld => vrijwel zeker een bot. Doe alsof het lukte, maar verstuur niets.
      if (this.honeypot) {
        this.showSnackbar = true;
        this.resetForm();
        return;
      }

      if (!this.accessKey) {
        this.errorMessage =
            "Het formulier is nog niet geconfigureerd. Mail ons gerust direct op svwabbekerk1913@gmail.com.";
        this.showError = true;
        return;
      }

      // Als de bot-check actief is, moet er een geldig token zijn.
      if (this.hcaptchaSiteKey && !this.hcaptchaToken) {
        this.errorMessage = "Bevestig eerst dat je geen robot bent.";
        this.showError = true;
        return;
      }

      this.isSubmitting = true;

      const payload = {
        access_key: this.accessKey,
        subject: `Nieuw contactbericht via website — ${this.name}`,
        from_name: "Contactformulier steedsvoorwaarts.nl",
        replyto: this.email,
        Naam: this.name,
        "E-mailadres": this.email,
        Bericht: this.message,
        "h-captcha-response": this.hcaptchaToken,
        botcheck: this.honeypot,
      };

      try {
        const response = await axios.post(
            "https://api.web3forms.com/submit",
            payload,
            { headers: { "Content-Type": "application/json", Accept: "application/json" } }
        );

        if (response.data && response.data.success) {
          this.showSnackbar = true;
          this.resetForm();
        } else {
          throw new Error((response.data && response.data.message) || "Onbekende fout");
        }
      } catch (error) {
        console.error("Contactbericht verzenden mislukt:", error);
        this.errorMessage =
            "Er ging iets mis bij het verzenden. Probeer het later opnieuw of mail ons direct op svwabbekerk1913@gmail.com.";
        this.showError = true;
      } finally {
        this.isSubmitting = false;
        this.resetHcaptcha();
      }
    },

    resetForm() {
      this.name = "";
      this.email = "";
      this.message = "";
      this.honeypot = "";
      this.$refs.contactForm.reset();
    },

    // --- hCaptcha (door Web3Forms gevalideerd) ---
    loadHcaptcha() {
      if (!this.hcaptchaSiteKey) return;

      if (window.hcaptcha) {
        this.renderHcaptcha();
        return;
      }

      const scriptId = "hcaptcha-script";
      // Globale callback die hCaptcha aanroept zodra de library klaar is.
      window.onloadHCaptchaCallback = () => this.renderHcaptcha();

      if (document.getElementById(scriptId)) return;

      const script = document.createElement("script");
      script.id = scriptId;
      script.src =
          "https://js.hcaptcha.com/1/api.js?onload=onloadHCaptchaCallback&render=explicit";
      script.async = true;
      script.defer = true;
      document.head.appendChild(script);
    },

    renderHcaptcha() {
      if (!window.hcaptcha || !this.$refs.hcaptcha) return;
      // Voorkom dubbel renderen.
      if (this.hcaptchaWidgetId !== null) return;

      this.hcaptchaWidgetId = window.hcaptcha.render(this.$refs.hcaptcha, {
        sitekey: this.hcaptchaSiteKey,
        callback: (token) => {
          this.hcaptchaToken = token;
        },
        "error-callback": () => {
          this.hcaptchaToken = "";
        },
        "expired-callback": () => {
          this.hcaptchaToken = "";
        },
      });
    },

    resetHcaptcha() {
      this.hcaptchaToken = "";
      if (window.hcaptcha && this.hcaptchaWidgetId !== null) {
        window.hcaptcha.reset(this.hcaptchaWidgetId);
      }
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

/* Honeypot: volledig verborgen voor echte gebruikers, wel aanwezig in de DOM voor bots. */
.honeypot-field {
  position: absolute;
  left: -9999px;
  top: -9999px;
  width: 1px;
  height: 1px;
  opacity: 0;
  pointer-events: none;
}
</style>
