<template>
  <v-card class="my-4">
    <v-card-title d-block class="headline text-xs-center">Logout</v-card-title>
    <v-card-text>
      Logout
    </v-card-text>
    <v-card-actions>
    </v-card-actions>
  </v-card>
</template>
<script>
import firebase from 'firebase';
export default {
  beforeMount() {
    firebase.auth().signOut().then(() => {
      window.location.href = "/login"
    }).catch((err) => {
      alert('Oops. ' + err.message)
    })
  }
}
</script>
