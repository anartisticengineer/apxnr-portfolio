<template>
  <v-app>
    <!-- header -->
    <HeaderContainer />
    <!-- main content -->
    <v-main>
      <span>{{ msg }}</span>
    </v-main>
    <!-- footer -->
  </v-app>
</template>

<script>
import { VApp } from "vuetify/components/VApp";
import { VMain } from "vuetify/components/VMain";
import HeaderContainer from "./header/HeaderContainer.vue";

export default {
  name: "MainContainer",
  props: {
    msg: String,
  },
  components: {
    HeaderContainer,
    VApp,
    VMain,
  },
};
</script>
