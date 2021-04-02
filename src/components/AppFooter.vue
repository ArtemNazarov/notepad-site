<template>
  <footer>
    <div> Developed by <a href="http://artemnazarov.github.io">Artem Nazarov</a> © {{new Date().getFullYear()}}</div>
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