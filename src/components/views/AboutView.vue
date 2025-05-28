<template>
  <v-container>
    <h1 class="text-left text-md-center w-100 ma-5">About Me</h1>
    <v-divider color="accent" />
    <div class="d-flex flex-column flex-md-row ma-5">
      <v-img
        :src="aboutPageContent['profile-pic']['profile-image']"
        :alt="aboutPageContent['profile-pic']['profile-alt-text']"
        class="ma-5 w-md-25"
      />
      <aside
        id="about-me-summary"
        class="text-body-2 text-lg-body-1 text-center text-md-left ma-5 w-md-75"
      >
        <div v-html="summary"></div>
      </aside>
    </div>
  </v-container>
</template>

<script>
import MarkdownIt from "markdown-it";
import aboutPageContent from "../../content/pages/about-me/69d2fa2a8eef_2025-05-18.json";
export default {
  name: "AboutView",
  created() {
    document.title = "APXNR | About Me";
    this.aboutPageContent = aboutPageContent;
    this.summary = new MarkdownIt().render(aboutPageContent["summary"]);
  },
};
</script>
