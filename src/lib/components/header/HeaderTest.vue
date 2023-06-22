<template>
  <header :class="{ 'blur': isScrolled }">
    <nav>
      <router-link to="/" class="logo__link d-flex" @click="closeNav">
        <div class="logo-wrapper">
          <LogoComponent :class="{ 'color__scroll': isScrolled } " fill="#3D95D1"></LogoComponent>
          <span class="mobile-logo">SVW</span>
          <span class="desktop-logo">Steeds Voorwaarts</span>
        </div>
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
        </ul>
      </div>

    </nav>
  </header>
</template>


<script>
import LogoComponent from "@/lib/components/header/LogoComponent.vue";

export default {
  name: "HeaderComponent",
  components: { LogoComponent },
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
    handleScroll() {
      if (window.pageYOffset > 0) {
        this.isScrolled = true;
      } else {
        this.isScrolled = false;
      }
    }
  },
}
</script>


<style scoped>

.color__scroll{
  fill: #192321;
}

.blur{
  backdrop-filter: blur(24px);
  /*background-color: rgba(61, 149, 209, 0.4);*/
  background-color: rgba(57, 128, 112, 0.4);

}

.text-color__scroll{
  color: #192321;
}  }
</style>