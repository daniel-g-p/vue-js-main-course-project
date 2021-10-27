<template>
  <the-header></the-header>
  <main class="main">
    <router-view></router-view>
  </main>
</template>

<script>
import TheHeader from "./layout/TheHeader.vue";

export default {
  components: {
    TheHeader,
  },
};
</script>

<style lang="scss">
@use "./style/index.scss" as *;
@include font-face("Josefin Sans", "josefin-sans-light", 300);
@include font-face("Josefin Sans", "josefin-sans-regular", 400);
@include font-face("Josefin Sans", "josefin-sans-semibold", 600);
@include css-reset();
.main {
  max-width: 40rem;
  margin: 0 auto;
  padding: 3rem 1rem;
}
</style>
