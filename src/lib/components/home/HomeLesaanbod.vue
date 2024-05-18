<template>
  <section>
    <div class="container">
      <h1 class="mt-5 mb-3">Lesaanbod</h1>
      <swiper :slides-per-view="3.5" :space-between="30" class="my-swiper">
        <swiper-slide v-for="service in services" :key="service.id">
          <div class="card h-100 fixed-card">
            <figure>
              <img :src="service.image" class="card-img-top fixed-img" :alt="service.name">
            </figure>
            <div class="card-body">
              <h5 class="card-title">{{ service.name }}</h5>
              <p class="card-text">{{ service.description }}</p>
            </div>
            <div class="card-footer">
              <a :href="service.url" target="_blank">Lees meer</a>
            </div>
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </section>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/swiper-bundle.css';

export default {
  name: 'HomeLesaanbod',
  components: {
    Swiper,
    SwiperSlide
  },
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
          description: 'Funmoves en bootcamp instructeur gezocht',
          image: 'https://via.placeholder.com/300x200.png?text=Vacature',
          url: 'https://www.facebook.com/steedsvoorwaartsAbbekerk/'
        },
        {
          id: 5,
          name: 'Zomertraining',
          description: 'Schrijf je in voor onze zomertraining en blijf fit!',
          image: 'https://via.placeholder.com/300x200.png?text=Zomertraining',
          url: 'https://www.example.com/zomertraining'
        },
        {
          id: 6,
          name: 'Winterkamp',
          description: 'Doe mee aan ons winterkamp en beleef een onvergetelijke ervaring!',
          image: 'https://via.placeholder.com/300x200.png?text=Winterkamp',
          url: 'https://www.example.com/winterkamp'
        },
        {
          id: 7,
          name: 'Yoga Sessies',
          description: 'Neem deel aan onze ontspannende yogasessies elke zaterdag.',
          image: 'https://via.placeholder.com/300x200.png?text=Yoga Sessies',
          url: 'https://www.example.com/yoga'
        },
        {
          id: 8,
          name: 'Kinderfeestjes',
          description: 'Boek een sportief kinderfeestje bij ons!',
          image: 'https://via.placeholder.com/300x200.png?text=Kinderfeestjes',
          url: 'https://www.example.com/kinderfeestjes'
        },
        {
          id: 9,
          name: 'Personal Training',
          description: 'Haal het beste uit jezelf met onze personal training.',
          image: 'https://via.placeholder.com/300x200.png?text=Personal Training',
          url: 'https://www.example.com/personal-training'
        },
      ]
    }
  }
}
</script>

<style>
/* Custom styles for Swiper */
.my-swiper {
  padding: 20px 0;
}

.swiper-slide {
  display: flex;
  justify-content: center;
  align-items: center;
}

.fixed-card {
  width: 100%;
  height: 400px; /* Set a fixed height for the cards */
  display: flex;
  flex-direction: column;
}

.fixed-img {
  height: 200px; /* Set a fixed height for the image */
  object-fit: cover;
}
</style>
