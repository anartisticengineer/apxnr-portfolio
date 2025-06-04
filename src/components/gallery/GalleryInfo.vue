<template>
  <v-bottom-sheet class="elevation-20">
    <template v-slot:activator="{ props: activatorProps }">
      <v-btn
        v-bind="activatorProps"
        variant="text"
        icon="mdi-information"
        data-testid="gallery-info-button"
      ></v-btn>
    </template>
    <template v-slot:default="{ isActive }">
      <v-card color="background-lighten-1" class="pa-5">
        <div class="d-flex justify-end">
          <v-btn
            icon="mdi-close"
            variant="text"
            data-testid="gallery-info-close-button"
            @click="isActive.value = false"
          ></v-btn>
        </div>
        <div
          id="description-container"
          class="pa-5 text-left text-body-2 text-lg-body-1"
          v-html="mdToHtml(galleryContent?.description ?? '')"
        ></div>
      </v-card>
    </template>
  </v-bottom-sheet>
</template>

<script lang="ts">
import MarkdownIt from "markdown-it";
import { GalleryContent } from "@/types/gallery";
export default {
  name: "GalleryInfo",
  props: {
    galleryContent: Object as () => GalleryContent,
  },
  methods: {
    mdToHtml(markdown: string): string {
      const md = new MarkdownIt();
      return md.render(markdown);
    },
  },
};
</script>

<style>
#description-container a {
  color: #279af1;
}
#description-container ul {
  list-style: none;
  padding-top: 1rem;
  padding-bottom: 1rem;
}
</style>
