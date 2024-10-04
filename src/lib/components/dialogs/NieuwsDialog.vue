<template>
  <v-dialog :model-value="isOpen" @update:model-value="updateIsOpen" max-width="600px">
    <v-card>
      <v-card-title class="headline">{{ data.title }}</v-card-title>
      <v-card-text>
        <p>{{ data.message }}</p>
        <p><strong>Date:</strong> {{ data.date }}</p>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="primary" @click="closeDialog">Close</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: 'NieuwsDialog',
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