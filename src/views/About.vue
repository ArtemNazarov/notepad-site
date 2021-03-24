<template>
  <div class="about">
    <h1>Documentation</h1>
  </div>
</template>
<script>
import Layout from "@/components/layout/Layout.vue";
export default {
  name: `About`,
  created() {
    this.$emit(`update:layout`, Layout);
  },
};
</script>
