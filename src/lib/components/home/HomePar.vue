<template>
  <section class="home-par__section container py-5">
    <div class="row">
      <div class="col-md-6 d-flex flex-column justify-content-center mb-5">
        <h2 class="home-par__heading mb-4">Dit is de ontwikkeling van een vooruitstrevende sportvereniging</h2>
        <p class="home-par__sub_heading mb-4">Steedsvoorwaarts biedt volop sportieve mogelijkheden voor alle leeftijden in een ongedwongen sfeer.</p>
        <p class="home-par__text mb-4">
          Vandaag de dag hebben mensen meer sportkeuzes dan ooit tevoren. Maar wat Steedsvoorwaarts onderscheidt in dit ruime aanbod, is ons erfgoed, onze vakmanschap en ons vermogen om ons aan te passen aan een snel veranderende sportwereld. We zijn gedreven om activiteiten van het hoogste niveau aan te bieden die mensen zowel lokaal als regionaal verbinden.
        </p>
        <ButtonComponent></ButtonComponent>
      </div>
      <div class="col-md-6 d-flex align-items-center justify-content-center">
        <a href="">
          <img src="/assets/images/home/logo_hero.png" alt="Sport Image" class="home-par__image img-fluid rounded-circle">
        </a>
      </div>
    </div>
  </section>

</template>

<script>
import ButtonComponent from "@/lib/components/elements/ButtonComponent.vue";

export default {
  name: 'HomePar',
  components: {ButtonComponent},
};
</script>

<style scoped>
.home-par__section{

}
.home-par__heading {
  font-weight: 900;
  font-size: 20px;
  line-height: 1.25;
}
.home-par__sub_heading {
  font-size: 22px;
  line-height: 1.25;
  letter-spacing: -0.04em;
}
.home-par__text {
  font-size: 1rem;
  line-height: 1.5;
  letter-spacing: 0;
}

.home-par__image_link{
  width: 300px;
  height: 300px;
}

.home-par__image {
  width: 100%;
  height: 100%;

  box-shadow: 0 8px 16px rgba(0, 0, 0, .16);
  position: relative;
  z-index: 0;
  background-size: cover;
  overflow: hidden; /* Ensure the overlay doesn't overflow the image */
}

.home-par__image::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: var(--black-color); /* Your overlay color */
  opacity: 0; /* Start with no opacity */
  z-index: 1; /* Ensure the overlay is above the image content */
  transition: opacity 0.5s ease; /* Add transition for smooth animation */
}

.home-par__image:hover::before {
  opacity: 0.9; /* Adjust the opacity as needed */
}


/* MD (for small laptops - screens ≥ than 992px wide) */
@media (width >= 992px) {
  /* CSS rules for small laptops go here */
  .home-par__heading {
    font-weight: 900;
  }
  .home-par__sub_heading {
    font-size: 32px;
    font-size: 1.6666666667vw;
    line-height: 1.33;
  }
  .home-par__text {
    font-size: 16px;
  }
}

/* LG (for laptops and desktops - screens ≥ than 1200px wide) */
@media (width >= 1200px) {
  /* CSS rules for laptops and desktops go here */


}
</style>
