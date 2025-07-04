<template>
  <v-container>
    <h1 class="text-left text-md-center w-100 ma-5">About Me</h1>
    <v-divider />
    <div class="d-flex flex-column flex-md-row justify-md-space-evenly ma-5">
      <v-img
        :src="aboutPageContent['profile-pic']['profile-image']"
        :alt="aboutPageContent['profile-pic']['profile-alt-text']"
        class="ma-5 w-md-25"
      >
        <template v-slot:placeholder>
          <v-skeleton-loader
            color="background"
            type="image"
          ></v-skeleton-loader>
        </template>
      </v-img>
      <v-card
        id="about-me-summary"
        class="pa-5 ma-5"
        color="background"
        elevation="2"
      >
        <div
          class="d-flex flex-column text-body-2 text-lg-body-1 text-center text-md-left font-weight-light ga-2 ga-md-5"
          v-html="summary"
        ></div>
      </v-card>
    </div>
  </v-container>
</template>

<script setup lang="ts">
import MarkdownIt from "markdown-it";
import aboutPageContent from "../../content/pages/about-me/69d2fa2a8eef_2025-05-18.json";
import { onMounted } from "vue";

const summary = new MarkdownIt().render(aboutPageContent["summary"]);

onMounted(() => {
  document.title = "APXNR | About Me";
});
</script>

<script lang="ts">
export default {
  name: "AboutView",
};
</script>
