<template>
  <v-container max-width="1500">
    <div class="d-flex w-100 ma-5 justify-start justify-md-center align-center">
      <h1
        class="text-left text-md-center text-h6 text-sm-h5 text-md-h4 font-weight-bold"
      >
        {{ `${galleryContent.title || "Project"}` }}
      </h1>
      <gallery-info :gallery-content="galleryContent"></gallery-info>
    </div>
    <v-divider color="accent"></v-divider>
    <div class="ma-5 text-subtitle-1">
      Click the info button for more details ^
    </div>
    <!-- display images -->
    <gallery-grid
      :columns="columns"
      :images="galleryContent.images"
    ></gallery-grid>
  </v-container>
</template>

<script setup lang="ts">
import { onMounted, Ref, ref, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useDisplay } from "vuetify/lib/framework.mjs";

import commissionsGallery from "../../content/gallery/commissioned-artworks_2025-05-27.json";
import glitchFxGallery from "../../content/gallery/glitch-fx-generators_2025-05-28.json";
import affinityGallery from "../../content/gallery/affinity-artworks-2025_2025-06-26.json";
//setup gallery content
const route = useRoute();
const router = useRouter();
const id = ref(route.params.id);

const allGalleries = [commissionsGallery, glitchFxGallery, affinityGallery];

const galleryContent: Ref<GalleryContent> = ref(new EmptyGalleryContent());

const getContentWithId = (idValueIn: string | string[]) => {
  try {
    const selectedGallery = allGalleries.find(
      (gallery) => gallery.identifier === idValueIn
    );
    if (!selectedGallery) throw new Error("Gallery not found");
    galleryContent.value.title = selectedGallery.title;
    galleryContent.value.description = selectedGallery.description;
    galleryContent.value.identifier = selectedGallery.identifier;
    galleryContent.value.images = selectedGallery.images.map((image) => {
      return {
        image: image.image,
        altText: image["alt-text"],
      };
    });
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
//Setup number of columns for grid
const { mdAndUp } = useDisplay();
const columns = ref(mdAndUp.value ? 3 : 1);
</script>

<script lang="ts">
import GalleryInfo from "../gallery/GalleryInfo.vue";
import GalleryGrid from "../gallery/GalleryGrid.vue";
import { EmptyGalleryContent, GalleryContent } from "@/types/gallery";

export default {
  name: "ProjectView",
  components: {
    GalleryInfo,
    GalleryGrid,
  },
};
</script>
