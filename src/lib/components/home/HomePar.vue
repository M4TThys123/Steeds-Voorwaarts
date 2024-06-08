<template>
  <div class="container py-5">
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
<!--        <img src="path/to/your/image.jpg" alt="Steedsvoorwaarts" class="img-fluid">-->
        <img src="https://via.placeholder.com/300" alt="Sport Image" class="img-fluid rounded-circle" style="width: 300px; height: 300px;">
      </div>
    </div>
  </div>

</template>

<script>
import ButtonComponent from "@/lib/components/elements/ButtonComponent.vue";

export default {
  name: 'HomePar',
  components: {ButtonComponent},
};
</script>

<style scoped>
.home-par__heading {
  font-weight: 900;
  font-size: 20px;
  line-height: 1.125;
}
.home-par__sub_heading {
  font-size: 32px;
  line-height: 1.33;
  letter-spacing: -0.04em;

}
.home-par__text {
  font-size: 1rem;
  line-height: 1.5;
  letter-spacing: 0;
}


/* MD (for small laptops - screens ≥ than 992px wide) */
@media (width >= 992px) {
  /* CSS rules for small laptops go here */
  .home-par__heading {
    font-weight: 900;
  }
  .home-par__sub_heading {
    font-size: 32px;

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
