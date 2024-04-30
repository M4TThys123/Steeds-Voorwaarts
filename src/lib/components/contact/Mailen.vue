<template>
  <a :href="'mailto:' + email" class="button-component" :style="{background: buttonColor}">
    <i class='bx bxs-envelope' ></i>
    <span class="button-text">
      Mailen
    </span>
  </a>
</template>

<script>
export default {
  name: "ButtonComponent",
  props: {
    background: {
      type: String,
      default: '#14151a',
    },
    email: {
      type: String,
      default: ''
    }
  },
  computed: {
    buttonColor() {
      return this.background;
    }
  }
}
</script>

<style scoped>
i {
  color: var(--grey-color);
}
.button-component {
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none; /* Ensure it looks like a button */
}
.button-text {
  font-size: 18px;
  margin-left: .5em;
  color: var(--white-color);
}
</style>