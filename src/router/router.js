import { createRouter, createWebHistory } from 'vue-router';
import HomeView from "@/views/HomeView.vue";
import SportenView from "@/views/SportenView.vue";
import ContactView from "@/views/ContactView.vue";
import PrismicView from "@/views/PrismicView.vue";
// import SportView from "@/views/SportView.vue";

const routes = [
    {
        path: '/',
        name: 'Home',
        component: HomeView,
        meta: {
            hide: true, // hide this route in the navigation
        },
    },
    {
        path: '/lesaanbod',
        name: 'Lesaanbod',
        component: SportenView,
        meta: {
            hide: false, // Show this route in the navigation
        },
    },
    // {
    //     path: '/sporten/:uid',
    //     name: 'Sport Detail',
    //     component: SportView,
    //     meta: {
    //         hide: false, // Hide this route in the navigation
    //     },
    // },
    {
        path: '/contact',
        name: 'Contact',
        component: ContactView,
        meta: {
            hide: false, // Show this route in the navigation
        },
    },
    {
        path: '/primic',
        name: 'Prismic',
        component: PrismicView,
        meta: {
            hide: false, // Show this route in the navigation
        },
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
