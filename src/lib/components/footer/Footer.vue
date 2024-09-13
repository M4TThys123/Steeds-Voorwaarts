<template>
  <footer class="py-5 text-grey">
    <section class="footer-content">
      <section class="footer-top">
        <section class="">
          <h3 class="mb-3 text-white footer-title">Gratis proefles</h3>
          <ButtonComponent background="rgb(57, 128, 112)"></ButtonComponent>
        </section>

        <nav class="footer-nav">
          <ul class="list-unstyled footer-link-list">
            <li>
              <router-link to="/" class="footer-link-prm text-white">Home</router-link>
            </li>
            <li>
              <router-link to="#lesaanbod" class="footer-link">Lesaanbod</router-link>
            </li>
            <li>
              <router-link to="#rooster" class="footer-link">Rooster</router-link>
            </li>
            <li>
              <router-link to="#over" class="footer-link">Over ons</router-link>
            </li>
          </ul>
          <ul class="list-unstyled footer-link-list">
            <li>
              <router-link to="/lesaanbod" class="footer-link-prm text-white">Lesaanbod</router-link>
            </li>
            <li v-for="(item, index) in links" :key="index">
              <router-link :to="`lesaanbod/${item.url}`" class="footer-link">{{ item.name }}</router-link>
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
                <span class="ml">Mailen</span>
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
              <LogoComponent fill="#fff"></LogoComponent>
            </section>
          </section>
        </section>

        <section class="col-12 col-md-6 order-md-2 mb-3 mb-md-0">
          <ul class="list-inline text-center text-md-end mb-0">
            <!--            <li class="list-inline-item"><a href="#"><i class='bx bxl-github'></i></a></li>-->
            <!--            <li class="list-inline-item"><a href="#"><i class='bx bxl-linkedin-square' ></i></a></li>-->
          </ul>
        </section>

        <section>
          <p class="text-center">&copy; JBI Installatietechniek {{ new Date().getFullYear() }} | Website ontworpen en
            ontwikkeld door Matthijs Blauw</p>
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
          name: 'Seniorengym',
          url: 'seniorengym'
        },
        {
          name: 'Hiphop',
          url: 'hiphop'
        },
        {
          name: 'Fysiogym',
          url: 'fysiogym'
        },
        {
          name: 'Freerunning',
          url: 'freerunning'
        },
        {
          name: 'Bootcamp',
          url: 'bootcamp'
        }
      ]
    }
  }

}
</script>

<style scoped>


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
  padding: 8.3333333333vw 12.5vw 4.1666666667vw 8.3333333333vw;
}

.footer-title{
  font-size: 41px;
}

.footer-link-list {
  flex-direction: column;
}

.footer-link {
  text-decoration: none;
  font-size: 16px;
  color: #9C9C9D !important;
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
}

.footer-link-list {
  flex-direction: column;
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
  font-size: 20px;
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
}
</style>