 <template>
    <v-container class="py-5">
      <v-card class="mx-auto" elevation="2" max-width="600" rounded="xl">
        <v-card-title class="text-h5"><h2 class="mb-4">Aanmelden</h2></v-card-title>


        <v-card-text>
          <v-form ref="form" v-model="isFormValid">
            <!-- Naam -->
            <v-text-field
                label="Naam"
                v-model="naam"
                :rules="[requiredRule]"
                outlined
                dense
                required
                variant="outlined"
                class="mb-2"
            ></v-text-field>

            <!-- E-mailadres -->
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

            <!-- Telefoonnummer -->
            <v-text-field
                label="Telefoonnummer"
                v-model="telefoon"
                :rules="[requiredRule, phoneRule]"
                outlined
                dense
                type="tel"
                required
                variant="outlined"
                class="mb-2"
            ></v-text-field>

            <!-- Activiteit -->
            <v-select
                label="Activiteit"
                v-model="activiteit"
                :items="activiteiten"
                :rules="[requiredRule]"
                outlined
                dense
                required
                variant="outlined"
                class="mb-2"
            ></v-select>

            <!-- Opmerkingen -->
            <v-textarea
                label="Opmerkingen"
                v-model="opmerkingen"
                outlined
                dense
                rows="3"
                variant="outlined"
                class="mb-1"
            ></v-textarea>

            <!-- Privacy -->
            <v-checkbox
                label="Ik ga akkoord met de privacyverklaring"
                v-model="privacy"
                :rules="[privacyRule]"
                dense
                required
                class="mb-3"
            ></v-checkbox>
          </v-form>
        </v-card-text>

        <!-- Verzenden -->
        <v-card-actions>
          <v-btn
              class="custom-btn mono px-4"
              rounded
              @click="submitForm"
              style="color: white !important; background-color: #398070; text-transform: none;"
          >
            <v-icon left size="small" class="mr-2">mdi-send</v-icon>
              <span class="text-white">Verzenden</span>
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
    </v-container>
  </template>

  <script>
  export default {
    name: "UpdatedAanmeldenForm",
    data() {
      return {
        naam: "",
        email: "",
        telefoon: "",
        activiteit: "",
        opmerkingen: "",
        privacy: false,
        isSubmitting: false,
        isFormValid: false,
        showSnackbar: false,
        activiteiten: [
          "Kleuterdans",
          "Hip hop",
          "Fun Moves",
          "Bootcamp",
          "Fysio Gym",
          "Seniorengym",
        ],
        requiredRule: (v) => !!v || "Dit veld is verplicht.",
        emailRule: (v) =>
            /.+@.+\..+/.test(v) || "Voer een geldig e-mailadres in.",
        phoneRule: (v) =>
            /^[0-9]+$/.test(v) || "Voer een geldig telefoonnummer in.",
        privacyRule: (v) =>
            !!v || "Je moet akkoord gaan met de privacyverklaring.",
      };
    },
    methods: {
      submitForm() {
        if (!this.$refs.form.validate()) return;

        this.isSubmitting = true;

        setTimeout(() => {
          this.isSubmitting = false;
          this.showSnackbar = true;
          this.resetForm();
        }, 2000); // Simuleer een API-verzoek
      },
      resetForm() {
        this.naam = "";
        this.email = "";
        this.telefoon = "";
        this.activiteit = "";
        this.opmerkingen = "";
        this.privacy = false;
        this.$refs.form.reset();
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
  .custom-btn .v-btn__content{
    color: white!important;
  }
  </style>