<template>
  <v-list horizontal class="d-flex" id="footer-social" bg-color="background">
    <v-list-item
      v-for="social in socials"
      :key="social"
      :href="social['site-link']"
    >
      {{ social["site-name"] }}
    </v-list-item>
  </v-list>
</template>

<script>
import socials from "../../content/components/footer/967df8b5a1be_2025-05-07.json";
export default {
  name: "FooterSocial",
  created() {
    this.socials = socials.socials;
  },
};
</script>
