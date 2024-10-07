<template>
  <section class="container">
    <h2>Week Rooster</h2>
    <v-data-table
        :items="formattedSchedule"
        :loading="loading"
        class="elevation-2 pa-5 rounded-xl"
        hide-default-footer>
      <template v-slot:loading>
        <v-skeleton-loader type="table-row@10"></v-skeleton-loader>
      </template>

      <!-- Day column -->
      <template v-slot:[`item.day`]="{ item }">
        <strong>{{ item.day }}</strong>
      </template>

      <!-- Activities column -->
      <template v-slot:[`item.activities`]="{ item }">
        <div v-for="(activity, i) in item.activities" :key="'activity-' + i" class="activity-row">
          <div class="activity-name">{{ activity.name }}</div>
          <div class="activity-time">{{ activity.time }}</div>
          <div class="activity-target">{{ activity.target }}</div>
          <div class="activity-instructor">{{ activity.instructor }}</div>
        </div>
      </template>
    </v-data-table>
  </section>
</template>

<script>
export default {
  name: 'RoosterComponent',
  data() {
    return {
      loading: true,
      schedule: [
        {
          day: "Dinsdag",
          activities: [
            {
              name: "Kleuterdans",
              time: "15.15 - 16.00",
              target: "Groep 1, 2 en 3",
              instructor: "Beau Smits"
            },
            {
              name: "Hiphop 1",
              time: "16.00 - 17.00",
              target: "Groep 3, 4 en 5",
              instructor: "Beau Smits"
            },
            {
              name: "Hiphop 2",
              time: "17.00 - 18.00",
              target: "Groep 6, 7 en 8",
              instructor: "Beau Smits"
            }
          ]
        },
        {
          day: "Woensdag",
          activities: [
            {
              name: "Seniorengym",
              time: "9.00 - 10.00",
              target: "senioren",
              instructor: "Marjan Schrama"
            }
          ]
        },
        {
          day: "Donderdag",
          activities: [
            {
              name: "Freerunnen 1",
              time: "17.30 - 18.30",
              target: "Groep 5 t/m 8",
              instructor: "Matthijs Blauw"
            },
            {
              name: "Freerunnen 2",
              time: "19.30 - 20.30",
              target: "vanaf 12 jaar",
              instructor: "Matthijs Blauw"
            },
            {
              name: "Bootcamp",
              time: "19.30 - 20.30",
              target: "Volwassenen",
              instructor: "Loraine Besseling"
            }
          ]
        },
        {
          day: "Vrijdag",
          activities: [
            {
              name: "Fysiogym",
              time: "9.00 - 10.00",
              target: "Volwassenen",
              instructor: "Dorien Sybenga"
            }
          ]
        }
      ]
    };
  },
  computed: {
    formattedSchedule() {
      // Flatten the activities into a single list of items
      return this.schedule.map(day => ({
        day: day.day,
        activities: day.activities
      }));
    }
  },
  mounted() {
    setTimeout(() => {
      this.loading = false;
    }, 2000); // Simulate a loading delay
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

.activity-name {
  font-weight: bold;
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
