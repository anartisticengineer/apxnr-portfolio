<template>
  <v-container max-width="1500">
    <h1 class="text-left text-md-center align-center w-100 ma-5">
      {{ `${galleryContent.title || "Project"}` }}
      <gallery-info :gallery-content="galleryContent"></gallery-info>
    </h1>
    <v-divider color="accent"></v-divider>
    <section class="d-flex flex-column align-center py-5">
      <!-- display images -->
      <div
        id="images-container"
        class="d-flex justify-center flex-wrap w-75 pa-2 ma-5"
      >
        <gallery-image
          v-for="(image, index) in galleryContent.images"
          :key="index"
          :src="image.image"
          :alt="image['alt-text']"
        ></gallery-image>
      </div>
    </section>
  </v-container>
</template>

<script setup lang="ts">
import { onMounted, ref, watch } from "vue";
import { useRoute, useRouter } from "vue-router";

import commissionsGallery from "../../content/gallery/commissioned-artworks_2025-05-27.json";
import glitchFxGallery from "../../content/gallery/glitch-fx-generators_2025-05-28.json";

const route = useRoute();
const router = useRouter();
const id = ref(route.params.id);

const allGalleries = [commissionsGallery, glitchFxGallery];

const initialGallery = {
  identifier: "",
  title: "",
  description: "",
  images: [{ image: "", "alt-text": "" }],
};

const galleryContent = ref(initialGallery);

const getContentWithId = (idValueIn: string | string[]) => {
  try {
    const selectedGallery = allGalleries.find(
      (gallery) => gallery.identifier === idValueIn
    );
    if (!selectedGallery) throw new Error("Gallery not found");
    galleryContent.value.title = selectedGallery.title;
    galleryContent.value.description = selectedGallery.description;
    galleryContent.value.images = selectedGallery.images;
    document.title = `APXNR | ${selectedGallery.title}`;
  } catch {
    router.push("/404");
  }
};

onMounted(() => {
  getContentWithId(id.value);
});

watch(route, () => {
  id.value = route.params.id;
  getContentWithId(id.value);
});
</script>

<script lang="ts">
import GalleryInfo from "../gallery/GalleryInfo.vue";
import GalleryImage from "../gallery/GalleryImage.vue";
export default {
  name: "ProjectView",
  components: {
    GalleryImage,
    GalleryInfo,
  },
};
</script>
