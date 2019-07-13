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
