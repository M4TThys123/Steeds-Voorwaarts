<template>
  <section class="contact-form__section">
    <h2 class="mb-4">Direct contact opnemen</h2>

    <form @submit.prevent="onSubmit">
      <section class="mb-3">
        <label for="name" class="form-label">
          <strong>Naam:</strong>
        </label>
        <input type="text" class="form-control" id="name" v-model="name" required>
      </section>
      <section class="mb-3">
        <label for="email" class="form-label">
          <strong>Email:</strong>
        </label>
        <input type="email" class="form-control" id="email" v-model="email" required>
      </section>
      <section class="mb-3">
        <label for="message" class="form-label">
          <strong>Bericht:</strong>
        </label>
        <textarea class="form-control" id="message" v-model="message" required></textarea>
      </section>
      <send-button :disabled="isFormSubmitted" type="submit" :class="{ 'loading': isFormSubmitted }">
        <i v-if="isFormSubmitted" class="fa fa-spinner fa-spin"></i>
        <span v-else>Send</span>
      </send-button>
    </form>

    <div v-if="showSuccessMessage" class="success-message">
      <p>Form submitted successfully!</p>
    </div>
  </section>
</template>

<script>
import Swal from 'sweetalert2';
import SendButton from "@/lib/components/SendButton.vue";

export default {
  name: "ContactForm",
  components: { SendButton },
  data() {
    return {
      name: "",
      email: "",
      message: "",
      isFormSubmitted: false,
      showSuccessMessage: false,
    };
  },
  methods: {
    onSubmit() {
      // Disable send button and show loading spinner
      this.isFormSubmitted = true;

      // Simulating form submission delay (remove this in your actual code)
      setTimeout(() => {
        // Clear form fields after successful submission
        this.name = "";
        this.email = "";
        this.message = "";

        // Show success message using Swal
        Swal.fire({
          icon: 'success',
          title: 'Success!',
          text: 'Form submitted successfully!',
        });

        // Enable send button and hide loading spinner
        this.isFormSubmitted = false;

        // Show the success message div
        this.showSuccessMessage = true;

        // Hide the success message after 3 seconds
        setTimeout(() => {
          this.showSuccessMessage = false;
        }, 3000);
      }, 2000); // Simulating a 2-second delay for demonstration purposes
    },
  },
};
</script>

<style scoped>
.contact-form__section {
  padding: 2em;
  background: #ffffff;
  border-radius: 3px;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
}

.labels > strong {
  color: #0096d7;
}

.success-message {
  padding: 1em;
  background: #4caf50;
  color: #ffffff;
  border-radius: 3px;
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
