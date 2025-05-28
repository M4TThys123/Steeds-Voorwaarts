<template>
    <Header></Header>

    <main class="content">
      <router-view class="views"/>
    </main>

    <Footer class="footer"></Footer>
</template>

<script>
import Header from "@/lib/components/header/Header.vue";
import Footer from "@/lib/components/footer/Footer.vue";
export default {
  name: 'App',
  components: {
    Header,
    Footer
  },
  data() {
    return {
      isScrolled: false,
      isBlur: false,
    }
  },
  methods() {
    return {
    handleScroll() {
      console.log('functie werkt.')
      if (window.pageYOffset > 65) {
        this.isScrolled = true;
        this.isBlur = true
        console.log('isCrolled')
      } else {
        this.isScrolled = false;
        this.isBlur = false
        console.log('isNotCrolled')
      }
      }
    }
  },
  mounted() {
    document.body.addEventListener('scroll', this.handleScroll);
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Chivo+Mono:wght@400;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap');



:root{
  --green-color: #398070;
  --grey-color: #D9D9D9;   /* border */
  --light-grey-color: #F6F7F9;
  --light-green-color: #ECF2F2;
  --white-color: #FFFFFF;
  --black-color: #000;

  --text: #1a1919;
  --background: #f5f5f5;
  --primary-button: #398070;
  --secondary-button: #fcfcfc;
  --accent: #3b56bf;

  --color-primary: var(--green-color);
  --color-secondary: #BAC6FF;
  --color-border: #E5E5E6;
  --color-border-fill: #F9F9FB;
  --color-secondary-white: #F7F8FC;

  --header-color: var(--primary-button);
  --hero-color: var(--color-primary);
  --hero-border-color: var(--grey-color);
  --hero-text-color: var(--white-color);
  --body-background-color: var(--background);
  --text-color: var(--text);

  --header-height: 45px;
}
html{
  overflow-x: auto!important;
}

html, body {
  overscroll-behavior: none; /* voorkomt het bounce-effect */
}


*, html {
  scroll-behavior: auto !important;
}

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: Poppins, Avenir, Helvetica, Arial, sans-serif;
  color: var(--text-color);
  -webkit-font-smoothing: antialiased;
}

html ::-webkit-scrollbar {
  /*display: none;*/
}

html {
  /*scroll-behavior: smooth;*/
  /*-ms-overflow-style: none;*/
  /*scrollbar-width: none;*/
}

body{
  max-width: 100vw;
  background  : var(--body-background-color) !important;
  color: var(--text-color);

  /*Verwijderd vanwege de scrollbehavior van de router links.*/
}

.body-wrapper{
  overflow-x: hidden;
}

img {
  width: 100%;
}

p {
  line-height: 1.5;
}

a {
  text-decoration: none !important;
  color: var(--text-color) !important;
}

.v-icon:focus,
.v-icon:active,
a:focus:not(:focus-visible),
a:focus,
a:active {
  outline: none !important;
  box-shadow: none !important;
}

h2{
  font-weight: bold !important;
}
.xsmall-heading{
  font-size: 18px;
  line-height: 1.5;
  letter-spacing: -0.04em;
  font-weight: bold;
}

.mono {
  font-family: "Chivo Mono", monospace !important;
}

.mono * {
  font-family: "Chivo Mono", monospace !important;
}


button {
  color: var(--text);
  padding: .5rem 1.5rem;
  border: none;
}

.primary-btn{
  background: var(--green-color);
  /*font-weight: bold;*/
  color: var(--secondary-button)
}
.secodary-btn{
  background: var(--secondary-button);
}
ul {
  display: flex;
  /*padding: 0 !important;*/
}

li {
  list-style-type: none;
}

/*Screenreaders*/
.sr-only {
  position: absolute;
  left: -9999px;
  width: 1px;
  height: 1px;
  overflow: hidden;
}

/* Ensure focus highlights are visible */
*:focus {
  outline: 2px solid dodgerblue;
  outline-offset: 4px;
}
.footer {
  margin-top: auto; /* Push the footer to the bottom */
}
.content {
  flex: 1; /* Expand to fill remaining space */
}

.v-data-table-header__content{
  font-weight: bold;
}
.v-icon{
  transition: color .5s;
}

/* SM (for tablets - screens ≥ than 768px wide) */
@media (width >= 768px) {

}
/* MD (for small laptops - screens ≥ than 992px wide) */
@media (width >= 992px) {
  .xsmall-heading {
    font-size: 1.3888888889vw;
  }
}
/* LG (for laptops and desktops - screens ≥ than 1200px wide) */
@media (width >= 1200px) {}



</style>
