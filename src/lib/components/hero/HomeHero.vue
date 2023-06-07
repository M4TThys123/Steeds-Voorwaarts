<template>
  <section class="hero-wrapper">
    <section class="hero-header">
      <section class="hero-header__text">
        <div class="d-flex justify-content-start">
          <h1>JBI Installatie-<br>
            service
          </h1>
        </div>
        <h2>
          Groot in klein werk. Niet te klein <br>
          voor het grote werk.
        </h2>
      </section>
    </section>
    <section class="hero-top" :style="{ backgroundImage: `url(${backgroundImage})` }">
    </section>
    <section class="hero-bottom">
      <figure>
      </figure>
    </section>
  </section>
</template>

<script>
export default {
  name: "HomeHero",
  data() {
    return {
      backgroundImage: "/assets/images/hero/hero_image.png",

    };
  }
}
</script>

<style scoped>
.hero-wrapper{
  height: 75vh;
  max-height: 620px;
  display: flex;
  flex-direction: column;
}

.hero-header{
  color: white;
  position: absolute;
  height: 75vh;

}

.hero-header__text {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 15rem 1rem 0 1rem;
  height: 38em;
}
.hero-header h1{
  font-weight: bold;
  text-align: left;
  font-size: 56px;
  line-height: 1;
  letter-spacing: -0.04em;
}
.hero-header h2{
  font-size: 22px;
  font-weight: bold;
  /*margin-top: 11.5rem;*/
  width: auto;
}

.hero-top{
  height: 50%;
  width: 100%;
  background-size: cover;
  background-position-y: -25px;

}
.hero-bottom{
  height: 50%;
  width: 100%;
  background: #0096D7;

  display: flex;
  justify-content: center;
  padding: 2em;
}
.hero-bottom figure{
  width: 100%;
  height: 191px;
  background: #BAC6FF;
  border-radius: 18px;
}


@media (width >= 768px) {
  .hero-wrapper {
    flex-direction: row;
    height: 75vh;
    max-height: 620px;
  }
  .hero-top {
    height: 100%;
    width: 100%;
    min-width: 50vw;
  }
  .hero-bottom {
    height: 100%;
    width: 100%;
    align-items: center;
  }
  .hero-bottom figure {
    width: 361px;
    height: 461px;
  }


  .hero-header__text{
    width: 100%;
  }
  .hero-header__text h1{
    text-align: right;
    font-size: 8vw;
    margin-left: 0.8em;
  }
  .hero-header__text h2{
    max-width: 13.75rem;
  }

}

/* MD (for small laptops - screens ≥ than 992px wide) */
@media (width >= 992px) {
  .hero-header__text{
    height: 100%;
    margin-bottom: 2em;
  }
  .hero-header__text h2{
    max-width: 21.75rem;
    font-size: 2vw;
  }
}

@media (width >= 1200px) {
  .hero-wrapper{
    font-size: 10vw;
    max-height: none;
    height: 90vh;
  }
  .hero-top{
    background-position-y: 0;
    width: 100%;
    height: 100%;
  }
  .hero-header{
    height: 90vh;
  }
}
.hero-header__text h2{
  max-width: 21.75rem;
}
.hero-header__text h2{
  max-width: 40rem;
  margin-bottom: 1rem;
}
figure {
  width: 100% !important;
  aspect-ratio: 9/11!important;; /* aspect ratio of 360px by 460px */
  max-width: 100vw!important;; /* restrict the maximum width to the viewport width */
}


</style>
