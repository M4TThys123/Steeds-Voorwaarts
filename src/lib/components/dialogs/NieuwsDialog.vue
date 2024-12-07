<template>
  <v-dialog :model-value="isOpen" @update:model-value="updateIsOpen" max-width="600px" >
    <v-card>
      <v-card-title class="pt-4">
        <h2 class="xsmall-heading">
          {{ data.onderwerp }}
        </h2>
      </v-card-title>
      <v-card-text>
        <PrismicRichText :field="data.body" />
        <p><strong>Date:</strong> {{ data.date }}</p>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="primary" @click="closeDialog">Sluiten</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import {  PrismicRichText } from "@prismicio/vue";

export default {
  name: 'NieuwsDialog',
  components: { PrismicRichText },
  props: {
    isOpen: {
      type: Boolean,
      required: true
    },
    data: {
      type: Object,
      required: true,
      default: () => ({ title: '', message: '', date: '' })
    }
  },
  mounted() {
  },
  methods: {
    closeDialog() {
      this.$emit('update:isOpen', false);
    },
    updateIsOpen(value) {
      this.$emit('update:isOpen', value);
    }
  }
};
</script>

<style scoped>
/* Add your styles here */
</style>