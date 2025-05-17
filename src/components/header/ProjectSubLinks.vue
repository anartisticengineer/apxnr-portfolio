<template>
  <v-list horizontal class="d-flex" variant="text" bg-color="background">
    <v-list-item @click="subLinksOpen = !subLinksOpen"
      ><span>Projects</span>
      <v-icon
        :icon="subLinksOpen ? 'mdi-chevron-left' : 'mdi-chevron-right'"
      ></v-icon>
    </v-list-item>
    <v-list
      horizontal
      class="d-flex"
      bg-color="background-darken-1"
      v-if="subLinksOpen"
    >
      <v-list-item
        v-for="(subLink, index) in projectNames"
        :key="index"
        link
        :href="`project/${nameToURL(subLink)}`"
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
