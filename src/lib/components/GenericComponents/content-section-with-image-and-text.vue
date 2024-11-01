<template>
  <section class="content-section-with-image-and-text py-10">
    <v-container>
      <v-row>
        <!-- Left Content Slot (Text) -->
        <v-col cols="12" md="6" class="d-flex flex-column justify-center mb-5">
          <v-skeleton-loader
              v-if="loading"
              type="text@3"
              class="mb-4"
              max-width="100%"
          />
          <template v-else>
            <slot name="left">
              <h2 class="content-heading mb-4">{{ title }}</h2>
              <p class="content-subheading mb-4">{{ subTitle }}</p>
              <p class="content-text mb-4">{{ description }}</p>
              <ButtonComponent :label="buttonLabel" :onClick="buttonAction" />
            </slot>
          </template>
        </v-col>

        <!-- Right Content Slot (Image) -->
        <v-col cols="12" md="6" class="d-flex align-center justify-center">
          <v-skeleton-loader
              v-if="loading"
              type="image"
              max-width="300"
              max-height="300"
              class="rounded-circle"
          />
          <template v-else>
            <slot name="right">
              <a :href="imageLink" v-if="imageLink">
                <v-img
                    :src="imageSrc"
                    :alt="imageAlt"
                    class="content-image rounded-circle"
                    max-width="300"
                    max-height="300"
                />
              </a>
            </slot>
          </template>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
import ButtonComponent from "@/lib/components/elements/ButtonComponent.vue";

export default {
  name: "content-section-with-image-and-text",
  components: { ButtonComponent },
  props: {
    title: {
      type: String,
      required: true
    },
    subTitle: {
      type: String,
      required: false,
      default: ''
    },
    description: {
      type: String,
      required: false,
      default: ''
    },
    buttonLabel: {
      type: String,
      required: false,
      default: 'Learn More'
    },
    buttonAction: {
      type: Function,
      required: false,
      default: () => {}
    },
    imageSrc: {
      type: String,
      required: true
    },
    imageAlt: {
      type: String,
      required: false,
      default: 'Image'
    },
    imageLink: {
      type: String,
      required: false,
      default: '#'
    },
    loading: {
      type: Boolean,
      required: false,
      default: false
    }
  }
};
</script>

<style scoped>
.content-section-with-image-and-text {
  background-color: #f5f5f5;
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

.content-image {
  transition: box-shadow 0.3s ease, opacity 0.5s ease;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.16);
}

.content-image:hover {
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.25);
  opacity: 0.9;
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
