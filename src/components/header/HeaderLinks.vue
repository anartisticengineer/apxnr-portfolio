<template>
  <div>
    <div id="primary-links">
      <v-list horizontal class="d-flex">
        <v-list-item link v-for="(linkName, index) in linkNames" :key="index">
          <router-link :to="nameToURL(linkName)" class="text-uppercase">{{
            linkName
          }}</router-link>
        </v-list-item>
        <v-list-item
          ><v-btn block text @click="toggleSubLinks"
            >Projects</v-btn
          ></v-list-item
        >
      </v-list>
    </div>
    <project-sub-links
      :subLinksOpen="subLinksOpen"
      :projectSubLinks="projectSubLinks"
    ></project-sub-links>
  </div>
</template>

<script>
import { VList, VListItem, VBtn } from "vuetify/lib/components/index.mjs";
import ProjectSubLinks from "./ProjectSubLinks.vue";

export default {
  name: "HeaderLinks",
  components: {
    VList,
    VListItem,
    VBtn,
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
