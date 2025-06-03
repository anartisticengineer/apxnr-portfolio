<template>
  <v-img
    class="my-5"
    :src="src"
    :alt="alt"
    cover
    transition="fade-transition"
    @load="isLoading = false"
    elevation="10"
  >
    <v-slot:placeholder v-if="isLoading">
      <v-row class="fill-height ma-0 justify-center align-center">
        <v-progress-circular
          indeterminate
          color="accent-lighten-1"
        ></v-progress-circular>
      </v-row>
    </v-slot:placeholder>
  </v-img>
</template>

<script setup lang="ts">
import { ref } from "vue";

const isLoading = ref(true);
</script>

<script lang="ts">
export default {
  name: "GalleryImage",
  props: {
    src: String,
    alt: String,
  },
};
</script>
