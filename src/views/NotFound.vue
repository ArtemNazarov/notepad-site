<template>
  <h1>404: Page Not Found</h1>

  <a href="/"><button>Return to Home </button></a>
</template>

<script>
export default {
  name: "NotFoundPage",
    created() {
    this.$emit(`update:layout`, 'div');
  },
};
</script>

<style>
</style>