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
      title: 'Steeds Voorwaarts - Sportvereniging voor jong en oud',
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
      title: 'Lesaanbod - Steeds Voorwaarts',
      metaTags: [
        {
          name: 'description',
          content: 'Bekijk het uitgebreide lesaanbod van Steeds Voorwaarts: van freerunning tot fit en vitaal.'
        }
      ],
      dropdown: [
        { name: 'Kleuterdans', route: 'kleuterdans' },
        { name: 'Hiphop', route: 'hiphop' },
        { name: 'Fit en Vitaal', route: 'fit-en-vitaal' },
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
      title: 'Lesdetail - Steeds Voorwaarts',
      metaTags: [
        {
          name: 'description',
          content: 'Meer informatie over deze specifieke les bij Steeds Voorwaarts.'
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
      title: 'Contact - Steeds Voorwaarts',
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
      title: 'Aanmelden - Steeds Voorwaarts',
      metaTags: [
        {
          name: 'description',
          content: 'Word lid van Steeds Voorwaarts! Meld je eenvoudig online aan.'
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
      title: 'Nieuws - Steeds Voorwaarts',
      metaTags: [
        {
          name: 'description',
          content: 'Blijf op de hoogte van het laatste nieuws van Steeds Voorwaarts.'
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
