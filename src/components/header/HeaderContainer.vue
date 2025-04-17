<template>
  <v-app-bar height="auto">
    <header-links
      :link-names="['Home', 'About Me', 'Contact']"
      :projects-link="Projects"
      :project-sub-links="['Project 1', 'Project 2', 'Project 3']"
    />
  </v-app-bar>
</template>

<script>
// import { VAppBar } from "vuetify/lib/components/index.mjs";
import HeaderLinks from "./HeaderLinks.vue";

export default {
  name: "HeaderContainer",
  components: {
    HeaderLinks,
    // VAppBar,
  },
};
</script>
