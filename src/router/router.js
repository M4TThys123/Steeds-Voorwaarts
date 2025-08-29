import { createRouter, createWebHistory } from 'vue-router';
import HomeView from "@/views/HomeView.vue";
import LesAanbodView from "@/views/LesAanbodView.vue";
import ContactView from "@/views/ContactView.vue";
// import PrismicView from "@/views/PrismicView.vue";
import AanmeldenView from "@/views/AanmeldenView.vue";
import NieuwsView from "@/views/NieuwsView.vue";
import SportView from "@/views/SportView.vue";

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView,
    meta: {
      hide: false,
      title: 'Welkom bij Steedsvoorwaarts',
      metaTags: [
        {
          name: 'description',
          content: 'Gymnastiek en sport in Abbekerk voor jong en oud. Bekijk ons lesaanbod!'
        }
      ]
    }
  },
  {
    path: '/lesaanbod',
    name: 'Lesaanbod',
    component: LesAanbodView,
    meta: {
      hide: false,
      title: 'Lesaanbod - Steedsvoorwaarts',
      metaTags: [
        {
          name: 'description',
          content: 'Bekijk het uitgebreide lesaanbod van Steedsvoorwaarts: van freerunning tot seniorengym.'
        }
      ],
      dropdown: [
        { name: 'Kleuterdans', route: 'kleuterdans' },
        { name: 'Hiphop', route: 'hiphop' },
        { name: 'Seniorengym', route: 'seniorengym' },
        { name: 'Freerunning', route: 'freerunning' },
        { name: 'Demodans', route: 'demodans' },
        { name: 'Bootcamp', route: 'bootcamp' },
        { name: 'Fysiogym', route: 'fysiogym' }
      ]
    }
  },
  {
    path: '/lesaanbod/:les',
    name: 'Lesaanbod - :les',
    component: SportView,
    meta: {
      hide: true,
      title: 'Lesdetail - Steedsvoorwaarts',
      metaTags: [
        {
          name: 'description',
          content: 'Meer informatie over deze specifieke les bij Steedsvoorwaarts.'
        }
      ]
    }
  },
  {
    path: '/contact',
    name: 'Contact',
    component: ContactView,
    meta: {
      hide: false,
      title: 'Contact - Steedsvoorwaarts',
      metaTags: [
        {
          name: 'description',
          content: 'Neem contact met ons op voor vragen over lessen of inschrijving.'
        }
      ]
    }
  },
  {
    path: '/aanmelden',
    name: 'Aanmelden',
    component: AanmeldenView,
    meta: {
      hide: true,
      title: 'Aanmelden - Steedsvoorwaarts',
      metaTags: [
        {
          name: 'description',
          content: 'Word lid van Steedsvoorwaarts! Meld je eenvoudig online aan.'
        }
      ]
    }
  },
  {
    path: '/nieuws',
    name: 'Nieuws',
    component: NieuwsView,
    meta: {
      hide: true,
      title: 'Nieuws - Steedsvoorwaarts',
      metaTags: [
        {
          name: 'description',
          content: 'Blijf op de hoogte van het laatste nieuws van Steedsvoorwaarts.'
        }
      ]
    }
  },
//   {
//     path: '/primic',
//     name: 'Prismic',
//     component: PrismicView,
//     meta: {
//       hide: true,
//       title: 'CMS - Steedsvoorwaarts',
//       metaTags: [
//         {
//           name: 'description',
//           content: 'Dynamische inhoud via het Prismic CMS-systeem.'
//         }
//       ]
//     }
//   }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  }
});

export default router;
