<template>
  <div>
    <h2 class="mb-3">Tarieven 2023-2024</h2>

    <v-data-table
        :headers="tariefHeaders"
        :items="tariefContent"
        class="elevation-0"
        dense
        hide-default-footer
    >
      <template v-slot:top></template>
    </v-data-table>

    <h3>Headers</h3>
    <pre>{{ tariefHeaders }}</pre>
    <h3>Items</h3>
    <pre>{{ tariefContent }}</pre>

    {{aanmeldenTarievenData}}
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
        { name: this.aanmeldenTarievenData?.tarief_headers?.[0]?.kolom1 || "Activiteit", value: "activiteit" },
        { name: this.aanmeldenTarievenData?.tarief_headers?.[0]?.kolom2 || "Tarief", value: "tarief" },
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
</style>