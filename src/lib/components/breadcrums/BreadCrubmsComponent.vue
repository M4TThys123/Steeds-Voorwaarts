<template>
  <div class="container">
    <v-breadcrumbs
        :items="items"
        divider="-"
    ></v-breadcrumbs>
  </div>
</template>

<script>
export default {
  data: () => ({
    items: [
      {
        title: 'Dashboard',
        disabled: false,
        to: { name: 'Home' }, // matches the name in the router
      },
      {
        title: 'Lesaanbod',
        disabled: false,
        to: { name: 'lesaanbod' },
      },
      {
        title: 'Freerunning',
        disabled: true,
        to: { name: 'lesaanbod' },
      },
      // {
      //   title: 'Contact',
      //   disabled: false,
      //   to: { name: 'Contact' },
      // },
      // {
      //   title: 'Aanmelden',
      //   disabled: false,
      //   to: { name: 'Aanmelden' }, // You can disable this link if needed
      // },
      // {
      //   title: 'Nieuws',
      //   disabled: false,
      //   to: { name: 'Nieuws' },
      // },
    ],
  }),
}
</script>
