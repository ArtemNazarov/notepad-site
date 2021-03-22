<template>
  <app-header />
  <router-view />
  <app-footer />
</template>

<script>
import AppHeader from "./AppHeader.vue";
import AppFooter from "./AppFooter.vue";
export default {
  name: "Layout",
  components: AppHeader, AppFooter
};
</script>

<style>
</style>