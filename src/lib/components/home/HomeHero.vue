<template>
  <section class="home-header">
    <section class="homepage-header__fixed-content">
          <h1 class="homepage-header__title">Steeds Voor-<br>
            waarts
          </h1>
        <h2 class="homepage-header__subtitle">
          Kom langs en ontdek de sport die bij jou past!  <br>
        </h2>
    </section>
    <div class="homepage-header__slider">
      <div class="homepage-header__wrapper">
        <div class="homepage-header__slide">
          <section class="homepage-header__left" >
              <figure class="hero-top__background ">
                <v-skeleton-loader v-if="loading"   type="image" width="100%" height="100%"></v-skeleton-loader>
                <v-img :src="backgroundImage" cover absolute width="100%" height="100%" class=""></v-img>
              </figure>

          </section>
          <section  class="homepage-header__right">
            <figure class="hero-figure_image position-relative"
                    :style="{   clipPath: currentClipPath,
                                transition: 'clip-path 1s'}">
              <v-skeleton-loader v-if="loading"  cover type="image" width="100%" height="100%"></v-skeleton-loader>
              <v-img :src="figureImage" cover absolute width="100%" height="100%" class=""></v-img>
            </figure>
          </section>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "HomeHero",
  data() {
    return {
      backgroundImage: "/assets/images/hero/hero_image.jpeg",
      figureImage: "/assets/images/hero/hero-figure_image.webp",
      figureSize: {},
      currentClipPath: 'inset(var(--clip-size) 0 round 16px)', // Initial clip-path
      clipPaths: [
        'inset(var(--clip-size) 0 round 16px)', // LANDSCAPE
        'inset(0 var(--clip-size) round 16px)', // PORTRAIT
        'inset(var(--clip-size) var(--clip-size) var(--clip-size) var(--clip-size) round 16px)', // SQUARE
      ],
      currentClipPathIndex: 0,
      loading: true, // Add loading state

    };
  },
  mounted() {
    setInterval(() => {
      this.updateClipPath();
    }, 5000); // Change clip-path every 5 seconds
    // Set loading to false after 1 second
    setTimeout(() => {
      this.loading = false;
    }, 1000);
  },
  methods: {
    updateClipPath() {
      this.currentClipPathIndex = (this.currentClipPathIndex + 1) % this.clipPaths.length;
      this.currentClipPath = this.clipPaths[this.currentClipPathIndex];
    },
  },
}
</script>




<style scoped>
/*Home Header*/
.home-header{
  --clip-size: 4.1666666667vw;
  --clip-size-neg: -4.1666666667vw;
  position: relative;
  transition: background .6s .1s ease-out;
  clip-path: inset(0);
  height: 50vw;
  min-height: 38.75rem;
}

/*Header Content*/
.homepage-header__fixed-content {
  position: absolute;
  color: #FFFFFF !important;
  z-index: 2;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  /*justify-content: flex-end;*/
  width: 100%;
  height: 100%;
  padding: 8.3333333333vw 8.3333333333vw 4.1666666667vw;
}

.homepage-header__fixed-content::before {
  content: "";
  position: absolute;
  top: -100vh;
  left: 0;
  right: 50%;
  bottom: 0;
  z-index: -1;
  mix-blend-mode: multiply;
  /*background-color: rgba(20, 21, 26, .4);*/
  /*opacity: 0;*/
  animation: fadeIn 1s .8s ease-out forwards;
}

.homepage-header__title{
  font-weight: 900;

  color: #FFFFFF;
  font-size: 6.25vw;
  line-height: 1;
  text-align: left;
  width: 100%;
  position: relative;
  bottom: 0;
  margin: 0 auto 2.5vw auto;
  max-width: 1920px;
  /*width: 100%;*/
  /*text-align: center;*/
  transform: translateY(8.3333333333vw);
  /*opacity: 0;*/
  animation: fadeInTransformOut 1s .6s cubic-bezier(0.17, 0.67, 0, 1) forwards;
}

.homepage-header__subtitle {
  color: #FFFFFF;
  /*width: 25vw;*/
  width: 40vw;
  max-width: calc(6* 5rem);
  margin-top: 9.1666666667vw;
  transform: translateY(8.3333333333vw);
  /*opacity: 0;*/
  animation: fadeInTransformOut 1s .68s cubic-bezier(0.17, 0.67, 0, 1) forwards;
  font-size: 2.5vw;
  line-height: 1.11;
  letter-spacing: -0.04em;
}

/*Header Slider*/
.homepage-header__slider{
  width: 100%;
  overflow-x: hidden;
  overflow-y: clip;
  margin-bottom: -100vh;
  position: sticky;
  top: 0;
}

.homepage-header__wrapper {
  display: flex;
  flex-wrap: wrap;
  position: relative;
  height: 50vw;
  min-height: 38.75rem;
}

/*Header Slide*/
.homepage-header__slide {
  position: absolute;
  left: 0;
  right: 0;
  display: flex;
  flex-wrap: wrap;
  width: 100vw;
  height: 100%;
}

/*Left*/
.homepage-header__left{
  position: relative;
  width: 100%;
  height: 50%;
  /*clip-path: inset(100% 0 0 0);*/
  transition: clip-path 1s 1s cubic-bezier(0.17, 0.67, 0, 1), opacity 1s 1s cubic-bezier(0.17, 0.67, 0, 1);
  /*opacity: 0;*/
}

/*Right*/
.homepage-header__right{
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50%;
  padding: 8.3333333333vw;
  /*opacity: 0;*/
  transition: opacity 1s 2s cubic-bezier(0.17, 0.67, 0, 1);
  background: var(--color-primary);
}
.hero-figure_image{
  background-size: cover !important;
  background-position-y: center !important;
  background-position-x: center !important;
}

.hero-figure_image::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: var(--black-color);
  opacity: 0.2;
  z-index: 1;
}

.homepage-header__right figure {
  width: 100%;
  height: 100%;
  object-fit: cover;
  clip-path: inset(8.3333333333vw round 2rem);
  transition: clip-path .8s cubic-bezier(0.17, 0.67, 0, 1), opacity 1s cubic-bezier(0.17, 0.67, 0, 1);
  
  /* lANSCAPE */
  clip-path: inset(var(--clip-size) 0 round 16px);

  /* PORTRET */
  clip-path: inset(0 var(--clip-size) round 16px);

  /* SQUARE */
  clip-path: inset(var(--clip-size) var(--clip-size) var(--clip-size) var(--clip-size) round 16px);
  
  background: var(--background);
}


@media only screen and (min-width: 0px) and (max-width: 750px) {
    .home-header{
      --clip-size: 0.5rem;
      --clip-size-neg: -0.5rem;
    }

  @media only screen and (min-width: 0px) and (max-width: 1024px) {
    .home-header {
      --clip-size: 2rem;
      --clip-size-neg: -2rem;
    }
  }

  .homepage-header__title {
        font-size: 48px !important;
        line-height: 1;
        text-align: left;
        width: 100%;
        position: absolute;
        top: 15%;
        bottom: auto;
        margin: 0 auto 0 auto;
        max-width: 320px;
    }

    .homepage-header__subtitle {
        font-size: 22px !important;
        line-height: 1.11;
        letter-spacing: -0.04em;
        width: 320px;
        /*max-width: 400px;*/
        margin-top: 20px;
        position: absolute;
        top: 35%;
        bottom: auto;
}
}



.hero-wrapper{
  display: flex;
  flex-wrap: wrap;
  position: relative;
  height: 50vw;
  min-height: 38.75rem;
}

.hero-slide {
  position: absolute;
  left: 0;
  right: 0;
  display: flex;
  flex-wrap: wrap;
  width: 100vw;
  height: 100%;
}
.hero-header{
  color: white;
  position: relative;
  height: 100%;

}
.hero-header__text {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 12rem 1rem 0 1rem;
  height: 38em;
}
.hero-header h1{
  font-weight: bold;
  text-align: left;
  font-size: 56px;
  line-height: 1;
  letter-spacing: -0.04em;
  color: var(--white-color);
}
.hero-header h2{
  font-size: 22px;
  font-weight: bold;
  width: auto;
  color: var(--white-color);
}
.hero-top{
  width: 100%;
  height: 50%;
  position: relative;
}
.hero-top__background{
  position: absolute;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position-y: -25px;
  z-index: 0;
}
.hero-top__background::before
/*, .hero-figure_image::before*/
{
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: var(--black-color);
  opacity: 0.5;
  z-index: 1;
}
.hero-bottom{
  background: var(--primary-button);

  position: relative;
  height: 50%;
  width: 100%;
  padding: 3.75rem 4.5rem 6rem;


  display: flex;
  justify-content: center;
  align-items: center;

  transition: opacity 1s 2s cubic-bezier(0.17, 0.67, 0, 1);
}
.hero-bottom figure{
  width: 100%;
  background: var(--background);
  border-radius: 18px;
}

/*.hero-header__text h2{*/
/*  max-width: 21.75rem;*/
/*}*/
/*.hero-header__text h2{*/
/*  max-width: 40rem;*/
/*  margin-bottom: 1rem;*/
/*}*/



@media (width >= 768px) {
  .homepage-header__left, .homepage-header__right{
    width: 50%;
    height: 100%;
  }

  figure {
    width: 100% !important;
    aspect-ratio: 9/11!important;; /* aspect ratio of 360px by 460px */
    max-width: 100vw!important;; /* restrict the maximum width to the viewport width */
    height: 191px;

  }
  .hero-top {
    width: 50%;
    width: 100%;

    position: relative;
  }
  .hero-top__wrapper{
    /*position: absolute;*/
  }

  .hero-bottom {
    position: relative;
    width: 100%;
    height: 50%;

  }
  .hero-bottom figure {

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

  .homepage-header__left, .homepage-header__right{
    width: 50%;
    height: 100%;
  }
}

@media (width >= 1200px) {
  /*.hero-wrapper{*/
  /*  font-size: 10vw;*/
  /*  max-height: none;*/
  /*  !*height: 90vh;*!*/
  /*}*/
  .hero-top{
    background-position-y: 0;
    width: 100%;
    height: 100%;
  }
  .hero-header{
    height: 90vh;
  }
  .hero-bottom{
    padding: 8.3333333333vw;
  }
}



</style>


<style>
.v-skeleton-loader__bone{
  height: 100% !important;
}
</style>