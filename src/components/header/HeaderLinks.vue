<template>
  <v-list class="d-flex" horizontal variant="text" bg-color="background">
    <v-list-item
      v-for="link in linkNames"
      :key="link"
      :to="`/${nameToURL(link)}`"
    >
      <span>{{ link }}</span>
    </v-list-item>
  </v-list>
</template>

<script>
export default {
  name: "HeaderLinks",
  props: {
    linkNames: Array,
  },
  methods: {
    nameToURL(name) {
      return name.toLowerCase().replace(" ", "-");
    },
  },
};
</script>
