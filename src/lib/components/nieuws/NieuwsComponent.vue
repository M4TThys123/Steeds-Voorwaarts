@@ -0,0 +1,46 @@
<template>
  <div class="container">
    <h1 class="mt-5 mb-3">Laatste Nieuws</h1>
    <div class="row">
      <div class="col-md-4 mb-3" v-for="service in services" :key="service.id">
        <div class="card h-100">
          <img :src="service.image" class="card-img-top" :alt="service.name">
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
          image: 'https://scontent-ams2-1.xx.fbcdn.net/v/t39.30808-6/333973345_763384598325385_1235472419820287753_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=rX6kYF3NXBAAX-A5wO9&_nc_ht=scontent-ams2-1.xx&oh=00_AfC4qEPgkHZXn2tXcKH9AQLHTQt94Oz6Xxh0E7Ia56TyiA&oe=6498ABA5',
          url: 'https://www.facebook.com/steedsvoorwaartsAbbekerk/'
        },
        {
          id: 2,
          name: 'Grote clubactie!',
          description: 'Yeah, wij doen dit jaar weer mee aan de grote clubactie! \n' +
              'Vanaf zaterdag 24 september verkopen onze leden de loten. ',
          image: 'https://scontent-ams2-1.xx.fbcdn.net/v/t39.30808-6/307583568_2281284152038408_4051331112993569346_n.jpg?stp=dst-jpg_p526x296&_nc_cat=100&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=4YM-l8W6zaEAX_ru9si&_nc_ht=scontent-ams2-1.xx&oh=00_AfCTovrRIOO4UJkrlkd_D1KCxHfHl26CImR5WGBrbhcCMw&oe=64985C6C',
          url: 'https://www.facebook.com/steedsvoorwaartsAbbekerk/'
        },
        {
          id: 4,
          name: 'Vacature',
          description: 'Funmoves en bootacmp instructeur gezogt',
          image: 'https://scontent-ams4-1.xx.fbcdn.net/v/t39.30808-6/300395677_2259925674174256_3680472506102973150_n.jpg?stp=dst-jpg_p526x296&_nc_cat=109&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=UUfF3GEwpnAAX-zd5SL&_nc_oc=AQmbQzYwf3uCTz-vUg9jFqqMAHScHnzq2Q6Kbr4MamHSNSq2mCaebGv62m4mbLdINBE&_nc_ht=scontent-ams4-1.xx&oh=00_AfBxHbNpG4ZqD0-PP9Jl4SpG2no4_Ui-oBGNcMQi9jMQGA&oe=6498DBCF',
          url: 'https://www.facebook.com/steedsvoorwaartsAbbekerk/'
        },
      ]
    }
  }
}
</script>