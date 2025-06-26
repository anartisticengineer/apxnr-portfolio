<template>
  <v-img
    class="my-5"
    :src="src"
    :alt="alt"
    cover
    draggable="false"
    transition="fade-transition"
    elevation="10"
    :oncontextmenu="disableRightClick"
  >
    <template v-slot:placeholder>
      <v-skeleton-loader color="primary" type="image"></v-skeleton-loader>
    </template>
  </v-img>
</template>

<script setup lang="ts">
const disableRightClick = (event: any) => {
  if (event.button === 2) {
    return false;
  }
};
</script>

<script lang="ts">
export default {
  name: "GalleryImage",
  props: {
    src: String,
    alt: String,
  },
};
</script>
