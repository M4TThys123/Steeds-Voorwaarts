<template>
  <footer class="text-grey">
    <section class="footer-content">
      <section class="footer-top">
        <section class="">
          <h3 class="mb-4 text-white footer-title">Gratis proefles</h3>
          <ButtonComponent background="rgb(57, 128, 112)"></ButtonComponent>
        </section>

        <nav class="footer-nav">
          <ul class="list-unstyled footer-link-list">
            <li>
              <router-link to="/" class="footer-link-prm text-white">Home</router-link>
            </li>
            <li>
              <router-link to="/lesaanbod" class="footer-link">Lesaanbod</router-link>
            </li>
            <li>
              <router-link to="/contact" class="footer-link">Over ons</router-link>
            </li>
          </ul>
          <ul class="list-unstyled footer-link-list">
            <li>
              <router-link to="/lesaanbod" class="footer-link-prm text-white">Lesaanbod</router-link>
            </li>
            <li v-for="(item, index) in links" :key="index">
              <router-link :to="`/lesaanbod/${item.url}`" class="footer-link">{{ item.name }}</router-link>
            </li>
          </ul>
          <ul class="list-unstyled footer-link-list">
            <li>
              <router-link to="/contact" class="footer-link-prm text-white">Contact</router-link>
            </li>
            <li>
              <router-link to="/contact" class="footer-link">
                <i class='bx bxs-phone'></i>
                <span class="ml">Bellen</span>
              </router-link>
            </li>
            <li>
              <router-link to="/contact" class="footer-link">
                <i class='bx bxs-envelope'></i>
                <span class="ml">
                  Mailen
                </span>
              </router-link>
            </li>
            <li>
              <router-link to="/contact" class="footer-link">
                <i class='bx bxs-message'></i>
                <span class="ml">
                  Bericht sturen
                </span>
              </router-link>
            </li>
            <li>
              <router-link to="/contact" class="footer-link">
                <i class='bx bxs-user-plus'></i>
                <span class="ml">
                  Aanmelden
                </span>
              </router-link>
            </li>
          </ul>
        </nav>
      </section>

      <hr class="my-4">

      <section class="footer bottom row align-items-center">
        <section class="col-12 col-md-4">
          <section class="row">
            <section class="col-12 col-sm-6 mb-3 mb-sm-0">
              <router-link to="/">
                <LogoComponent fill="#fff"></LogoComponent>
              </router-link>
              <a href="https://www.facebook.com/steedsvoorwaartsAbbekerk">
                <v-icon class="ml-2" color="white" size="32">mdi-facebook</v-icon>
              </a>
            </section>
          </section>
        </section>

        <section class="col-12 col-md-8 order-md-2 mb-3 mb-md-0 mt-3 mt-md-0">
          <section>
          <p class="footer-link">&copy; {{ new Date().getFullYear() }} Steeds Voorwaarts  - <a href="https://www.matthijsblauw.nl/" style="color: white !important; font-weight: ;">Matthijs Blauw</a></p>
        </section>
        </section>
      </section>
    </section>
  </footer>
</template>


<script>
import ButtonComponent from "@/lib/components/elements/ButtonComponent.vue";
import LogoComponent from "@/lib/components/header/LogoComponent.vue";

export default {
  name: 'FooterComponent',
  components: {LogoComponent, ButtonComponent},
  data() {
    return {
      links: [
        {
          name: 'Kleuterdans',
          url: 'kleuterdans'
        },
        {
          name: 'Hiphop',
          url: 'hiphop'
        },
        {
          name: 'Fit en Vitaal',
          url: 'fit-en-vitaal'
        },
        {
          name: 'Freerunning',
          url: 'freerunning'
        },
        {
          name: 'Demodans',
          url: 'demodans'
        },
        {
          name: 'Bootcamp',
          url: 'bootcamp'
        },
        {
          name: 'Fysiogym',
          url: 'fysiogym'
        },
      ]
    }
  }

}
</script>

<style scoped>

footer{
  margin-top: 100px !important;
}
.text-white {
  color: #fff;
}

.text-grey {
  color: #9C9C9D;
}

footer {
  background: #14151A;
}

.footer-content{
  padding: 4rem 1rem 1rem;
}

.footer-title{
  font-size: 36px;
     width: 40vw;
    flex-grow: 1;
}

.footer-link-list {
  flex-direction: column;
}
.footer-link-list li {
  margin-bottom: 0.35rem;
}

.footer-link, .footer-link > *{
  text-decoration: none;
  /* font-size: 16px; */
  color: #9C9C9D !important;
  font-size: .875rem;
  line-height: 1.5;
  letter-spacing: 0;
}

.ml {
  margin-left: 2px;
}

.footer-link-prm {
  font-weight: bold;
  font-size: 20px;
  text-decoration: none;
  margin-bottom: 12px;
}

</style>

<style scoped>
footer {
  background: #14151A;
}

.footer-top {
  display: flex;
  flex-direction: column;

}

.footer-nav {
  display: flex;
  gap: 2em;
  margin-top: 2.5em;
  flex-wrap: wrap; /* Allow items to wrap onto the next line */
  height: auto  !important;
  align-items: flex-start !important;
  font-size: 11px !important;
  justify-content: space-between;
  width: 100%;
  max-width: 700px;
}
.footer-nav a,.footer-nav a span  {
    font-size: 12px;
}
.footer-link-list {
  flex-direction: column;
      width: 40vw;
    flex-grow: 1;
  /*flex: 1 1 100%; !* Each list takes up full width on smaller devices *!*/

}

.footer-link {
  text-decoration: none;
  font-size: 16px;
  color: #9C9C9D;
}

.ml {
  margin-left: 2px;
}

hr {
  border-bottom: 3px solid rgba(255, 255, 255, .1);
}

.footer-link-prm {
  font-weight: bold;
  font-size: 14px !important;
  text-decoration: none;
  margin-bottom: 12px;
}

.footer-logo-svg {
  width: auto;
}

.footer-logo-svg-figure {
  width: 120px;
  margin: 0;
}

.social-links {
  padding-left: 0em;
}

.social-links i {
  font-size: 24px;
  color: white;
}

.footer-credits {
  margin-top: 2em;
  color: #9C9C9D;

}

.footer-credits a {
  text-decoration: none;
}

/* SM (for tablets - screens ≥ than 768px wide) */
@media (width >= 768px) {
  .footer-top {
    flex-direction: row;
    justify-content: space-between;
  }

  .footer-nav {
    margin-top: 0;
    flex-wrap: nowrap;
    gap: 4em;
  }

  .footer-credits {
    text-align: right;
    margin: 0;
  }
  .footer-title{
    font-size: 41px;
  }
  .footer-content{

  padding: 8.3333333333vw 12.5vw 4.1666666667vw 8.3333333333vw;
}

.footer-nav a,.footer-nav a span  {
    font-size: 16px !important;
}

.footer-link-prm {
  font-size: 20px !important;
}
.footer-link {
  text-align: end;
}
}
</style>