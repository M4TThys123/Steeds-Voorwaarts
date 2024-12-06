<template>
  <v-btn
      :href="link"
      :style="{ backgroundColor: buttonColor }"
      class="custom-btn mono px-4"
      rounded
      :disabled="disabled"
      :target="openInNewTab ? '_blank' : '_self'"
  >
    <v-icon left size="small" class="mr-2">{{ icon }}</v-icon>
    <span class="button-text">{{ text }}</span>
  </v-btn>
</template>

<script>
export default {
  name: "UpdatedGenericButton",
  props: {
    link: {
      type: String,
      required: true,
    },
    icon: {
      type: String,
      default: "mdi-account-plus",
    },
    background: {
      type: String,
      default: "#14151a",
    },
    text: {
      type: String,
      default: "Aanmelden",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    openInNewTab: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    buttonColor() {
      return this.background;
    },
  },
};
</script>

<style scoped>
.button-text {
  font-size: 16px;
  color: #ffffff !important; /* Ensure the text color is white */
}

.custom-btn .v-icon {
  color: #ffffff !important; /* Ensure the icon color is white */
}
</style>