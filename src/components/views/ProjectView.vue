<template>
  <v-container>
    <h1 class="text-left text-md-center w-100 ma-5">
      {{ `${galleryContent.title || "Project"}` }}
    </h1>
    <v-divider color="accent"></v-divider>
    <!-- display images -->
    <section class="d-flex flex-column flex-md-row flex-wrap">
      <div
        class="w-100 w-md-75 pa-5"
        :min-height="500"
        transition="fade-transition"
      >
        <v-img
          v-for="(image, index) in galleryContent.images"
          max-width="500"
          :key="index"
          :src="image.image"
          :alt="image['alt-text']"
          cover
        ></v-img>
      </div>
      <aside
        class="w-100 w-md-25 pa-5"
        v-html="mdToHtml(galleryContent.description)"
      ></aside>
    </section>
  </v-container>
</template>

<script setup lang="ts">
import { onMounted, ref, watch } from "vue";
import { useRoute, useRouter } from "vue-router";

import commissionsGallery from "../../content/gallery/commissioned-artworks_2025-05-27.json";

const route = useRoute();
const router = useRouter();
const id = ref(route.params.id);

const allGalleries = [commissionsGallery];

const initialGallery = {
  identifier: "",
  title: "",
  description: "",
  images: [{ image: "", "alt-text": "" }],
};

const galleryContent = ref(initialGallery);

onMounted(() => {
  document.title = `APXNR | ${id.value}`;
  const selectedGallery = allGalleries.find(
    (gallery) => gallery.identifier === id.value
  );
  if (selectedGallery) {
    galleryContent.value.title = selectedGallery.title;
    galleryContent.value.description = selectedGallery.description;
    galleryContent.value.images = selectedGallery.images;
  } else {
    router.push("/404");
  }
});

watch(route, () => {
  id.value = route.params.id;
});
</script>

<script lang="ts">
import MarkdownIt from "markdown-it";
export default {
  name: "ProjectView",
  methods: {
    mdToHtml(text: string) {
      const md = new MarkdownIt();
      return md.render(text);
    },
  },
};
</script>
