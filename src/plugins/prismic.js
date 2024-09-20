// https://prismic.io/docs/technical-reference/prismicio-vue#set-up-the-plugin

import { createPrismic } from "@prismicio/vue";

const prismic = createPrismic({ endpoint: "streeds-voorwaarts" });

export default prismic;