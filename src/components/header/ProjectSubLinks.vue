<template>
  <v-list
    class="d-flex flex-column flex-md-row h-screen h-md-auto"
    variant="text"
    bg-color="background"
  >
    <!-- project sub links toggle -->
    <v-list-item class="px-10 pa-md-0">
      <v-btn
        @click="subLinksOpen = !subLinksOpen"
        data-testid="project-sub-links-toggle"
        variant="text"
        class="text-none text-subtitle-1 font-weight-regular"
        rounded="0"
      >
        <!-- project sub links toggle text -->
        <span>Projects</span>
        <!-- desktop arrow icon -->
        <div id="arrow-icon-desktop" class="d-none d-md-inline-block">
          <v-icon
            :icon="subLinksOpen ? 'mdi-chevron-left' : 'mdi-chevron-right'"
          ></v-icon>
        </div>
        <!-- mobile arrow icon -->
        <div id="arrow-icon-mobile" class="d-inline-block d-md-none">
          <v-icon
            :icon="subLinksOpen ? 'mdi-menu-up' : 'mdi-menu-down'"
          ></v-icon>
        </div>
      </v-btn>
    </v-list-item>
    <!-- project sub links list -->
    <v-list
      class="d-flex flex-column flex-md-row"
      bg-color="primary-darken-1"
      data-testid="project-sub-links"
      elevation="20"
      v-if="subLinksOpen"
    >
      <v-list-item
        v-for="(subLink, index) in projectLinks"
        :key="index"
        link
        :to="`/project/${subLink.identifier}`"
        class="px-10 py-5 pa-md-5"
      >
        <span>{{ subLink.title }}</span>
      </v-list-item>
    </v-list>
  </v-list>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const subLinksOpen = ref(false);
watch(route, () => {
  subLinksOpen.value = false;
});
</script>

<script lang="ts">
export default {
  name: "ProjectSubLinks",
  props: {
    projectLinks: Object,
  },
};
</script>
