<template>
  <v-container>
    <h1 class="text-left text-md-center w-100 ma-5">
      {{ `${projectContent.projectTitle}: ${id}` }}
    </h1>
    <v-divider color="accent"></v-divider>
    <!-- display images -->
    <section class="d-flex flex-column flex-md-row">
      <v-lazy class="w-100 w-md-75 pa-5"> Images Here </v-lazy>
      <aside class="pa-5">{{ projectContent.projectDescription }}</aside>
    </section>
  </v-container>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";
import { useRoute } from "vue-router";

const projectContent = {
  projectTitle: "Sample",
  projectDescription: "Sample Description",
};

const route = useRoute();
const id = ref(route.params.id);

watch(route, () => {
  id.value = route.params.id;
});
</script>

<script lang="ts">
export default {
  name: "ProjectView",
};
</script>
