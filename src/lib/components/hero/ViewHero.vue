<template>
  <section class="view-hero mb-5">
    <div class="view-hero__inner">
    <h1 class="hero-title">{{ title }}</h1>
    <p class="hero-paragraph">{{ paragraph }}</p>

    </div>
<!--    <v-progress-linear color="rgb(20, 21, 26)" indeterminate></v-progress-linear>-->
    <v-progress-linear color="blue-lighten-3" indeterminate></v-progress-linear>



  </section>
</template>

<script>
export default {
  name: "ViewHero",
  props: {
    title: {
      type: String,
      required: true,
    },
    paragraph: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
.hero-title, .hero-paragraph{
  color: #FFFFFF;
}

.view-hero__inner {
  padding: 80px 16px 32px 16px;
  height: 100vh;
  max-height: 240px;

  background-color: var(--hero-color);

  border-bottom: 8px solid var(--hero-border-color);
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.16);
}
.hero-title{
  font-size: 35px;
}
.hero-paragraph{
  font-size: 18px;
}

/* SM (for tablets - screens ≥ than 768px wide) */
@media (width >= 768px) {
  /* CSS rules for tablets go here */
  .hero-title, .hero-paragraph{
    text-align: center;
  }

  .hero-title{
    font-size: 52px;
  }
  .hero-paragraph{
    font-size: 20px;
  }
}

/* LG (for laptops and desktops - screens ≥ than 1200px wide) */
@media (width >= 1200px) {
  /* CSS rules for laptops and desktops go here */

}
</style>
