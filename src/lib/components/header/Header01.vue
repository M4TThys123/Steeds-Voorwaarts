<template>
  <header :class="{ 'blur': isScrolled }">
    <nav>
      <router-link to="/" class="logo__link" @click="closeNav">
        <LogoComponent :class="{ 'color__scroll': isScrolled }"></LogoComponent>
      </router-link>

      <div class="nav__menu">
        <ul class="nav__list" :class="{ 'nav__list--open': isNavOpen, 'blur': isNavOpen }">
          <li class="nav__item" v-for="(route, index) in filteredRoutes" :key="index">
            <router-link
                class="nav__link"
                :to="route.path"
                @click="closeNav"
                :class="{
                'text-color__scroll': isScrolled,
                'text-color__nav-open': isNavOpen
              }"
            >
              {{ route.name }}
            </router-link>
          </li>
          <li class="mt-3 mt-lg-0">
            <ButtonComponent></ButtonComponent>
          </li>
        </ul>
      </div>

      <hamburger-menu @click="toggleNav" :is-nav-open="isNavOpen" :is-scrolled="isScrolled" class="menu__trigger"></hamburger-menu>
    </nav>
  </header>
</template>


<script>
import LogoComponent from "@/lib/components/header/LogoComponent.vue";
import HamburgerMenu from "@/lib/components/header/HamburgerMenu.vue";
import router from "@/router/router";
import ButtonComponent from "@/lib/components/elements/ButtonComponent.vue";

export default {
  name: "HeaderComponent",
  components: {ButtonComponent, HamburgerMenu, LogoComponent },
  data() {
    return {
      isBlur: false,
      isNavOpen: false,
      isScrolled: false
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    openNav(){
      this.isNavOpen = !this.isNavOpen
      this.isScrolled = false
      document.body.classList.add('no-scroll'); // Add no-scroll class
      this.handleScroll(); // Toggle isScrolled
    },
    closeNav() {
      this.isNavOpen = false;
      this.isBlur = true
      this.isScrolled = true
      document.body.classList.remove('no-scroll'); // Remove no-scroll class
      this.handleScroll(); // Toggle isScrolled

    },

    toggleNav() {
      this.isNavOpen = !this.isNavOpen;

      if (this.isNavOpen) {
        document.body.classList.add('no-scroll');
      } else {
        document.body.classList.remove('no-scroll');
      }
    },
    router() {
      return router
    },
    handleScroll() {
      if (window.pageYOffset > 0) {
        this.isScrolled = true;
      } else {
        this.isScrolled = false;
      }
    }
  },
  computed: {
    filteredRoutes() {
      return router.options.routes.filter(route => !route.hide);
    }
  }
};
</script>


<style scoped>

.color__scroll{
  fill: #192321;
}
/*global*/
a {
  text-decoration: none;
}

header{
  position: fixed;
  width: 100%;
  z-index: 999;
  padding: 0.75rem 1rem;
  top: 0;
  /*padding: 1.5rem 1.875rem 1rem;*/
  transition: all 0.3s ease;
}

/*Nav*/
nav{
  position: relative;
  height: 45px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  max-width: 120rem;
  margin: auto;
}
.nav__menu{
  /*display: flex;*/
  /*justify-content: center;*/
}
.nav__list{
  margin-bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}
.nav__item{
  margin-right: 2em;
}
.logo__link{
  z-index: 999999;
}

.nav__link{
  color: #FFFFFF;
  transition:  .3s;

}

.nav__link:hover {
  text-decoration: underline;
  color: red;
}

.menu__trigger{
  display: none;
  z-index: 99999;
}


.blur{
  backdrop-filter: blur(24px);
  background-color: rgba(61, 149, 209, 0.4);
}

@media screen and (max-width: 1024px) {
  .menu__trigger{
    display: block;
  }

  header{
    padding: 0.75rem 1rem;
  }

  nav {
    height: 32px;
  }
  .nav__menu{
    transition: .4s;
    margin-top: 2em;
  }
  .nav__list{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    height: 100vh;
    padding: 4rem 1rem;

    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;


    transition: transform .3s ease-out;
    transform: translateY(-100%);
  }
  .nav__list--open{
    transform: translateY(0);
    padding-top: 5em;
  }
  .nav__item{
    font-size: 48px;
    font-weight: bold;
    font-family: Inter, sans-serif;
  }
}
.text-color__scroll{
  color: #192321;
}
.text-color__nav-open{
  color: #FFFFFF;
}
.nav__list--open{
  visibility: visible;
}

</style>