<template>
  <v-app>

    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>

    <v-bottom-nav
      absolute
      :value="true"
      color="transparent"
    >
      <v-btn
        color="teal"
        flat
        nuxt
        to="/"
      >
        <span>Home</span>
        <v-icon>home</v-icon>
      </v-btn>

      <v-btn
        color="teal"
        flat
        value="/jobs"
        nuxt
        to="/jobs"
      >
        <span>Jobs</span>
        <v-icon>favorite</v-icon>
      </v-btn>
    </v-bottom-nav>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      title: "Vuetify.js",
      fixed: true
    };
  }
};
</script>
