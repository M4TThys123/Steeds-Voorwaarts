<template>
  <section class="contact-form__section my-5">
    <h2 class="mb-4">Aanmelden test</h2>

    <div class="">
        <form @submit.prevent="submitForm" class="">
          <div class="form-group mb-3">
            <label for="naam" class="form-label"><strong>Naam:</strong></label>
            <input type="text" class="form-control" id="naam" v-model="naam" required>
          </div>
          <div class="form-group mb-3">
            <label for="email" class="form-label"><strong>E-mailadres:</strong></label>
            <input type="email" class="form-control" id="email" v-model="email" required>
          </div>
          <div class="form-group mb-3">
            <label for="telefoon" class="form-label"><strong>Telefoonnummer:</strong></label>
            <input type="tel" class="form-control" id="telefoon" v-model="telefoon" required>
          </div>
          <div class="form-group mb-3">
            <label for="activiteit" class="form-label"><strong>Activiteit:</strong></label>
            <select class="form-control" id="activiteit" v-model="activiteit" required>
              <option disabled value="">Kies een activiteit</option>
              <option value="Kleuterdans">Kleuterdans</option>
              <option value="Hip hop">Hip hop</option>
              <option value="Fun Moves">Fun Moves</option>
              <option value="Bootcamp">Bootcamp</option>
              <option value="Fysio Gym">Fysio Gym</option>
              <option value="Seniorengym">Seniorengym</option>
            </select>
          </div>
          <div class="form-group mb-3">
            <label for="opmerkingen" class="form-label"><strong>Opmerkingen:</strong></label>
            <textarea class="form-control" id="opmerkingen" v-model="opmerkingen"></textarea>
          </div>
          <div class="form-check mb-3">
            <input type="checkbox" class="form-check-input" id="privacy" v-model="privacy" required>
            <label class="form-check-label" for="privacy">Ik ga akkoord met de privacyverklaring</label>
          </div>
<!--          <button type="submit" class="btn btn-primary mt-3 loading" :class="{ 'loading': isFormSubmitted }">-->
<!--            <i v-if="isFormSubmitted" class="fa fa-spinner fa-spin"></i>-->
<!--            <span v-else>Aanmelden</span>-->
<!--          </button>-->

          <SendButton></SendButton>
        </form>

    </div>
    <template>
      <!-- Your existing form code here -->

<v-snackbar
    v-model="showSnackbar"
    :timeout="2000"
    color="rgb(20, 21, 26)"
    rounded
>
  <v-icon class="mr-2" color="white">mdi-check-circle</v-icon>
  <span style="color: white;">Form submitted successfully!</span>
</v-snackbar>
    </template>
  </section>
</template>

<script>
import SendButton from "@/lib/components/SendButton.vue";

export default {
  name: "AanmeldenForm01",
  components: {SendButton},
  data() {
    return {
      naam: "",
      email: "",
      telefoon: "",
      activiteit: "",
      opmerkingen: "",
      privacy: false,
      isFormSubmitted: false,
      showSnackbar: false,
    };
  },
  methods: {
    submitForm() {
      // Hier zou je de logica kunnen plaatsen om het formulier te verwerken, zoals het verzenden van een e-mail naar de vereniging
      console.log("Formulier ingediend!");
      console.log("Naam:", this.naam);
      console.log("E-mailadres:", this.email);
      console.log("Telefoonnummer:", this.telefoon);
      console.log("Activiteit:", this.activiteit);
      console.log("Opmerkingen:", this.opmerkingen);
      console.log("Privacy akkoord:", this.privacy);
      // Reset het formulier na het indienen
      this.naam = "";
      this.email = "";
      this.telefoon = "";
      this.activiteit = "";
      this.opmerkingen = "";
      this.privacy = false;

      // Simulating form submission delay (remove this in your actual code)
      setTimeout(() => {
        // Enable send button and hide loading spinner
        this.isFormSubmitted = false;
        this.showSnackbar = true; // Add this line// Simulating a 2-second delay for demonstration purposes



      }, 2000);
    }
  }
}
</script>

<style scoped>
.contact-form__section {
  padding: 2em;
  background: #ffffff;
  border-radius: 3px;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 18px;
}

.form-group {
  margin-bottom: 1.5rem;
}
.form-label {
  display: block;
  margin-bottom: .5rem;
  color: #0096d7;
  font-weight: bold;
}
.loading {
  position: relative;
}
.loading i {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
