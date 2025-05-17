<template>
  <v-app-bar color="background" class="d-flex">
    <!-- logo -->
    <v-img
      :src="headerContent['home-logo']"
      :alt="headerContent['alt-text']"
      max-width="10%"
    />
    <!-- header links -->
    <header-links :link-names="['About Me', 'Contact']" />
    <!-- projects links -->
    <project-sub-links :project-names="['Project 1', 'Project 2']" />
  </v-app-bar>
</template>

<script>
import HeaderLinks from "./HeaderLinks.vue";
import headerContent from "../../content/components/header/998c75e6d2ab_2025-05-07.json";
import ProjectSubLinks from "./ProjectSubLinks.vue";

export default {
  name: "HeaderContainer",
  components: {
    HeaderLinks,
    ProjectSubLinks,
  },
  created() {
    this.headerContent = headerContent;
  },
};
</script>
