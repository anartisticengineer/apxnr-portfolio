<template>
  <v-list
    class="d-flex flex-column flex-md-row"
    variant="text"
    bg-color="background"
  >
    <!-- project sub links toggle -->
    <v-list-item @click="subLinksOpen = !subLinksOpen"
      ><span>Projects</span>
      <!-- desktop arrow icon -->
      <div id="arrow-icon-desktop" class="d-none d-md-inline-block">
        <v-icon
          :icon="subLinksOpen ? 'mdi-chevron-left' : 'mdi-chevron-right'"
        ></v-icon>
      </div>
      <!-- mobile arrow icon -->
      <div id="arrow-icon-mobile" class="d-inline-block d-md-none">
        <v-icon :icon="subLinksOpen ? 'mdi-menu-up' : 'mdi-menu-down'"></v-icon>
      </div>
    </v-list-item>
    <!-- project sub links list -->
    <v-list
      class="d-flex flex-column flex-md-row"
      bg-color="background-darken-1"
      v-if="subLinksOpen"
    >
      <v-list-item
        v-for="(subLink, index) in projectNames"
        :key="index"
        link
        :to="`/project/${nameToURL(subLink)}`"
      >
        <span>{{ subLink }}</span>
      </v-list-item>
    </v-list>
  </v-list>
</template>

<script>
export default {
  name: "ProjectSubLinks",
  methods: {
    nameToURL(name) {
      return name.toLowerCase().replace(" ", "-");
    },
  },
  props: {
    projectNames: Array,
  },
  data() {
    return {
      subLinksOpen: false,
    };
  },
};
</script>
