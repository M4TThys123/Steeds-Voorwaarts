<template>
  <div>
    <h2 class="mb-3">Tarieven {{ schoolYearLabel }}</h2>

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
    // Optioneel: instelbare start van zomervakantie (cutoff)
    schoolYearCutoffMonth: { // 1–12
      type: Number,
      default: 7, // 1 juli = maand 7
    },
    schoolYearCutoffDay: { // 1–31
      type: Number,
      default: 1, // dag 1
    },
  },
  computed: {
    schoolYearLabel() {
      const now = new Date();
      const year = now.getFullYear();
      const cutoffThisYear = new Date(
        year,
        (this.schoolYearCutoffMonth || 7) - 1,
        this.schoolYearCutoffDay || 1,
        0, 0, 0, 0
      );
      const startYear = now >= cutoffThisYear ? year : year - 1;
      return `${startYear}-${startYear + 1}`;
    },
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
  background-color: transparent !important;
}
</style>
