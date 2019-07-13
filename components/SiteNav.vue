<template>
      <v-bottom-nav
      fixed
      :value="true"
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

      <!-- <v-btn
        color="teal"
        flat
        value="/jobs"
        nuxt
        to="/jobs"
      >
        <span>Jobs</span>
        <v-icon>favorite</v-icon>
      </v-btn> -->
    </v-bottom-nav>
</template>
