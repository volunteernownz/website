<template>
  <v-card>
    <v-layout class="py-3">
      <v-flex xs3>
        <img
          class="profile_img"
          src="~assets/user_image.jpg"
        />
      </v-flex>
      <v-flex xs9>
        <v-card-title
          primary-title
          class="headline py-0"
        >
          {{ $store.state.user.name }}
        </v-card-title>
        <v-card-text>
          <em>{{ $store.state.user.email }}</em><br />
          <!-- Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, vero. -->
        </v-card-text>
      </v-flex>
    </v-layout>
    <v-card-actions>
      <v-btn nuxt to="/new_opportunity" v-if="$store.state.user.is_org">Add opportunity</v-btn>
    </v-card-actions>
  </v-card>
</template>
<style>
.profile_img {
  max-width: 100%;
}
</style>
