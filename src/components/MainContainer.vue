<template>
  <main>
    <HeaderContainer />
    <h1>{{ msg }}</h1>
  </main>
</template>

<script>
import HeaderContainer from "./header/HeaderContainer.vue";

export default {
  name: "MainContainer",
  props: {
    msg: String,
  },
  components: {
    HeaderContainer,
  },
};
</script>
