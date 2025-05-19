<template>
  <section class="content-section container py-5">
    <div class="row justify-content-between">

      <div class="col-12 col-md-6 col-lg-5 d-flex flex-column">
        <ContactInformation/>
      </div>

      <div class="col-12 col-md-6 col-lg-7 d-flex flex-column justify-content-center mb-5">
        <slot name="left">
          <h2 class="content-heading mb-4">{{ title }}</h2>
          <p class="content-subheading mb-4">{{ overOnsData.beschrijving_subtitle }}</p>
          <p class="content-text mb-4">{{ overOnsData.beschrijving }}</p>

          <ButtonComponent></ButtonComponent>
        </slot>
      </div>
    </div>
  </section>
</template>

<script>
import ButtonComponent from "@/lib/components/elements/ButtonComponent.vue";
import ContactInformation from "@/lib/components/contact/ContactInformation.vue";
import Prismic from "prismic-javascript";
// import { ref } from 'vue';

export default {
  name: 'UpdatedInformationSection',
  components: {ContactInformation, ButtonComponent },
  data() {
    return {
      overOnsData: [],
      isOverOnsDataLoading: true,
      title: 'Over ons',
      subTitle: null,
      description: null,
    }
  },
  methods: {
    async fetchOverOns() {
      try {
        const apiEndpoint = 'https://streeds-voorwaarts.cdn.prismic.io/api/v2';
        const api = await Prismic.api(apiEndpoint);
        const response = await api.query(Prismic.Predicates.at('document.type', 'over_ons'));

        this.overOnsData = response.results[0].data;
        this.subTitle = this.overOnsData.beschrijving_subtitle;
        this.description = this.overOnsData.beschrijving;

      } catch (error) {
        console.error('Error fetching data from Prismic:', error);
      }
    },
  },
  mounted() {
    this.fetchOverOns();
  },
  setup() {
    const copyToClipboard = (text) => {
      navigator.clipboard.writeText(text);
      alert(`${text} copied to clipboard!`);
    };
    return { copyToClipboard };
  }
};
</script>

<style scoped>
.content-section {
}

.content-heading {
  font-weight: 900;
  font-size: 20px;
  line-height: 1.25;
}

.content-subheading {
  font-size: 22px;
  line-height: 1.25;
  letter-spacing: -0.04em;
}

.content-text {
  font-size: 1rem;
  line-height: 1.5;
  letter-spacing: 0;
}

.content-contact-item {
  font-size: 1rem;
  margin-bottom: 1rem;
}

.contact-link {
  color: #007bff;
  text-decoration: underline;
  cursor: pointer;
}

.contact-copy {
  cursor: pointer;
  color: #007bff;
}

.copy-icon {
  font-size: 1rem;
  margin-left: 0.5rem;
}

.copy-icon:hover {
  color: #0056b3;
}

.copy-icon:active {
  color: #003d80;
}

.content-link a {
  color: #007bff;
  text-decoration: underline;
}

.content-link a:hover {
  color: #0056b3;
  text-decoration: none;
}

/* Responsive typography adjustments */
@media (min-width: 992px) {
  .content-heading {
    font-size: 1.75rem;
  }
  .content-subheading {
    font-size: 1.5rem;
  }
  .content-text {
    font-size: 1.125rem;
  }
}
</style>