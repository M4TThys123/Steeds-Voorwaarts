<template>
  <button class="button-component" :style="{ background: backgroundColor }">
    <img :src="`/public/assets/images/icons/${iconName}`" :alt="imageAltText" class="button-icon">
    <img src="/public/assets/images/icons/send.png" :alt="imageAltText" class="button-icon">

      <span class="button-text">
        {{ text }}
      </span>
  </button>
</template>

<script>
export default {
  name: "ButtonComponent",
  props: {
    background: {
      type: String,
      default: '#14151a',
    },
    text:{
      type: String,
      default: "Knop"
    },
    iconName:{
      type: String,
      required: true
    }
  },
  computed: {
    backgroundColor() {
      return this.background;
    }
  },
}
</script>

<style scoped>
.button-component{
  border-radius: 22px;
  min-width: 100px;
  /*height: 40px;*/


  display: flex;
  justify-content: center;
  align-items: center;
}
.button-icon{
  width: 18px;
  height: 18px;
  fill: #FFFFFF;
}
.button-text{
  font-size: 18px;
  margin-left: .25em;
}
</style>