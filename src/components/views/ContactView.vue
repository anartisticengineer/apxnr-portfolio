<template>
  <v-container>
    <h1 class="text-left text-md-center w-100 ma-5">Contact</h1>
    <v-divider color="accent" />
    <div class="d-flex flex-column flex-md-row ma-5">
      <contact-form />
      <aside
        id="contact-message-summary"
        class="d-flex flex-column text-body-2 text-lg-body-1 text-center text-md-left ma-5 w-md-50 ga-5 ga-md-8"
        v-html="contactPageMessage"
      ></aside>
    </div>
  </v-container>
</template>

<script setup lang="ts">
import MarkdownIt from "markdown-it";
import { onMounted } from "vue";
import contactPageContent from "../../content/pages/contact/830c5ad7d927_2025-06-25.json";

const contactPageMessage = MarkdownIt().render(contactPageContent.message);

onMounted(() => {
  document.title = "APXNR | Contact Me";
});
</script>

<script lang="ts">
import ContactForm from "../contact/ContactForm.vue";

export default {
  name: "ContactView",
  components: {
    ContactForm,
  },
};
</script>
