<template>
  <div
    :id="`footer-kofi-button-${isMobile ? 'mobile' : 'desktop'}`"
    class="d-flex flex-column my-5 my-md-0"
  >
    <span class="py-2">Got a few dollars?</span>
    <a href="https://ko-fi.com/K3K2S71S" target="_blank"
      ><img
        height="36"
        style="border: 0px; height: 36px"
        src="https://storage.ko-fi.com/cdn/kofi1.png?v=6"
        border="0"
        alt="Buy Me a Coffee at ko-fi.com"
    /></a>
  </div>
</template>

<script lang="ts">
export default {
  name: "FooterKofiButton",
  props: {
    isMobile: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
