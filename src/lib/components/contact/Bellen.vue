<template>
<button       @click="callNumber()">
  <i data-v-ca8c3fce="" class="bx bxs-phone"></i>
  <span>Bellen</span>
</button>
</template>

<script>
export default {
  name: "Component",
  data() {
    return {
      number: '123-456-7890'
    }
  },
  methods: {
    callNumber(number)
    {
      window.location.href = "tel:" + number;
    }
  }
}
</script>

<style scoped>
</style>