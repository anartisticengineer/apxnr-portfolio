<template>
  <div class="w-100 w-md-auto">
    <!-- logo container mobile -->
    <div
      id="logo-container-mobile"
      class="d-flex d-md-none w-100 align-center justify-space-between"
    >
      <!-- logo -->
      <v-card
        to="/"
        class="w-25"
        color="background"
        elevation="0"
        data-testid="mobile-logo"
      >
        <v-img
          id="home-logo-mobile"
          :src="headerContent['home-logo']"
          :alt="headerContent['alt-text']"
          max-width="75%"
          cover
        />
      </v-card>
      <!-- mobile menu button -->
      <v-btn
        class="d-block d-md-none"
        @click="$emit('toggle-mobile-menu')"
        data-testid="mobile-menu-button"
        ><v-icon icon="mdi-menu"></v-icon
      ></v-btn>
    </div>
    <!-- logo container desktop -->
    <v-card
      to="/"
      class="d-none d-md-block justify-center align-center"
      color="background"
    >
      <v-img
        id="home-logo-desktop"
        :src="headerContent['home-logo']"
        :alt="headerContent['alt-text']"
        class="mr-5"
        width="100"
        cover
      />
    </v-card>
  </div>
</template>

<script>
import headerContent from "../../content/components/header/998c75e6d2ab_2025-05-07.json";
export default {
  name: "HeaderLogoContainer",
  emits: ["toggle-mobile-menu"],
  created() {
    this.headerContent = headerContent;
  },
};
</script>
