<template>
  <MainContainer />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import MainContainer from "./components/MainContainer.vue";

export default defineComponent({
  name: "App",
  components: {
    MainContainer,
  },
});
</script>

<style>
#app {
  font-family: Manrope, Arial, sans-serif;
  font-optical-sizing: auto;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
#app h1,
#app h2,
#app h3,
#app h4,
#app h5,
#app h6 {
  font-family: "Noto Serif", serif;
  font-weight: 300;
}
#app p,
#app span,
#app div {
  font-family: Manrope, Arial, Helvetica, sans-serif;
}
</style>
