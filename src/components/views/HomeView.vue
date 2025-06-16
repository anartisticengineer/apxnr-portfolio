<template>
  <v-container class="w-100">
    <home-banner
      :banner-src="homeBannerImage.src.desktop"
      :mobile-banner-src="homeBannerImage.src.mobile"
    />
    <h1 class="text-center ma-10" color="primary">
      {{ homeContent.title }}
    </h1>
    <v-divider color="primary"></v-divider>
    <div class="d-flex flex-column justify-center">
      <span class="text-center ma-10" color="secondary">
        {{ homeCta.description }}
      </span>
      <v-btn
        :href="homeCta.goto.link"
        variant="tonal"
        color="accent"
        size="large"
        >{{ homeCta.goto.text }}</v-btn
      >
    </div>
  </v-container>
</template>

<script setup lang="ts">
import { CallToAction, HomeBannerImage } from "@/types/home";
import homeContent from "@/content/pages/homepages/artist.-engineer.-artistic-engineer._2025-05-19.json";
import { onMounted } from "vue";

const homeBannerImage: HomeBannerImage = {
  src: {
    desktop: homeContent["banner-image"]["banner-image"],
    mobile: homeContent["banner-image"]["mobile-banner-image"],
  },
  altText: homeContent["banner-image"]["banner-alt-text"],
};

const homeCta: CallToAction = {
  description: homeContent["title"],
  goto: {
    link: homeContent["call-to-action"]["call-to-action-goto-link"],
    text: homeContent["call-to-action"]["call-to-action-btn-text"],
  },
};

onMounted(() => {
  document.title = "APXNR | An Artistic Engineer";
});
</script>

<script lang="ts">
import HomeBanner from "../home/HomeBanner.vue";
export default {
  name: "HomeView",
  components: {
    HomeBanner,
  },
};
</script>
