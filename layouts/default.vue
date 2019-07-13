<template>
  <v-app class="container">
    <v-content>
      <v-container>
        <v-layout
          row
          wrap
          justify-center
          align-center
        >
          <v-flex>
            <div class="text-xs-center">
              <nuxt-link to="/">
                <logo />
              </nuxt-link>
            </div>
            <nuxt />
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
    <site-nav />
  </v-app>
</template>

<script>
import SiteNav from "@/components/SiteNav";
import Logo from "~/components/Logo.vue";

export default {
  components: {
    SiteNav,
    Logo,
  },
  data() {
    return {
      title: "Vuetify.js",
      fixed: true
    };
  },

  created() {
    this.$store.commit('user/rehydrate');
  },
};
</script>
<style>
.container {
  background-color: transparent;
}
</style>
