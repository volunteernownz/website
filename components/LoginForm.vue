<template>
  <v-form @submit.prevent="login">
    <v-container class="pa-0">
      <v-alert color="pink darken-2" type="warning" :value="warningValue">
        {{warningValue}}
      </v-alert>
      <v-layout>
        <v-flex xs12 md4>
          <v-text-field placeholder="email" v-model="email" />
          <v-text-field type="password" v-model="password" placeholder="password" />
          <v-btn type="submit">Login</v-btn>
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
      password: '',
      loading: false,
      warningValue: false,
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
      this.loading = true;
      this.warningValue = false;
      firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(
        ({user}) => {
          this.$store.commit('user/loginUser', { ...user, user_type: 'org' });
          this.$router.push('/dashboard');
          this.loading = false;
        },
        (err) => {
          this.warningValue = 'Oops. ' + err.message;
          this.loading = false;
        }
      );
    }
  },
  beforeMount() {
    this.checkGoogleLogin()
  }
}
</script>
