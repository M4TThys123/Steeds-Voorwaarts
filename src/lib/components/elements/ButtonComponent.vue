<template>
  <button class="button-component">


      <span class="button-text">
        Mailen
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
}
</script>

<style scoped>
.button-component{
  background: rgb(57, 128, 112);
  border-radius: 22px;
  width: 140px;
  height: 40px;
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
  color: var(--white-color)
}
</style>