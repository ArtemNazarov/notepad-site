<template>
  <div id="nav">
    <router-link to="/">Home</router-link>&nbsp;
    <router-link to="/about">Help</router-link>
  </div>
</template>

<script>
export default {
  name: "AppHeader",
  data() {
    return {
      isBurgerActive: false,
    };
  },
  methods: {
    toggleBurger() {
      this.isBurgerActive = !this.isBurgerActive;
    },
  },
};
</script>

<style>
</style>