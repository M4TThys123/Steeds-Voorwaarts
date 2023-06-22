<template>
  <button class="button-component"
          :style="{ background: backgroundColor }"
          @click="toggleLoading"
          :class="{ 'loading': isLoading }">
    <svg class="button-icon"
         xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
         v-show="!isLoading">
      <path
          d="m21.426 11.095-17-8A1 1 0 0 0 3.03 4.242l1.212 4.849L12 12l-7.758 2.909-1.212 4.849a.998.998 0 0 0 1.396 1.147l17-8a1 1 0 0 0 0-1.81z"></path>
    </svg>

    <span class="button-text" v-show="!isLoading">
        Versturen
      </span>

    <section v-if="isLoading" class="spinner-border spinner-border-sm text-light" role="status">
      <span class="sr-only">Loading...</span>
    </section>
  </button>
</template>

<script>
export default {
  name: "SendButton",
  data() {
    return {
      isLoading: false
    }
  },
  props: {
    background: {
      type: String,
      default: '#398070',
    },
  },
  computed: {
    backgroundColor() {
      return this.background;
    }
  },
  methods: {
    toggleLoading() {
      this.isLoading = true;
      setTimeout(() => {
        this.isLoading = false;
      }, 2000); // Simulating a 2-second loading time
    }
  }
}
</script>

<style scoped>
.button-component {
  border-radius: 22px;
  min-width: 100px;
  width: 140px;
  height: 42px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: .5s ease-in-out;
}

.button-component.loading {
  background-color: #CCCCCC;
  cursor: not-allowed;
}

.button-icon {
  width: 18px;
  height: 18px;
  fill: #FFFFFF;
}

.button-text {
  font-size: 18px;
  margin-left: .25em;
  color: #FFFFFF;
}
</style>
s