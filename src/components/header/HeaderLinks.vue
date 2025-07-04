<template>
  <!-- header links -->
  <div id="header-links-container">
    <!-- desktop header links -->
    <v-list
      id="desktop-header-links"
      class="d-none d-md-flex flex-row"
      variant="text"
      bg-color="background"
      data-testid="desktop-header-links"
    >
      <v-list-item
        v-for="link in linkNames"
        :key="link"
        :data-testid="`desktop-${nameToURL(link)}-link`"
        :to="`/${nameToURL(link)}`"
      >
        <span>{{ link }}</span>
      </v-list-item>
    </v-list>
    <!-- mobile header links -->
    <v-list
      id="mobile-header-links"
      class="d-flex d-md-none flex-column w-100 pa-10"
      data-testid="mobile-header-links"
      bg-color="primary-darken-1"
    >
      <v-list-item
        v-for="link in linkNames"
        :key="link"
        :data-testid="`mobile-${nameToURL(link)}-link`"
        :to="`/${nameToURL(link)}`"
      >
        {{ link }}
      </v-list-item></v-list
    >
  </div>
</template>

<script lang="ts">
export default {
  name: "HeaderLinks",
  props: {
    linkNames: Object as () => string[],
  },
  methods: {
    nameToURL(name: string): string {
      return name.toLowerCase().replace(" ", "-");
    },
  },
};
</script>
