<template>
  <div>
    <div id="primary-links">
      <v-list horizontal class="d-flex text-uppercase">
        <v-list-item link v-for="(linkName, index) in linkNames" :key="index">
          <router-link :to="nameToURL(linkName)">{{ linkName }}</router-link>
        </v-list-item>
        <v-list-item @click="toggleSubLinks">Projects</v-list-item>
      </v-list>
    </div>
    <project-sub-links
      :subLinksOpen="subLinksOpen"
      :projectSubLinks="projectSubLinks"
    ></project-sub-links>
  </div>
</template>

<script>
import ProjectSubLinks from "./ProjectSubLinks.vue";

export default {
  name: "HeaderLinks",
  components: {
    ProjectSubLinks,
  },
  props: {
    linkNames: Array,
    projectsLink: String,
    projectSubLinks: Array,
  },
  methods: {
    toggleSubLinks() {
      this.subLinksOpen = !this.subLinksOpen;
    },
    nameToURL(name) {
      return name.toLowerCase().replace(" ", "-");
    },
  },
  data() {
    return {
      subLinksOpen: false,
    };
  },
};
</script>
