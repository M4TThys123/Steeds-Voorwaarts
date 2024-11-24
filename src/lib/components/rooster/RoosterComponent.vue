<template>
  <section class="container">
    <h2 class="mb-3">Week Rooster</h2>
    <v-data-table
        :items="formattedSchedule"
        :loading="loading"
        class="elevation-2 pa-5 rounded-xl"
        hide-default-footer>
      <template v-slot:loading>
        <v-skeleton-loader type="table-row@10"></v-skeleton-loader>
      </template>

      <!-- Day column -->
      <template v-slot:[`item.dag`]="{ item }">
        <strong class="dag">{{ item.dag }}</strong>
      </template>

      <!-- Activities column -->
      <template v-slot:[`item.sporten`]="{ item }">
        <div v-for="(activity, i) in item.sporten" :key="'activity-' + i" >
          <router-link :to="`/lesaanbod/${activity.route}`" class="activity-row">
            <div class="activity-name">{{ activity.name }}</div>
            <div class="activity-time">{{ activity.time }}</div>
            <div class="activity-target">{{ activity.target }}</div>
            <div class="activity-instructor">{{ activity.instructor }}</div>
          </router-link>
        </div>
      </template>
    </v-data-table>
  </section>
</template>

<script>
import Prismic from "prismic-javascript";

export default {
  name: 'RoosterComponent',
  data() {
    return {
      loading: true,
      schedule: [
        {
          dag: "Dinsdag",
          sporten: [
            {
              name: "Kleuterdans",
              route: "kleuterdans",
              time: "15.15 - 16.00",
              target: "Groep 1, 2 en 3",
              instructor: "Beau Smits"
            },
            {
              name: "Hiphop 1",
              route: "hiphop",
              time: "16.00 - 17.00",
              target: "Groep 3, 4 en 5",
              instructor: "Beau Smits"
            },
            {
              name: "Hiphop 2",
              route: "hiphop",
              time: "17.00 - 18.00",
                target: "Groep 6, 7 en 8",
              instructor: "Beau Smits"
            }
          ]
        },
        {
          dag: "Woensdag",
          sporten: [
            {
              name: "Seniorengym",
              route: "seniorengym",
              time: "9.00 - 10.00",
              target: "senioren",
              instructor: "Marjan Schrama"
            }
          ]
        },
        {
          dag: "Donderdag",
          sporten: [
            {
              name: "Freerunnen 1",
              route: "freerunnen",
              time: "17.30 - 18.30",
              target: "Groep 5 t/m 8",
              instructor: "Matthijs Blauw"
            },
            {
              name: "Freerunnen 2",
              route: "freerunnen",
              time: "19.30 - 20.30",
              target: "vanaf 12 jaar",
              instructor: "Matthijs Blauw"
            },
            {
              name: "Bootcamp",
              route: "bootcamp",
              time: "19.30 - 20.30",
              target: "Volwassenen",
              instructor: "Loraine Besseling"
            }
          ]
        },
        {
          dag: "Vrijdag",
          sporten: [
            {
              name: "Fysiogym",
              route: "fysiogym",
              time: "9.00 - 10.00",
              target: "Volwassenen",
              instructor: "Dorien Sybenga"
            }
          ]
        }
      ],
      schemaData: [],
    };
  },
  methods: {
    async fetchRoosters() {
      try {
        console.log('functie voert uit');
        const apiEndpoint = 'https://streeds-voorwaarts.cdn.prismic.io/api/v2';
        const api = await Prismic.api(apiEndpoint);
        const response = await api.query(
            Prismic.Predicates.at('document.type', 'Rooster')
        );
        this.schemaData = response.results; // Haal alle resultaten op
        console.log(response);
        console.log('einde');

        console.log('fetchRoosters', this.schemaData);
      } catch (error) {
        console.error('Error fetching data from Prismic:', error);
      } finally {
        this.loading = false;
      }
    },
  },
  computed: {
    formattedSchedule() {
      // Flatten the sporten into a single list of items
      return this.schedule.map(dag => ({
        dag: dag.dag,
        sporten: dag.sporten
      }));
    }
  },
  mounted() {
    this.fetchRoosters();
  }
};
</script>

<style scoped>
ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

li {
  margin-bottom: 12px;
}

.activity-row {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr; /* Four equal columns */
  gap: 10px;
  padding: 10px 0;
}
.dag{
  font-size: 1.125rem;
}

.activity-row:hover {
   background-color: var(--light-green-color);
 }

.activity-name {
  font-weight: bold;
  text-decoration: underline;
  color: var(--color-primary) !important;
  padding-left: 16px;
}

.activity-row:hover .activity-name {
  color: var(--accent) !important;
}

.activity-time, .activity-target, .activity-instructor {
  font-style: italic;
}

/* Optionally adjust for responsive layout */
@media (max-width: 600px) {
  .activity-row {
    grid-template-columns: 1fr;
    gap: 5px;
  }
}
</style>

<style>
/*thead > tr > th:nth-child(2) .v-data-table-header__content {*/
/*  padding-left: 16px;*/
/*}*/

  th  span {
    font-size: 22px;
    margin-right: 4px;
  }
</style>
