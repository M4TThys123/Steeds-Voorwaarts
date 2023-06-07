<template>
  <button id="ham-burger" :class="{ 'open': isNavOpen }">
    <span :class="{'white' : !isScrolled}"></span>
    <span :class="{'white' : !isScrolled}"></span>
    <span :class="{'white' : !isScrolled}"></span>
    <span :class="{'white' : !isScrolled}"></span>
  </button>
</template>

<script>
export default {
  name: "HamburgerMenu",
  props: {
    isNavOpen: {
      type: Boolean,
      required: true
    },
    isScrolled:{
      type: Boolean,
      required: true
    }
  },
  methods: {
    toggleNav() {
      console.log('toggle nav')
      this.$emit('click');
    }
  }
}
</script>

<style scoped>
#ham-burger {
  width: 32px;
  height: 32px;
  position: relative;
  -webkit-transform: rotate(0deg);
  -moz-transform: rotate(0deg);
  -o-transform: rotate(0deg);
  transform: rotate(0deg);
  -webkit-transition: .5s ease-in-out;
  -moz-transition: .5s ease-in-out;
  -o-transition: .5s ease-in-out;
  transition: .5s ease-in-out;
  cursor: pointer;
}

#ham-burger span {
  display: block;
  position: absolute;
  height: 5px;
  width: 100%;
  background: #14151a;
  border-radius: 4px;
  opacity: 1;
  left: 0;
  -webkit-transform: rotate(0deg);
  -moz-transform: rotate(0deg);
  -o-transform: rotate(0deg);
  transform: rotate(0deg);
  -webkit-transition: .25s ease-in-out;
  -moz-transition: .25s ease-in-out;
  -o-transition: .25s ease-in-out;
  transition: .25s ease-in-out;
}

/* Icon 3 */
#ham-burger span:nth-child(1) {
  top: 5px;
}

#ham-burger span:nth-child(2),#ham-burger span:nth-child(3) {
  top: 15px;
}

#ham-burger span:nth-child(4) {
  top: 25px;
}

#ham-burger.open span:nth-child(1) {
  top: 15px;
  width: 0%;
  left: 50%;
}

#ham-burger.open span:nth-child(2) {
  -webkit-transform: rotate(45deg);
  -moz-transform: rotate(45deg);
  -o-transform: rotate(45deg);
  transform: rotate(45deg);
}

#ham-burger.open span:nth-child(3) {
  -webkit-transform: rotate(-45deg);
  -moz-transform: rotate(-45deg);
  -o-transform: rotate(-45deg);
  transform: rotate(-45deg);
}

#ham-burger.open span:nth-child(4) {
  top: 10px;
  width: 0%;
  left: 50%;
}
.white{
  background: #FFFFFF !important;
}
</style>