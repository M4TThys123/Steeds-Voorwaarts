<template>
  <a href="/aanmelden" class="button-component" :style="{background: buttonColor}">
    <i class='bx bxs-user-plus' ></i>
    <span class="button-text">
      Aanmelden
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
  color: var(--white-color);
}
.button-component {
  border-radius: 22px;
  width: 160px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none; /* Ensure it looks like a button */
  padding: 0 1.5em;
}

.button-text {
  font-size: 18px;
  margin-left: .5em;
  color: var(--white-color);
}
</style>
