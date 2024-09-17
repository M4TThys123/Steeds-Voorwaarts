<template>
    <section class="sport col-md-6">
      <figure class="image-wrapper">
        <div class="aspect-ratio-box">
          <v-skeleton-loader
              type="image"
              min-height="200px"></v-skeleton-loader>
        </div>
      </figure>
      <section class="data-container">
        <v-skeleton-loader  type="article"></v-skeleton-loader>
      </section>
    </section>
</template>

<script>

export default {
  name: "SportenComponent",

  data() {
    return {
      isLoading: true,
    };
  }
}
</script>

<style>

.aspect-ratio-box {
  position: relative;

  aspect-ratio: 3/2;
  width: 100%;
}

.aspect-ratio-box .v-skeleton-loader{
  width: 100%;
  height: 100%;
}

.aspect-ratio-box .v-skeleton-loader__image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.data-container .v-skeleton-loader{
  background: none!important;
}

</style>