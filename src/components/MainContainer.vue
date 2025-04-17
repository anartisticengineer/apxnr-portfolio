<template>
  <v-app>
    <!-- header -->
    <header-container />
    <!-- main content -->
    <v-main>
      <router-view />
    </v-main>
    <!-- footer -->
    <footer-container />
  </v-app>
</template>

<script>
import { RouterView } from "vue-router";
import HeaderContainer from "./header/HeaderContainer.vue";
import FooterContainer from "./footer/FooterContainer.vue";

export default {
  name: "MainContainer",
  props: {
    msg: String,
  },
  components: {
    RouterView,
    HeaderContainer,
    FooterContainer,
  },
};
</script>
