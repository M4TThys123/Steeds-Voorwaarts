<template>
  <a :href="link" class="button-component" :style="{background: buttonColor}">
    <i :class="icon"></i>
    <span class="button-text">
      {{ text }}
    </span>
  </a>
</template>

<script>
export default {
  name: "GenaricButon",
  props: {
    link: {
      type: String,
      required: true,
    },
    icon: {
      type: String,
      default: 'bx bxs-user-plus',
    },
    background: {
      type: String,
      default: '#14151a',
    },
    text: {
      type: String,
      default: 'Aanmelden',
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
  color: var(--white-color);
}
.button-component {
  border-radius: 22px;
  height: 40px;
  text-decoration: none; /* Ensure it looks like a button */
  padding: .5em 1em .5em .75em;
  text-align: center;
  display: flex;
  align-items: center;
}

.button-text {
  font-size: 18px;
  margin-left: .25em;
  color: var(--white-color);
}
</style>
