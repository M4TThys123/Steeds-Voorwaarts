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
  }
}
</script>

<style>
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

  --hero-color: var(--color-primary);
  --hero-border-color: var(--grey-color);
  --hero-text-color: var(--white-color);
  --body-background-color: var(--background);
  --text-color: var(--text);
}
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
html {
  scroll-behavior: smooth;
}

body{
  max-width: 100vw;
  overflow-x: hidden;
  background: var(--body-background-color) !important;
  color: var(--text-color);
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

button {
  background: none;
  color: white;
  padding: 10px;
  border: none;
  border-radius: 5px;
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

</style>
