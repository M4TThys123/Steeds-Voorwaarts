@@ -0,0 +1,46 @@
<template>
  <section>
  <div class="container">
    <h1 class="mt-5 mb-3">Laatste Nieuws</h1>
    <div class="row">
      <div class="col-md-4 mb-3" v-for="service in services" :key="service.id">
        <div class="card h-100">
          <figure>
            <img :src="service.image" class="card-img-top" :alt="service.name">
          </figure>
          <div class="card-body">
            <h5 class="card-title">{{ service.name }}</h5>
            <p class="card-text">{{ service.description }}</p>
          </div>
          <div class="card-footer" >
            <a :href="service.url"  target="_blank">Lees meer</a>
          </div>
        </div>
      </div>
    </div>
  </div>
  </section>
</template>

<script>
export default {
  name: 'NieuwsComponent',
  data() {
    return {
      services: [
        {
          id: 3,
          name: 'Noord-Holland actief',
          description: 'Doe jij mee met Noord-Holland actief? Check de link en schrijf je gratis in voor een, twee of drie activiteiten.',
          image: 'https://via.placeholder.com/300x200.png?text=Noord-Holland actief',
          url: 'https://www.facebook.com/steedsvoorwaartsAbbekerk/'
        },
        {
          id: 2,
          name: 'Grote clubactie!',
          description: 'Yeah, wij doen dit jaar weer mee aan de grote clubactie! \n' +
              'Vanaf zaterdag 24 september verkopen onze leden de loten. ',
          image: 'https://via.placeholder.com/300x200.png?text=Grote clubactie!',
          url: 'https://www.facebook.com/steedsvoorwaartsAbbekerk/'
        },
        {
          id: 4,
          name: 'Vacature',
          description: 'Funmoves en bootacmp instructeur gezogt',
          image: 'https://via.placeholder.com/300x200.png?text=Vacature',
          url: 'https://www.facebook.com/steedsvoorwaartsAbbekerk/'
        },
      ]
    }
  }
}
</script>