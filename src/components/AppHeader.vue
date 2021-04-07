<template>
  <header>
    <router-link to="/">Home</router-link>&nbsp;
    <router-link to="/about">Help</router-link>
  </header>
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
header {
  padding: 30px;
  box-shadow: 0 1px 1px rgba(0,0,0,0.3)
}

header a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
}

header a.router-link-exact-active {
  color: #42b983;
}
</style>