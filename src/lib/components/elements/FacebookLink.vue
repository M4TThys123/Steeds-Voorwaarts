<template>
    <a href="https://www.facebook.com/steedsvoorwaartsAbbekerk">
      <figure :style="`width: ${width}`">
        <img src="/assets/images/home/logo_hero.png" alt="Sport Image" class="home-par__image img-fluid rounded-circle">
      </figure>
    </a>
</template>

<script>
export default {
  name: "FacebookLink",
  props: {
    width: {
      type: String,
      default: "320px"
    }
  }
}
</script>

<style scoped>
.home-par__image {
  width: 100%;
  height: 100%;

  box-shadow: 0 8px 16px rgba(0, 0, 0, .16);
  position: relative;
  z-index: 0;
  background-size: cover;
  overflow: hidden; /* Ensure the overlay doesn't overflow the image */
}
</style>