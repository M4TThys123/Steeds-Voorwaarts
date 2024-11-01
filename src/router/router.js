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
            hide: false, // hide this route in the navigation
        },
    },
    {
        path: '/lesaanbod',
        name: 'Lesaanbod',
        component: LesAanbodView,
        meta: {
            hide: false, // Show this route in the navigation
        },
    },
    {
        path: '/lesaanbod/:les',
        name: 'lesaanbod - :les',
        component: SportView,
        meta: {
            hide: true, // Hide this route in the navigation
        },
    },
    {
        path: '/contact',
        name: 'Contact',
        component: ContactView,
        meta: {
            hide: false, // Show this route in the navigation
        },
    },
    {
        path: '/aanmelden',
        name: 'Aanmelden',
        component: AanmeldenView,
        meta: {
            hide: true, // Show this route in the navigation
        },
    },
    {
        path: '/nieuws',
        name: 'Nieuws',
        component: NieuwsView,
        meta: {
            hide: true, // Show this route in the navigation
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
    routes,
    scrollBehavior(/* to, from, savedPosition */) {
        // always scroll to the top
        return { x: 0, y: 0 };
    }
});

export default router;
