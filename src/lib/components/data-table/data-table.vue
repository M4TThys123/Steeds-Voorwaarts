  <template>
    <v-data-table
        :headers="headers"
        :items="items"
        item-key="name"
        items-per-page="5"
    ></v-data-table>
    <h3>Headers</h3>
    <pre>{{ headers }}</pre>
    <h3>Items</h3>
    <pre>{{ items }}</pre>
  </template>
  <script>
    export default {
      name: "data-table",
      data: () => ({
        headers: [
          { title: 'Activiteit', value: 'activiteit' },
          { title: 'Tarief', value: 'tarief' },
        ],
        items: [
          {
            activiteit: 'Kleuterdans',
            tarief: '€ 150,00',

          },
          {
            activiteit: 'Pyramid of Khafre',
            tarief: 'Egypt',

          },
          {
            name: 'Red Pyramid',
            tarief: 'Egypt',
          },
       ],
      }),
    }
  </script>