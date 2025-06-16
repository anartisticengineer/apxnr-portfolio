<template>
  <div>
    <v-img
      id="home-banner-desktop"
      :src="bannerSrc"
      class="d-none d-md-block"
      cover
    >
      <template v-slot:placeholder>
        <v-skeleton-loader color="primary" type="image"></v-skeleton-loader>
      </template>
    </v-img>
    <v-img
      id="home-banner-mobile"
      :src="mobileBannerSrc"
      class="d-block d-md-none"
      cover
    >
      <template v-slot:placeholder>
        <v-skeleton-loader color="primary" type="image"></v-skeleton-loader>
      </template>
    </v-img>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";

const isLoading = ref(true);

onMounted(() => {
  isLoading.value = false;
});
</script>

<script lang="ts">
export default {
  name: "HomeBanner",
  props: {
    bannerSrc: {
      type: String,
      required: true,
    },
    mobileBannerSrc: {
      type: String,
    },
  },
};
</script>
