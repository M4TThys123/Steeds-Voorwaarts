<template>
  <header class="blur" :class="{ 'no-background': !isScrolled }">
    <nav>
      <router-link to="/" class="logo__link d-flex" @click="closeNav">
        <div class="logo-wrapper">

          <LogoComponent :is-scrolled="isScrolled || isNavOpen"></LogoComponent>
          <span class="logo-text mobile-logo" :class="{'text-color__scroll' : isScrolled || isNavOpen}">SVW</span>
          <span class="logo-text desktop-logo" :class="{'text-color__scroll' : isScrolled || isNavOpen}">Steeds Voorwaarts</span>
        </div>
      </router-link>

      <div class="nav-menu">
        <ul class="nav-list" :class="{ 'nav__list--open': isNavOpen, 'blur': isNavOpen }">
          <!-- <li class="mr-10 mt-2" > -->

         <div class="mr-8 mt-2" v-if="$vuetify.display.mdAndUp">
            <NieuwsOverzichtDialog :activatorColor="isScrolled ? 'black' : 'white'"/>
          </div>


          <li class="nav-item" v-for="(route, index) in filteredRoutes" :key="index"  :class="{'nav-item__current' : $route.path === route.path}">
            <router-link
                v-if="!route.meta.dropdown"
                class="nav-link"
                :to="route.path"
                @click="closeNav"
                :class="{
                'text-color__scroll': isScrolled || isNavOpen,
                'text-color__nav-open': isNavOpen,
                'nav-link__active': $route.path === route.path
            }"
            >
              <span class="nav-text">
                {{ route.name }}
              </span>
            </router-link>
            <DropdownMenu :is-scrolled="isScrolled || isNavOpen" :route="route" :index="index" v-else/>
          </li>
          <li class="mt-3 mt-lg-0">
            <ButtonComponent textColor="#fff"></ButtonComponent>
          </li>
        </ul>
      </div>

      <div class="d-flex gap-3" v-if="$vuetify.display.mdAndDown">
        <NieuwsOverzichtDialog class="mt-2" :activatorColor="isScrolled || isNavOpen ? 'black' : 'white'"/>


        <hamburger-menu @click="toggleNav" :is-nav-open="isNavOpen" :is-scrolled="isScrolled || isNavOpen"
                        class="menu__trigger"></hamburger-menu>
      </div>
    </nav>
  </header>
</template>


<script>
import LogoComponent from "@/lib/components/header/LogoComponent.vue";
import HamburgerMenu from "@/lib/components/header/HamburgerMenu.vue";
import router from "@/router/router";
import ButtonComponent from "@/lib/components/elements/ButtonComponent.vue";
import { useDisplay } from 'vuetify';
import NieuwsOverzichtDialog from "@/lib/components/nieuws/NieuwsOverzichtDialog.vue";
import DropdownMenu from "@/lib/components/header/VDropDown.vue";


export default {
  name: "HeaderComponent",
  components: {DropdownMenu, NieuwsOverzichtDialog, ButtonComponent, HamburgerMenu, LogoComponent},
  setup() {
    const { mdAndDown } = useDisplay();
    return {
      isSmallScreen: mdAndDown,
    };
  },
  data() {
    return {
      isNavOpen: false,
      isScrolled: false,
      isNewsLoaded: false,
      newNewsItems: [],
      newsItemsThisMonth: [],
      prismicNavItems: [],
      menuStories: [
        { title: "Fysiogym", route: "/lesaanbod/fysiogym" },
        { title: "Bootcamp", route: "/lesaanbod/bootcamp" },
        { title: "Hiphop", route: "/lesaanbod/hiphop" },
        { title: "Freerunning", route: "/lesaanbod/freerunning" },
        { title: "Seniorengym", route: "/lesaanbod/seniorengym" },
      ],
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    openNav() {
      this.isNavOpen = !this.isNavOpen
      this.isScrolled = false
      document.body.classList.add('no-scroll'); 
    },
    closeNav() {
      this.isNavOpen = false;
      this.isBlur = true
      this.isScrolled = true
      document.body.classList.remove('no-scroll');
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
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      // console.log('ScrollTop:', scrollTop);

      if (scrollTop > 0) {
        this.isScrolled = true;
      } else {
        this.isScrolled = false;
      }
    },
  },
  computed: {
    filteredRoutes() {
      const filteredRoutes = router.options.routes.filter(route => !route.meta.hide);
      console.log('filteredRoutes', filteredRoutes)
      return filteredRoutes
    }
  }
};
</script>


<style>

header {
  position: fixed;
  width: 100%;
  z-index: 999;
  padding: 0.75rem 1rem;
  top: 0;
  /*padding: 1.5rem 1.875rem 1rem;*/
  transition: all 0.3s ease;
}


.blur::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
  background: rgba(57, 128, 112, 0.4);
  /* background: rgba(255, 255, 255, .4)  ; */
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px); /* WebKit (iOS Safari) syntax */
  transition: background 0.5s, backdrop-filter 0.5s;
}

.no-background::before {
  background: none;
  backdrop-filter: none;
}

/*Nav*/
nav {
  position: relative;
  height: 45px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  max-width: 120rem;
  margin: auto;
}

.nav-list {
  margin-bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1em;
}

.nav-item {
  margin-right: 2em;
}
.nav-item__current{
  padding-left: 0;
}

.nav-link {
  transition: color .5s;
  color: var(--text);
  text-decoration: none;
  font-size: 1.3em;
  width: fit-content;
  display: flex;
  gap: 0.1em;
  flex-direction: column;
  position: relative;
}

.nav-link::before {
  content: "";
  position: absolute;
  top: calc(50% - 5px);
  left: -16px;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: var(--white-color);
  /*uitzetten*/
  clip-path: circle(0 at 50% 50%);

  /*Vastzetten*/
  /*clip-path: circle(50% at 50% 50%) !important;*/
  z-index: 99999999;
  transition: background-color 0.3s ease, clip-path 0.3s ease;
}

.text-color__scroll.nav-link::before{
  background-color: var(--black-color);

}

.nav-text{
  color: var(--white-color);
  transition: color 0.3s ease;
  font-weight: 400 !important;
}

.text-color__scroll .nav-text {
  color: var(--black-color);
}

.text-color__scroll .nav-link::before {
  background-color: var(--black-color) !important;
}


:hover.nav-link::before {
  clip-path: circle(50% at 50% 50%) !important;

}

.nav-link__scroll {
  color: var(--text) !important;
}

.nav-link__active::before {
  clip-path: circle(50% at 50% 50%) !important;
}




.logo__link {
  z-index: 999999;
}

.nav-link {
  color: #FFFFFF !important;
  transition: .3s;
}

.nav-link:hover {
  text-decoration: underline;
  color: red;
}

.menu__trigger {
  display: none;
  z-index: 99999;
}


.text-color__nav-open {
  color: var(--text) !important;
}

.nav__list--open {
  visibility: visible;
}

.logo-wrapper {
  display: flex;
  gap: 6px;
  align-items: center;
  font-size: 24px;
  font-weight: bold;

}

.mobile-logo {
  display: block;
}

.desktop-logo {
  display: none;
}

.logo-text {
  color: var(--white-color);
}

.text-color__scroll {
  color: var(--text);
}

@media screen and (max-width: 1024px) {
  .menu__trigger {
    display: block;
  }

  header {
    padding: 0.75rem 1rem;
  }

  nav {
    height: 32px;
  }

  .nav-menu {
    transition: .4s;
    margin-top: 2em;
  }

  .nav-list {
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

  .nav__list--open {
    transform: translateY(0);
    padding-top: 5em;
  }

  .nav-item {
    font-size: 48px;
    font-weight: bold;
    font-family: Inter, sans-serif;
  }

  .nav-item__current{
    padding-left: 20px;
  }
}

/* SM (for tablets - screens ≥ than 768px wide) */
@media (width >= 768px) {
  /* CSS rules for tablets go here */
  .mobile-logo {
    display: none;

  }

  .logo-text {
    transition: color 0.5s ease; /* Define the transition property */
  }

  .desktop-logo {
    display: block;
  }
}

/* MD (for small laptops - screens ≥ than 992px wide) */
@media (width >= 992px) {
  /* CSS rules for small laptops go here */
  .nav-link::before {
    /*left: -20px;*/

    width: 8px;
    height: 8px;
  }

}

@media (width >= 1200px) {
  /* CSS rules for laptops and desktops go here */
}



</style>