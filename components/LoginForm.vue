<template>
  <v-form>
    <v-container class="pa-0">
      <v-layout>
        <v-flex xs12 md4>
          <v-text-field placeholder="email" v-model="email" />
          <v-text-field type="password" v-model="password" placeholder="Password" />
          <v-btn @click="login">Login</v-btn>
        </v-flex>
      </v-layout>
    </v-container>
  </v-form>
</template>
<script>
import firebase from 'firebase';

export default {
  name: 'LoginForm',
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    login: function() {
      firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(
        (user) => {
          this.$router.replace('/')
        },
        (err) => {
          alert('Oops. ' + err.message)
        }
      );
    }
  }
}
</script>
