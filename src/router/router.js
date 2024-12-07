import { createRouter, createWebHistory } from 'vue-router';
import HomeView from "@/views/HomeView.vue";
import LesAanbodView from "@/views/LesAanbodView.vue";
import ContactView from "@/views/ContactView.vue";
import PrismicView from "@/views/PrismicView.vue";
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
        },
    },
    {
        path: '/lesaanbod',
        name: 'Lesaanbod',
        component: LesAanbodView,
        meta: {
            hide: false,
            dropdown: [
                {
                    name: 'Fysiogym',
                    route: 'fysiogym',
                },
                {
                    name: 'Bootcamp',
                    route: 'bootcamp',
                },
                {
                    name: 'Hiphop',
                    route: 'hiphop',
                },
                {
                    name: 'Freerunning',
                    route: 'freerunning',
                },
                {
                    name: 'Seniorengym',
                    route: 'seniorengym',
                },
            ],
        },
    },

    {
        path: '/lesaanbod/:les',
        name: 'Lesaanbod - :les',
        component: SportView,

        meta: {
            hide: true,
        },
    },
    {
        path: '/contact',
        name: 'Contact',
        component: ContactView,
        meta: {
            hide: false,
        },
    },
    {
        path: '/aanmelden',
        name: 'Aanmelden',
        component: AanmeldenView,
        meta: {
            hide: true,
        },
    },
    {
        path: '/nieuws',
        name: 'Nieuws',
        component: NieuwsView,
        meta: {
            hide: true,
        },
    },

    {
        path: '/primic',
        name: 'Prismic',
        component: PrismicView,
        meta: {
            hide: true, // Show this route in the navigation
        },
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes: routes,
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition;
        } else {
            return { top: 0 };
        }
    }
});

export default router;
