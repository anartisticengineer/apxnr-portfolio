<template>
  <v-container class="w-100">
    <v-img
      id="home-banner-desktop"
      :src="bannerSrc"
      class="d-none d-md-block ma-5"
      cover
    ></v-img>
    <v-img
      id="home-banner-mobile"
      :src="mobileBannerSrc"
      class="d-block d-md-none ma-5"
      cover
    ></v-img>
    <v-divider color="primary"></v-divider>
    <h1 class="text-center ma-10" color="primary">
      {{ homeContent.title }}
    </h1>
    <v-divider color="primary"></v-divider>
    <div class="d-flex flex-column justify-center">
      <span class="text-center ma-10" color="secondary">
        {{ homeContent["call-to-action"]["call-to-action-text"] }}
      </span>
      <v-btn
        :href="homeContent['call-to-action']['call-to-action-goto-link']"
        variant="tonal"
        color="accent"
        size="large"
        >{{ homeContent["call-to-action"]["call-to-action-btn-text"] }}</v-btn
      >
    </div>
  </v-container>
</template>

<script>
import bannerSrc from "../../../public/images/uploads/BannerGifOriginal.gif";
import mobileBannerSrc from "../../../public/images/uploads/BannerGifSmaller.gif";
import homeContent from "../../content/pages/homepages/artist.-engineer.-artistic-engineer._2025-05-19.json";
export default {
  name: "HomeView",
  created() {
    document.title = "APXNR | Home";
    this.bannerSrc = bannerSrc;
    this.mobileBannerSrc = mobileBannerSrc;
    this.homeContent = homeContent;
  },
};
</script>
