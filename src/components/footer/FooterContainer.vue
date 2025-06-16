<template>
  <v-footer
    class="d-flex flex-column flex-md-row justify-space-around"
    color="background"
    elevation="10"
  >
    <v-row class="d-none d-md-flex" id="footer-container-desktop">
      <v-col :class="desktopContainerClasses" cols="4"><footer-social /></v-col>
      <v-col :class="desktopContainerClasses" cols="4">
        <footer-kofi-button />
      </v-col>
      <v-col :class="desktopContainerClasses" cols="4">
        <footer-copyright />
      </v-col>
    </v-row>
    <div
      class="d-flex flex-column align-center d-md-none"
      id="footer-container-mobile"
    >
      <footer-social :is-mobile="true" />
      <footer-kofi-button :is-mobile="true" />
      <footer-copyright :is-mobile="true" />
    </div>
  </v-footer>
</template>

<script setup lang="ts">
const desktopContainerClasses = "d-inline-flex justify-center align-center";
</script>

<script lang="ts">
import FooterSocial from "./FooterSocial.vue";
import FooterKofiButton from "./FooterKofiButton.vue";
import FooterCopyright from "./FooterCopyright.vue";

export default {
  name: "FooterContainer",
  components: {
    FooterSocial,
    FooterKofiButton,
    FooterCopyright,
  },
};
</script>
