<template>
  <div id="app">
    <component :is="layout">
      <router-view :layout="layout" />
    </component>
  </div>
</template>

<script>
export default {
  name: `App`,
  data() {
    return {
      layout: `div`,
    };
  },
};
</script>
<style>
#app {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  min-height: 100vh;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
