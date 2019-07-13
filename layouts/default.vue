<template>
  <v-app class="container">
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
    <site-nav />
  </v-app>
</template>

<script>
import SiteNav from '@/components/SiteNav';

export default {
  components: {
    SiteNav,
  },
  data() {
    return {
      title: "Vuetify.js",
      fixed: true
    };
  }
};
</script>
<style>

  .container {
    background-color: transparent;
  }
</style>
