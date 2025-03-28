<template>
  <div id="project-sub-links">
    <v-list v-if="subLinksOpen" horizontal class="d-flex">
      <v-list-item
        v-for="(subLink, index) in projectSubLinks"
        link
        :key="index"
        :href="`project/${nameToURL(subLink)}`"
      >
        <span>{{ subLink }}</span>
      </v-list-item>
    </v-list>
  </div>
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
    projectSubLinks: Array,
    subLinksOpen: Boolean,
  },
};
</script>
