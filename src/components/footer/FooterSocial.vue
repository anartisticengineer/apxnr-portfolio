<template>
  <div id="footer-social">
    <v-list horizontal class="d-flex">
      <v-list-item v-for="icon in iconData" :key="icon" :href="icon.link">
        <v-icon :icon="icon.icon"></v-icon>
        {{ icon.name }}
      </v-list-item>
    </v-list>
  </div>
</template>

<script setup>
const iconData = [
  {
    icon: "mdi-instagram",
    link: "https://www.instagram.com/apxnr.wav/",
    name: "Instagram",
  },
  {
    icon: "mdi-behance",
    link: "https://www.behance.net/apxnr",
    name: "Behance",
  },
  {
    icon: "mdi-bluesky",
    link: "https://bsky.app/profile/apxnr.bsky.social",
    name: "Bluesky",
  },
];
</script>

<script>
export default {
  name: "FooterSocial",
};
</script>
