<template>
  <v-app-bar color="background" class="pa-5 h-auto" data-testid="header">
    <!-- logo container -->
    <header-logo-container
      @toggle-mobile-menu="mobileLinksOpen = !mobileLinksOpen"
    />
    <!-- header links -->
    <div class="d-none d-md-block">
      <header-links :link-names="['About Me', 'Contact']" />
    </div>
    <!-- projects links -->
    <div class="d-none d-md-block">
      <project-sub-links :project-links="projectLinks" />
    </div>
    <!-- mobile header links -->
    <v-overlay
      v-model="mobileLinksOpen"
      scroll-strategy="reposition"
      width="50%"
      elevation="10"
    >
      <header-links :link-names="['About Me', 'Contact']" />
      <project-sub-links :project-links="projectLinks" />
    </v-overlay>
  </v-app-bar>
</template>

<script setup lang="ts">
import { onMounted, Ref, ref, watch } from "vue";
import commissionsGallery from "../../content/gallery/commissioned-artworks_2025-05-27.json";
import glitchFXGenerators from "../../content/gallery/glitch-fx-generators_2025-05-28.json";

const mobileLinksOpen = ref(false);
const route = useRoute();
const projectLinks: Ref<{}[]> = ref([]);

onMounted(() => {
  const links = [commissionsGallery, glitchFXGenerators].map(
    ({ title, identifier }) => {
      return { title, identifier };
    }
  );
  projectLinks.value = links;
});

watch(route, () => {
  mobileLinksOpen.value = false;
});
</script>

<script lang="ts">
import HeaderLinks from "./HeaderLinks.vue";
import HeaderLogoContainer from "./HeaderLogoContainer.vue";

import ProjectSubLinks from "./ProjectSubLinks.vue";
import { useRoute } from "vue-router";

export default {
  name: "HeaderContainer",
  components: {
    HeaderLinks,
    ProjectSubLinks,
    HeaderLogoContainer,
  },
};
</script>
