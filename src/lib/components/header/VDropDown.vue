<template>
  <li class="nav-item has-children">
    <div class="dropdown-container">
      <div class="nav-text__container">
        <a class="nav-link dropdown-header " :class="{'dropdown-header__black' : isScrolled}" href="/lesaanbod">
          <span class="nav-text"  :class="{'text-color__scroll' : isScrolled}">Lesaanbod</span>
        </a>
        <button class="nav-submenu__trigger">
          <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
              viewBox="0 0 24 24"
              class="bullet-svg"
              :class="{'bullet-svg__black' : isScrolled}"
          >
            <path
                d="M11.178 19.569a.998.998 0 0 0 1.644 0l9-13A.999.999 0 0 0 21 5H3a1.002 1.002 0 0 0-.822 1.569l9 13z"
            ></path>
          </svg>
        </button>
      </div>
      <ul class="nav-list__children">
        <li
            v-for="les in lessen"
            :key="les.route"
            class="nav-item nav-item__child"
        >
          <a
              class="dropdown-link"
             :href="`/lesaanbod/${les.route}`"
              :class="{
                'text-color__scroll': isScrolled,
                'text-color__nav-open': isNavOpen,
                'nav-link__active': $route.path === `/lesaanbod/${route.path}`
            }"
          >
            <span class="nav-text">{{ les.name }}</span>
          </a>
        </li>
      </ul>
    </div>
  </li>
</template>

<script>
export default {
  name: "DropdownMenu",
  props: {
    route: {
      type: Object,
      required: true,
    },
    isScrolled: {
      type: Boolean,
      required: true,
      default: false,
    },
    isNavOpen: {
      type: Boolean,
      required: true,
      default: false,
    }
  },
  data() {
    return {
      lessen: null,
    }
  },
  mounted() {
    console.log("Route:", this.route);
    this.lessen = this.route.meta.dropdown
    console.log(this.$route.path)
  },
};
</script>

<style scoped>
.nav-item {
  position: relative;
}

.dropdown-container {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.nav-text__container {
  display: flex;
  position: relative;
}

.nav-link {
  /*font-size: 1.3em;*/
  font-weight: 600;
  color: #333;
  text-decoration: none;
  transition: color 0.3s ease;
}

.nav-link:hover {
  color: #e63946;
}
.has-children{
  margin-right: 0!important;
}

.has-children::after {
  content: "";
  position: absolute;
  width: 100%;
  height: 2em;
}

.nav-submenu__trigger {
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  margin-left: 12px;
  display: flex;
  align-items: center;
}

.bullet-svg {
  fill: var(--white-color);
  transition: fill 0.3s ease;
}

.bullet-svg__black{
  fill: var(--black-color);
}

.nav-list__children {
  position: absolute;
  top: 3em;
  left: -1em;
  flex-direction: column;
  align-items: flex-start;
  padding: 1rem;
  background-color: #f9f9f9;
  border-radius: 0.75rem;
  opacity: 0;
  visibility: hidden;
  display: none;
  transition: opacity 0.4s ease, visibility 0.4s ease;
  z-index: 9999;
  box-shadow: 0px 32px 60px 32px rgba(20, 21, 26, 0.1);
}

/* Hover gedrag op basis van CSS */
.nav-item.has-children:hover .nav-list__children {
  opacity: 1;
  visibility: visible;
  display: block;
}

.dropdown-link {
  /*font-size: 1.2em;*/
  color: #333!important;
  text-decoration: none;
  position: relative;
  transition: transform 0.2s ease-out, color 0.3s ease;
}
.dropdown-link::before {
  content: "";
  position: absolute;
  top: calc(50% - 2px);
  left: 0;
  top: 35%;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: var(--black-color);
  clip-path: circle(0 at 50% 50%);
  z-index: 99999999;
  transform: translateY(calc(50% - 3px));
  transition: clip-path .1s ease-out;
}
.dropdown-header__black::before {
  background-color: var(--black-color);
}

.dropdown-link__active::before {
  clip-path: circle(50% at 50% 50%) !important;
}

:hover.dropdown-link::before {
  clip-path: circle(50% at 50% 50%) !important;
}

:hover.dropdown-link .nav-text {
  transform: translateX(0.75rem);
}

.dropdown-link:hover .nav-text {
  transform: translateX(0.75rem);
}

.nav-text {
  display: block;
  transition: transform 0.2s ease-out, color 0.3s ease;
}

.nav-item__child {
  padding: 0.5rem 0;
}

.nav-item__child .nav-text {
  color: var(--black-color) !important;
}

/* Mobiele apparaten */
@media (max-width: 767px) {
  .nav-list__children {
    position: static;
    display: block;
    opacity: 1;
    visibility: visible;
    box-shadow: none;
    background: transparent;
    padding: 0;
  }
}
</style>