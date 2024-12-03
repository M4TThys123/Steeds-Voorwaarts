<template>
  <div class="container mt-4">
    <div class="row">
      <div class="col-md-6 mx-auto">
        <form @submit.prevent="submitForm">
          <div class="form-group">
            <label for="naam">Naam</label>
            <input type="text" class="form-control" id="naam" v-model="naam" required>
          </div>
          <div class="form-group">
            <label for="email">E-mailadres</label>
            <input type="email" class="form-control" id="email" v-model="email" required>
          </div>
          <div class="form-group">
            <label for="telefoon">Telefoonnummer</label>
            <input type="tel" class="form-control" id="telefoon" v-model="telefoon" required>
          </div>
          <div class="form-group">
            <label for="activiteit">Activiteit</label>
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
          <div class="form-group">
            <label for="opmerkingen">Opmerkingen</label>
            <textarea class="form-control" id="opmerkingen" v-model="opmerkingen"></textarea>
          </div>
          <div class="form-check">
            <input type="checkbox" class="form-check-input" id="privacy" v-model="privacy" required>
            <label class="form-check-label" for="privacy">Ik ga akkoord met de privacyverklaring</label>
          </div>
          <button type="submit" class="btn btn-primary mt-3">Aanmelden</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AanmeldenForm01",
  data() {
    return {
      naam: "",
      email: "",
      telefoon: "",
      activiteit: "",
      opmerkingen: "",
      privacy: false
    };
  },
  methods: {
    submitForm() {
      // Hier zou je de logica kunnen plaatsen om het formulier te verwerken, zoals het verzenden van een e-mail naar de vereniging
      // Reset het formulier na het indienen
      this.naam = "";
      this.email = "";
      this.telefoon = "";
      this.activiteit = "";
      this.opmerkingen = "";
      this.privacy = false;
    }
  }
}
</script>

<style scoped>

</style>