<template>
  <v-list
    horizontal
    class="d-flex"
    :id="`footer-social-${isMobile ? 'mobile' : 'desktop'}`"
    bg-color="background"
  >
    <v-list-item
      v-for="(social, index) in socials"
      :key="index"
      :href="social.siteLink"
      rounded
    >
      {{ social.siteName }}
    </v-list-item>
  </v-list>
</template>

<script setup lang="ts">
import { FooterSocialLink } from "@/types/footer";
import socialsContent from "../../content/components/footer/967df8b5a1be_2025-05-07.json";

const socials: FooterSocialLink[] = socialsContent.socials.map((social) => {
  return {
    siteName: social["site-name"],
    siteLink: social["site-link"],
  };
});
</script>

<script lang="ts">
export default {
  name: "FooterSocial",
  props: {
    isMobile: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
