<template>
  <a
    href="https://play.google.com/store/apps/details?id=ru.diman169.notepad&hl=ru&gl=US&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1"
    ><img
      alt="Get it on Google Play"
      src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
  /></a>
</template>

<script>
// @ is an alias to /src
import Layout from "@/components/layout/Layout.vue";

export default {
  name: `Home`,
  created() {
    this.$emit(`update:layout`, Layout);
  },
};
</script>
