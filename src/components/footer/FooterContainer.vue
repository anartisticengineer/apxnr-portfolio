<template>
  <v-footer
    class="d-flex flex-column flex-md-row justify-space-around"
    color="background"
  >
    <footer-social />
    <div id="footer-copyright" class="text-center">
      <strong>&copy; APXNR</strong> - {{ getCurrentYear() }}
    </div>
  </v-footer>
</template>

<script setup>
const getCurrentYear = () => new Date().getFullYear();
</script>
<script>
import FooterSocial from "./FooterSocial.vue";
export default {
  components: { FooterSocial },
  name: "FooterContainer",
};
</script>
