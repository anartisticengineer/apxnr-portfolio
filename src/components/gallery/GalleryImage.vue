<template>
  <v-img
    class="w-100 flex-grow-1 ma-1"
    :src="src"
    :alt="alt"
    cover
    transition="fade-transition"
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
import { onMounted, ref } from "vue";

const isLoading = ref(true);

onMounted(() => {
  isLoading.value = false;
});
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
