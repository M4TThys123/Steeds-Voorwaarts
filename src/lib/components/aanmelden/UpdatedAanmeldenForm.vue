<template>
    <v-card class="mx-auto" elevation="2" max-width="900" rounded="xl">
      <v-card-title class="text-h5">
        <h2 class="mb-2">Aanmelden</h2>
      </v-card-title>

      <v-card-text>
        <v-form ref="form" v-model="isFormValid" @submit.prevent="submitForm">
          <!-- Optie: Proefles of Sport -->
          <v-radio-group
              v-model="aanmeldingType"
              :rules="[requiredRule]"
              label="Waarvoor wil je je aanmelden?"
              inline
              density="compact"
              class="mb-2"
          >
            <v-radio label="Proefles" value="proefles" class="mr-4"></v-radio>
            <v-radio label="Sport" value="sport"></v-radio>
          </v-radio-group>

          <v-row dense>
            <!-- Naam -->
            <v-col cols="12" md="6">
              <v-text-field
                  label="Naam"
                  v-model="naam"
                  :rules="[requiredRule]"
                  variant="outlined"
                  density="compact"
              ></v-text-field>
            </v-col>

            <!-- E-mailadres -->
            <v-col cols="12" md="6">
              <v-text-field
                  label="E-mailadres"
                  v-model="email"
                  :rules="[requiredRule, emailRule]"
                  type="email"
                  variant="outlined"
                  density="compact"
              ></v-text-field>
            </v-col>

            <!-- Telefoonnummer -->
            <v-col cols="12" md="6">
              <v-text-field
                  label="Telefoonnummer"
                  v-model="telefoon"
                  :rules="[requiredRule, phoneRule]"
                  type="tel"
                  variant="outlined"
                  density="compact"
              ></v-text-field>
            </v-col>

            <!-- Geboortedatum -->
            <v-col cols="12" md="6">
              <v-text-field
                  label="Geboortedatum"
                  v-model="geboortedatum"
                  :rules="[requiredRule]"
                  type="date"
                  variant="outlined"
                  density="compact"
              ></v-text-field>
            </v-col>

            <!-- Straat en huisnummer -->
            <v-col cols="12" md="6">
              <v-text-field
                  label="Straat en huisnummer"
                  v-model="straat"
                  :rules="[requiredRule]"
                  variant="outlined"
                  density="compact"
              ></v-text-field>
            </v-col>

            <!-- Postcode + Woonplaats -->
            <v-col cols="12" md="6">
              <v-row dense>
                <v-col cols="5">
                  <v-text-field
                      label="Postcode"
                      v-model="postcode"
                      :rules="[requiredRule, postcodeRule]"
                      variant="outlined"
                      density="compact"
                  ></v-text-field>
                </v-col>
                <v-col cols="7">
                  <v-text-field
                      label="Woonplaats"
                      v-model="woonplaats"
                      :rules="[requiredRule]"
                      variant="outlined"
                      density="compact"
                  ></v-text-field>
                </v-col>
              </v-row>
            </v-col>

            <!-- Activiteit -->
            <v-col cols="12" md="6">
              <v-select
                  label="Activiteit"
                  v-model="activiteit"
                  :items="activiteiten"
                  :rules="[requiredRule]"
                  variant="outlined"
                  density="compact"
              ></v-select>
            </v-col>

            <!-- Opmerkingen -->
            <v-col cols="12" md="6">
              <v-textarea
                  label="Opmerkingen"
                  v-model="opmerkingen"
                  rows="2"
                  variant="outlined"
                  density="compact"
              ></v-textarea>
            </v-col>
          </v-row>

          <!-- Privacy -->
          <v-checkbox
              label="Ik ga akkoord met de privacyverklaring"
              v-model="privacy"
              :rules="[privacyRule]"
              density="compact"
              class="mt-0"
          ></v-checkbox>

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
        </v-form>
      </v-card-text>

      <!-- hCaptcha links, verzendknop rechts -->
      <v-card-actions class="flex-wrap px-4 pb-4">
        <!-- hCaptcha ("ben jij een computer?"-check, server-side gevalideerd door Web3Forms) -->
        <div v-if="hcaptchaSiteKey" ref="hcaptcha" class="mb-2"></div>
        <v-spacer></v-spacer>
        <v-btn
            class="custom-btn mono px-4"
            rounded
            :loading="isSubmitting"
            :disabled="isSubmitting"
            @click="submitForm"
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
      Bedankt voor je aanmelding! We nemen zo snel mogelijk contact met je op.
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
  name: "UpdatedAanmeldenForm",
  data() {
    return {
      aanmeldingType: "",
      naam: "",
      email: "",
      telefoon: "",
      geboortedatum: "",
      straat: "",
      postcode: "",
      woonplaats: "",
      activiteit: "",
      opmerkingen: "",
      privacy: false,
      honeypot: "",
      isSubmitting: false,
      isFormValid: false,
      showSnackbar: false,
      showError: false,
      errorMessage: "",
      hcaptchaToken: "",
      hcaptchaWidgetId: null,
      activiteiten: [
        "Kleuterdans",
        "Hip hop",
        "Demo Dans",
        "Fit en Vitaal",
        "Freerunning",
        "Bootcamp",
        "Bootcamp strippenkaart",
        "Fysiogym",
      ],
      requiredRule: (v) => !!v || "Dit veld is verplicht.",
      emailRule: (v) =>
          /.+@.+\..+/.test(v) || "Voer een geldig e-mailadres in.",
      phoneRule: (v) =>
          /^[0-9+\-\s()]{8,}$/.test(v) || "Voer een geldig telefoonnummer in.",
      postcodeRule: (v) =>
          /^[1-9][0-9]{3}\s?[a-zA-Z]{2}$/.test(v) ||
          "Voer een geldige postcode in (bijv. 1234 AB).",
      privacyRule: (v) =>
          !!v || "Je moet akkoord gaan met de privacyverklaring.",
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
    async submitForm() {
      const { valid } = await this.$refs.form.validate();
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
        subject: `Nieuwe aanmelding via website — ${this.naam}`,
        from_name: "Aanmeldformulier steedsvoorwaarts.nl",
        replyto: this.email,
        "Type aanmelding": this.aanmeldingType === "proefles" ? "Proefles" : "Sport",
        Naam: this.naam,
        "E-mailadres": this.email,
        Telefoonnummer: this.telefoon,
        Geboortedatum: this.geboortedatum,
        Adres: `${this.straat}, ${this.postcode} ${this.woonplaats}`,
        Activiteit: this.activiteit,
        Opmerkingen: this.opmerkingen || "—",
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
        console.error("Aanmelding verzenden mislukt:", error);
        this.errorMessage =
            "Er ging iets mis bij het verzenden. Probeer het later opnieuw of mail ons direct op svwabbekerk1913@gmail.com.";
        this.showError = true;
      } finally {
        this.isSubmitting = false;
        this.resetHcaptcha();
      }
    },

    resetForm() {
      this.aanmeldingType = "";
      this.naam = "";
      this.email = "";
      this.telefoon = "";
      this.geboortedatum = "";
      this.straat = "";
      this.postcode = "";
      this.woonplaats = "";
      this.activiteit = "";
      this.opmerkingen = "";
      this.privacy = false;
      this.honeypot = "";
      this.$refs.form.reset();
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
