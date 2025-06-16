<template>
  <v-container id="images-container" max-width="100%">
    <v-row>
      <v-col v-for="colNum in columns" :key="colNum">
        <gallery-image
          v-for="image in images.filter(
            (_, index) => index % columns === colNum - 1
          )"
          :key="image.image"
          :src="image.image"
          :alt="image.altText"
        ></gallery-image>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import GalleryImage from "./GalleryImage.vue";
import { GalleryContentImage } from "@/types/gallery";

export default {
  name: "GalleryGrid",
  components: { GalleryImage },
  props: {
    columns: {
      type: Number,
      default: 3,
    },
    images: {
      type: Array as () => GalleryContentImage[],
      required: true,
    },
  },
};
</script>
