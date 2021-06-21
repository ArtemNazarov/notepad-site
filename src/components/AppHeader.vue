<template>
  <header>
    <div id="logo">
      <a href="/">
        <img
          src="../assets/logo_192x192.png"
          width="64"
          height="64"
          alt="Notepad logo"
        />
      </a>
    </div>
    <div id="links">
      <div><router-link to="/">Home</router-link>&nbsp;</div>
      <div>
        <router-link to="/about">Help</router-link>
      </div>
    </div>
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
  display: grid;
  grid-auto-flow: column;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.3);
}

header a {
  font-weight: bold;
  font-size: 24px;
  color: #2c3e50;
  text-decoration: none;
  padding: 30px;
}

#links a:hover,
#links a:focus {
  background-color: #f5f5f5;
}

header a.router-link-exact-active {
  color: #0821ff;
}

#logo {
  display: grid;
  justify-content: start;
  align-content: center;
}

#logo img {
  border-radius: 4px;
}

#links {
  display: grid;
  justify-content: right;
  align-content: center;
  grid-auto-flow: column;
  margin-right: 90px;
}

img {
  filter: drop-shadow(4px 3px 6px #aaa);
}
</style>