<template>
  <v-app>
    <!-- header -->
    <HeaderContainer />
    <!-- main content -->
    <v-main>
      <span>{{ msg }}</span>
    </v-main>
    <!-- footer -->
    <FooterContainer />
  </v-app>
</template>

<script>
import { VApp } from "vuetify/components/VApp";
import { VMain } from "vuetify/components/VMain";
import HeaderContainer from "./header/HeaderContainer.vue";
import FooterContainer from "./footer/FooterContainer.vue";

export default {
  name: "MainContainer",
  props: {
    msg: String,
  },
  components: {
    HeaderContainer,
    FooterContainer,
    VApp,
    VMain,
  },
};
</script>
