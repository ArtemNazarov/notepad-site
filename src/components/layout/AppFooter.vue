<template>
  <footer>
    <div>© {{new Date().getFullYear()}}</div>
    <div>Developed by <a href="http://artemnazarov.github.io">Artem Nazarov</a></div>
  </footer>
</template>

<script>
export default {
    name: 'AppFooter'
}
</script>

<style>
  footer {
    background-color: #fafafa;
    padding: 30px;
  }
</style>