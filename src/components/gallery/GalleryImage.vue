<template>
  <v-img
    class="my-5"
    :src="src"
    :alt="alt"
    cover
    transition="fade-transition"
    elevation="10"
  >
    <template v-slot:placeholder>
      <v-row class="fill-height ma-0">
        <v-skeleton-loader color="background" type="image"></v-skeleton-loader>
      </v-row>
    </template>
  </v-img>
</template>

<script lang="ts">
export default {
  name: "GalleryImage",
  props: {
    src: String,
    alt: String,
  },
};
</script>
