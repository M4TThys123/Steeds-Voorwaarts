<template>
  <footer class="py-5 text-grey">
    <section class="container">
      <section class="row">
        <section class="col-12 col-md-4">
          <h3 class="mb-3 text-white">Neem contact op!</h3>
          <ButtonComponent background="#3D95D1"></ButtonComponent>
        </section>

        <section class="col-6 col-md-2 mt-3">
            <ul class="list-unstyled footer__link-list">
              <li>
                <router-link to="/" class="footer__link-prm text-white">Home</router-link>
              </li>
              <li>
                <router-link to="/over" class="footer__link">Over ons</router-link>
              </li>
              <li>
                <router-link to="/partners" class="footer__link">Partners</router-link>
              </li>
            </ul>
          </section>
        <section class="col-6 col-md-2">
            <ul class="list-unstyled footer__link-list">
              <li>
                <router-link to="/diensten" class="footer__link-prm text-white">Diensten</router-link>
              </li>
              <li>
                <router-link to="/diensten" class="footer__link">CV-Installatie</router-link>
              </li>
              <li>
                <router-link to="/diensten" class="footer__link">Onderhoud</router-link>
              </li>
              <li>
                <router-link to="/diensten" class="footer__link">Installatiewerk</router-link>
              </li>
              <li>
                <router-link to="/diensten" class="footer__link">Woningventalatie</router-link>
              </li>
            </ul>
          </section>
        <section class="col-6 col-md-2">
            <ul class="list-unstyled footer__link-list">
              <li>
                <router-link to="/contact" class="footer__link-prm text-white">Contact</router-link>
              </li>
              <li>
                <router-link to="/contact" class="footer__link">
                  <i class='bx bxs-phone' ></i>
                  <span class="ml">Bellen</span>
                </router-link>
              </li>
              <li>
                <router-link to="/contact" class="footer__link">
                  <i class='bx bxs-envelope' ></i>
                  <span class="ml">Mailen</span>
                </router-link>
              </li>
            </ul>
          </section>
      </section>

      <hr class="my-4">

      <section class="row">
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
          <p class="text-center">&copy; JBI Installatietechniek {{ new Date().getFullYear() }} | Website ontworpen en ontwikkeld door Matthijs Blauw</p>
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
  components: {LogoComponent, ButtonComponent}
}
</script>

<style scoped>
.text-white{
  color: #fff;
}
.text-grey{
  color: #9C9C9D;
}
footer{
  background: #14151A;
}
.footer__link-list{
  flex-direction: column;
}

.footer__link{
  text-decoration: none;
  font-size: 16px;
  color: #9C9C9D;
}
.ml{
  margin-left: 2px;
}
.footer__link-prm{
  font-weight: bold;
  font-size: 20px;
  text-decoration: none;
  margin-bottom: 12px;
}
</style>