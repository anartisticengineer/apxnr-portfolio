<template>
  <header>
    <HeaderLinks
      :link-names="['Home', 'About Me', 'Contact']"
      :projects-link="Projects"
      :project-sub-links="['Project 1', 'Project 2', 'Project 3']"
    />
  </header>
</template>

<script>
import HeaderLinks from "./HeaderLinks.vue";

export default {
  name: "HeaderContainer",
  components: {
    HeaderLinks,
  },
};
</script>
