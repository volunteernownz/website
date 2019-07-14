<template>
  <v-form @submit.prevent="signup">
    <v-container class="pa-0">
      <v-layout>
        <v-flex xs12 md4>
          <v-text-field placeholder="email" v-model="email" />
          <v-text-field type="password" v-model="password" placeholder="password" />
          <v-text-field placeholder="name" v-model="name" />
          <v-btn color="primary" dark large type="submit">Sign Up</v-btn>
          <v-divider />
          <v-btn color="primary" dark large @click="googleSignup">Signup with Google</v-btn>
        </v-flex>
      </v-layout>
    </v-container>
  </v-form>
</template>
<script>
import firebase from 'firebase';

export default {
  name: 'SignupForm',
  data() {
    return {
      email: '',
      password: '',
      name: ''
    }
  },
  methods: {
    checkGoogleSignup()  {
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
    googleSignup() {
      console.log("Google Signup")
      const google = new firebase.auth.GoogleAuthProvider();
      let auth = firebase.auth()
      auth.signInWithRedirect(google)
        .then(
          (result) => {
            console.log("Signup with google")
        })
        .catch(
          (err) => {
            alert('Oops. ' + err.message)
        })
    },
    signup: function() {
      let auth = firebase.auth()
      auth.createUserWithEmailAndPassword(this.email, this.password).then(
        (success) => {
          let user = auth.currentUser;
          firebase
            .firestore()
            .collection("user")
            .doc(user.uid)
            .set({
              name: this.name
            })
            .then(
              (success) => {
                this.$router.replace('/')
              })
            .catch(
              (err) => {
                alert('Error updating profile. ' + err.message)
              });
        },
        (err) => {
          alert('Oops. ' + err.message)
        }
      )
    }
  },
  beforeMount() {
    this.checkGoogleSignup()
  }
}
</script>
