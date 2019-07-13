<template>
  <v-app>

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
