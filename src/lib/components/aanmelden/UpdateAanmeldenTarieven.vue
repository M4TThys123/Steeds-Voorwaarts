<template>
  <div>
    <h2 class="mb-3">Tarieven {{ new Date().getFullYear() }}</h2>

    <v-data-table
        :headers="tariefHeaders"
        :items="tariefContent"
        class="elevation-0 class"
        dense
        hide-default-footer
        style="background: none !important;"
    >
      <template v-slot:top></template>
    </v-data-table>
  </div>
</template>

<script>
export default {
  name: "UpdatedAanmeldenTarieven",
  props: {
    aanmeldenTarievenData: {
      type: Object,
      required: true,
    },
    isAanmeldenTarievenDataLoading: {
      type: Boolean,
      required: true,
    },
  },
  computed: {
    tariefHeaders() {
      return [
        { title: this.aanmeldenTarievenData?.tarief_headers?.[0]?.kolom1 || "Activiteit", value: "activiteit" },
        { title: this.aanmeldenTarievenData?.tarief_headers?.[0]?.kolom2 || "Tarief", value: "tarief" },
      ];
    },
    tariefContent() {
      return this.aanmeldenTarievenData?.tarief_content || [];
    },
  },
};
</script>

<style scoped>
.v-data-table {
  max-width: 600px;
  margin: auto;
}
.v-data-table th {
  text-align: left;
  font-weight: bold;
}
.class, class *, class > * {
  /*background: none !important;*/
  background-color: transparent !important;
}
</style>