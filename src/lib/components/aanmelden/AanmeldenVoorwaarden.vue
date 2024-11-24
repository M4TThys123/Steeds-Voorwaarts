<template>
  <div>
    <h2 class="mb-3">Verenigingsjaar</h2>

    <PrismicRichText :field="aanmeldenVoorwaardenData.content" />
  </div>
</template>

<script>
import { PrismicRichText } from "@prismicio/vue";

export default {
  name: "AanmeldenVoorwaarden",
  components: {
    PrismicRichText,
  },
  props: {
    aanmeldenVoorwaardenData: {
      type: Object,
      required: true,
    },
    isAanmeldenVoorwaardenDataLoading: {
      type: Boolean,
      required: true,
    },
  },
};
</script>