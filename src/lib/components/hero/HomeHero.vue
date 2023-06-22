<template>
<section class="hero-section container">
    <div class="row">
      <section class="hero-text col-12 col-md-6">
        <h1 class="hero-title">Volop sportieve mogelijkheden voor alle leeftijden</h1>
        <p class="hero-para">Plezierig sporten in een ongedwongen sfeer onder gemotiveerde, vakbekwame leiding staat bij ons centraal.
          Wil je kennismaken met onze vereniging, kom dan gerust eens langs voor een gratis proefles.
        </p>
        <section class="button_wrapper container">
        <div class="row">
          <RouterLink to="/lesaanbod"
                      class="primary-btn col-12 col-md-5 button">
            Bekijk het lesaanbod
          </RouterLink>
          <RouterLink to="/contact"
                      class="secodary-btn col-12 col-md-5 button">
            Vraag een proefles aan
          </RouterLink>
        </div>
        </section>
      </section>
      <figure class="hero-figure col-12 col-md-6">
        <HeroVector class="hero-vector"></HeroVector>
      </figure>
    </div>
  </section>
</template>

<script>
import HeroVector from "@/lib/components/hero/HeroVector.vue";

export default {
  name: "HomeHero",
  components: {HeroVector},
  data() {
    return {
      backgroundImage: "/assets/images/hero/hero_image.png",

    };
  }
}
</script>

<style scoped>
.hero-section{
  margin-top: 80px;

}
.hero-text{

}
.hero-title{

}
.hero-para{

}
.button_wrapper{

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
  .secodary-btn{
    margin-left: 8px;
  }
}
</style>
