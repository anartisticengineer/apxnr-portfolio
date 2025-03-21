<template>
  <div>
    <ul>
      <li v-for="(linkName, index) in linkNames" :key="index">
        <a :href="`/${nameToURL(linkName)}`" target="_blank">{{ linkName }}</a>
      </li>
      <li @click="toggleSubLinks">Projects</li>
    </ul>
    <ul v-if="subLinksOpen">
      <li v-for="(subLink, index) in projectSubLinks" :key="index">
        <a href="" target="_blank">{{ subLink }}</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "HeaderLinks",
  props: {
    linkNames: Array,
    projectsLink: String,
    projectSubLinks: Array,
  },
  methods: {
    toggleSubLinks() {
      this.subLinksOpen = !this.subLinksOpen;
    },
    nameToURL(name) {
      return name.toLowerCase().replace(" ", "-");
    },
  },
  data() {
    return {
      subLinksOpen: false,
    };
  },
};
</script>
