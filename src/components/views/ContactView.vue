<template>
  <v-container>
    <h1 class="text-left text-md-center w-100 ma-5">Contact</h1>
    <v-divider color="accent" />
    <div class="d-flex flex-column flex-md-row ma-5">
      <contact-form />
      <aside
        class="text-body-2 text-lg-body-1 text-center text-md-left ma-5 w-md-50"
      >
        Placeholder here. The form doesn't do anything.
      </aside>
    </div>
  </v-container>
</template>

<script lang="ts">
import ContactForm from "../contact/ContactForm.vue";
export default {
  name: "ContactView",
  components: {
    ContactForm,
  },
  created() {
    document.title = "APXNR | Contact Me";
  },
};
</script>
