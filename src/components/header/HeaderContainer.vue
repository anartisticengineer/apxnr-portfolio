<template>
  <v-app-bar color="background" class="pa-5 h-auto">
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
      <project-sub-links :project-names="['Project 1', 'Project 2']" />
    </div>
    <!-- mobile header links -->
    <v-overlay
      v-model="mobileLinksOpen"
      scroll-strategy="reposition"
      width="50%"
    >
      <header-links :link-names="['About Me', 'Contact']" />
      <project-sub-links :project-names="['Project 1', 'Project 2']" />
    </v-overlay>
  </v-app-bar>
</template>

<script setup>
import { ref, watch } from "vue";
const mobileLinksOpen = ref(false);
const route = useRoute();
watch(route, () => {
  mobileLinksOpen.value = false;
});
</script>

<script>
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
