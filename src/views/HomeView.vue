<template>
  <section class="hero-section container">
    <div class="row">
      <section class="hero-text col-12 col-md-6">
        <h1 class="hero-title">Volop sportieve mogelijkheden voor alle leeftijden</h1>
        <p class="hero-para">Plezierig sporten in een ongedwongen sfeer onder gemotiveerde, vakbekwame leiding staat bij ons centraal.
          Wil je kennismaken met onze vereniging, kom dan gerust eens langs voor een gratis proefles.
        </p>
        <div class="button_wrapper row container">
          <button class="primary-btn col-12 col-md-6">Bekijk het lesaanbod</button>
          <button class="secodary-btn col-12 col-md-6">Vraag een proefles aan</button>
        </div>
      </section>
      <figure class="hero-figure col-12 col-md-6">
        <HeroVector class="hero-vector"></HeroVector>
      </figure>
    </div>
  </section>
  <NieuwsComponent></NieuwsComponent>

  <ContactSection></ContactSection>
</template>

<script>

import HeroVector from "@/lib/components/hero/HeroVector.vue";
import NieuwsComponent from "@/lib/components/nieuws/NieuwsComponent.vue";
import ContactSection from "@/lib/components/contact/ContactSection.vue";

export default {
  name: "HomeView",
  components: {ContactSection, NieuwsComponent, HeroVector}
}
</script>

<style scoped>
.hero-section{
  margin-top: var(--header-height);

}
.hero-text{

}
.hero-title{

}
.hero-para{

}
.button_wrapper{

}
.secodary-btn{
  margin-left: 8px;
}
.hero-figure{

}
.hero-vector{

}

.hero-section {
  display: flex;
  flex-wrap: wrap;
}

.hero-text {
  order: 2;
}

.hero-figure {
  order: 1;
}

@media (min-width: 768px) {
  .hero-text {
    order: 1;
  }

  .hero-figure {
    order: 2;
  }
}
</style>