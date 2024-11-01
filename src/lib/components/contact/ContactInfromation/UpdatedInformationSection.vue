<template>
  <section class="content-section container py-5">
    <div class="row">

      <div class="col-md-4 d-flex flex-column">
        <ContactInformation/>
      </div>

      <div class="col-md-8 d-flex flex-column justify-content-center mb-5">
        <slot name="left">
          <h2 class="content-heading mb-4">{{ title }}</h2>
          <p class="content-subheading mb-4">{{ subTitle }}</p>
          <p class="content-text mb-4">{{ description }}</p>
          <ButtonComponent></ButtonComponent>
        </slot>
      </div>
    </div>
  </section>
</template>

<script>
import ButtonComponent from "@/lib/components/elements/ButtonComponent.vue";
import ContactInformation from "@/lib/components/contact/ContactInformation.vue";
// import { ref } from 'vue';

export default {
  name: 'UpdatedInformationSection',
  components: {ContactInformation, ButtonComponent },
  props: {
    title: {
      type: String,
      default: 'Over ons'
    },
    subTitle: {
      type: String,
      default: 'Plezierig sporten in een ongedwongen sfeer onder gemotiveerde, vakbekwame leiding staat bij ons centraal.'
    },
    description: {
      type: String,
      default:
          'Wil je kennismaken met onze vereniging, kom dan gerust eens langs voor 2 gratis proeflessen.\n\nWij bieden voor alle leeftijden volop sportieve mogelijkheden, zoals: Kleuterdans, Hip Hop en Freerunning voor jongens en meisjes, Total Body Workout en Fysiogym voor volwassenen en Seniorengym voor ouderen.'
    },
    addressTitle: {
      type: String,
      default: 'Address'
    },
    address: {
      type: String,
      default: 'Zevenend 45, 1251 RL Laren'
    },
    phoneTitle: {
      type: String,
      default: 'Phone'
    },
    phone: {
      type: String,
      default: '+31 (0)35 - 5 333 333'
    },
    emailTitle: {
      type: String,
      default: 'Email'
    },
    email: {
      type: String,
      default: 'welcome@talpastudios.com'
    },
    kvkTitle: {
      type: String,
      default: 'KVK'
    },
    kvk: {
      type: String,
      default: '76214559'
    },
    pageLink: {
      type: String,
      default: '/lesaanbod'
    }
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