<template>
  <v-form>
    <v-container class="pa-0">
      <v-layout>
        <v-flex xs12 md4>
          <v-text-field placeholder="email" v-model="email" />
          <v-text-field type="password" v-model="password" placeholder="password" />
          <v-btn @click="login">Login</v-btn>
          <v-divider />
          <v-btn color="primary" dark large @click="googleLogin">Login with Google</v-btn>
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
    checkGoogleLogin()  {
      console.log("Check google")
      firebase.auth().getRedirectResult().then(function(result) {
        let user = result.user;
        if (user) {
          window.location.href = "/"
        }
      }).catch((err) => {
        alert('Oops. ' + err.message)
      })
    },
    googleLogin() {
      console.log("Google Login")
      const google = new firebase.auth.GoogleAuthProvider();
      let auth = firebase.auth()
      auth.signInWithRedirect(google)
        .then(
          (result) => {
            console.log("Login with google")
        })
        .catch(
          (err) => {
            alert('Oops. ' + err.message)
        })
    },
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
  },
  beforeMount() {
    this.checkGoogleLogin()
  }
}
</script>
