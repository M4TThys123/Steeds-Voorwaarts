<template>
  <section class="container">
    <h2>Week Rooster</h2>
    <div class="table-responsive">
      <table class="table table-striped">
        <thead>
        <tr>
          <th scope="col">Dag</th>
          <th scope="col">Activiteit</th>
          <th scope="col">Tijd</th>
          <th scope="col">Doelgroep</th>
          <th scope="col">Instructeur</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="day in schedule" :key="day.day">
          <td class="fw-bold">{{ day.day }}</td>
          <td>
            <ul>
              <li v-for="activity in day.activities" :key="activity.name">
                {{ activity.name }}
              </li>
            </ul>
          </td>
          <td>
            <ul>
              <li v-for="activity in day.activities" :key="activity.time">
                {{ activity.time }}
              </li>
            </ul>
          </td>
          <td>
            <ul>
              <li v-for="activity in day.activities" :key="activity.target">
                {{ activity.target }}
              </li>
            </ul>
          </td>
          <td>
            <ul>
              <li v-for="activity in day.activities" :key="activity.instructor">
                {{ activity.instructor }}
              </li>
            </ul>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
  </section>
</template>



<script>
export default {
  name: "RoosterComponent",
  data() {
    return {
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
  }

}
</script>

<style scoped>
ul {
  flex-direction: column;
  margin: 0;
  padding: 0;
  list-style: none;
}

li {
  margin-bottom: 12px;
}

.table-responsive {
  overflow-x: auto;
}
</style>
