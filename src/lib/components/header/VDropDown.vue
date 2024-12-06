<template>
  <div class="text-center">
    <!-- Vuetify Menu -->
    <v-menu
        open-on-hover
        offset-y
    >
      <!-- Activator: Button -->
      <template v-slot:activator="{ props }">
        <v-btn
            color="primary"
            v-bind="props"
        >
          Dropdown
        </v-btn>
      </template>

      <!-- Dropdown Items -->
      <v-list>
        <v-list-item
            v-for="(item, index) in items"
            :key="index"
            @click="handleClick(item)"
        >
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </div>
</template>

<script>
export default {
  name: "DropdownMenu",
  data: () => ({
    items: [
      { title: 'Option 1', value: 1 },
      { title: 'Option 2', value: 2 },
      { title: 'Option 3', value: 3 },
      { title: 'Option 4', value: 4 },
    ],
  }),
  methods: {
    handleClick(item) {
      alert(`You clicked on: ${item.title}`);
      console.log(item.value); // Log de waarde van het geselecteerde item
    },
  },
};
</script>

<style scoped>
.text-center {
  text-align: center;
  margin-top: 20px;
}
</style>