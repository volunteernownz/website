<template>
  <v-form @submit.prevent="signup">
    <v-container class="pa-0">
      <v-layout>
        <v-flex>
          <v-text-field placeholder="email" v-model="email" />
          <v-text-field type="password" v-model="password" placeholder="password" />
          <v-text-field placeholder="name" v-model="name" />
          <v-checkbox v-if="!noorg" v-model="org" label="We are organisation" />
          <v-btn color="primary" dark large type="submit">Sign Up</v-btn>
          <v-divider />
          <!-- <v-btn color="primary" dark large @click="googleSignup">Signup with Google</v-btn> -->
        </v-flex>
      </v-layout>
    </v-container>
  </v-form>
</template>
<script>
import firebase from 'firebase';
import { fireDb } from '~/plugins/firebase.js';

export default {
  name: 'SignupForm',
  props: {
    noorg: { default: false, type: Boolean }
  },
  data() {
    return {
      email: '',
      password: '',
      name: '',
      org: false,
    }
  },

  methods: {
    // checkGoogleSignup()  {
    //   console.log("Check google")
    //   firebase.auth().getRedirectResult().then(function(result) {
    //     let user = result.user;
    //     if (user) {
    //       window.location.href = "/"
    //     }
    //   }).catch((err) => {
    //     alert('Oops. ' + err.message)
    //   })
    // },
    // googleSignup() {
    //   console.log("Google Signup")
    //   const google = new firebase.auth.GoogleAuthProvider();
    //   let auth = firebase.auth()
    //   auth.signInWithRedirect(google)
    //     .then(
    //       (result) => {
    //         console.log("Signup with google")
    //     })
    //     .catch(
    //       (err) => {
    //         alert('Oops. ' + err.message)
    //     })
    // },
    signup: function() {
      let auth = firebase.auth()
      auth.createUserWithEmailAndPassword(this.email, this.password).then(
        (success) => {
          let user = auth.currentUser;
          fireDb.collection("user")
            .doc(user.uid)
            .set({
              name: this.name,
              is_org: this.org,
            })
            .then(
              (success) => {
                this.$store.commit('user/loginUser', { ...user, is_org: this.org, name: this.name });
                this.$router.push('/dashboard');
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
  // beforeMount() {
  //   this.checkGoogleSignup()
  // }
}
</script>
