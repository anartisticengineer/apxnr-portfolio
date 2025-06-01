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
    <v-card color="background-lighten-2" class="pa-5">
      <div
        id="description-container"
        class="pa-5 text-left text-body-2 text-lg-body-1 text-decoration-none"
        v-html="mdToHtml(galleryContent.description)"
      ></div>
    </v-card>
  </v-bottom-sheet>
</template>

<script>
import MarkdownIt from "markdown-it";
export default {
  name: "GalleryInfo",
  props: {
    galleryContent: Object,
  },
  methods: {
    mdToHtml(markdown) {
      const md = new MarkdownIt();
      return md.render(markdown);
    },
  },
};
</script>
