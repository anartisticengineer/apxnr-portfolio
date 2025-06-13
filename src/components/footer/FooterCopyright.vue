<template>
  <div
    :id="`footer-copyright-${isMobile ? 'mobile' : 'desktop'}`"
    class="text-center my-0 my-md-5"
  >
    <strong>&copy; APXNR</strong> - {{ new Date().getFullYear() }}
  </div>
</template>

<script lang="ts">
export default {
  name: "FooterCopyright",
  props: {
    isMobile: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
