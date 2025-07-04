<template>
  <v-container>
    <h1 class="text-left text-md-center w-100 ma-5">Whoops ;P</h1>
    <v-divider />
    <section
      class="d-flex flex-column flex-md-row justify-md-space-evenly ma-5"
    >
      <h2 class="text-left text-md-center py-5 px-md-5">
        Couldn't find that page...
      </h2>
      <v-btn
        to="/"
        variant="tonal"
        color="accent my-5"
        data-testid="return-home-button"
        >Go Home <v-icon icon="mdi-home"
      /></v-btn>
    </section>
  </v-container>
</template>

<script lang="ts">
export default {
  name: "NotFoundView",
  created() {
    document.title = "APXNR | Whoops ;P";
  },
};
</script>
