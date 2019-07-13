<template>
      <v-bottom-nav
      fixed
      :value="true"
    >
      <v-btn
        color="purple darken-4"
        flat
        nuxt
        to="/"
      >
        <span>Home</span>
        <v-icon>home</v-icon>
      </v-btn>

      <slot v-if="$store.state.user.email">
        <v-btn
          color="purple darken-4"
          flat
          nuxt
          to="/dashboard"
        >
          <span>Dashboard</span>
          <v-icon>dashboard</v-icon>
        </v-btn>
        <v-btn
          color="purple darken-4"
          flat
          @click="logout"
        >
          <span>Logout</span>
          <v-icon>exit_to_app</v-icon>
        </v-btn>
      </slot>

      <!-- <v-btn
        color="purple darken-4"
        flat
        nuxt
        to="/signup"
      >
        <span>Signup</span>
        <v-icon>person</v-icon>
      </v-btn> -->
    </v-bottom-nav>
</template>
<script>
export default {
  name: 'SiteNav',
  methods: {
    logout() {
      this.$store.commit('user/logout');
      this.$router.push('/');
    },
  },
}
</script>
