<template>
  <v-form @submit.prevent="login">
    <v-container class="pa-0">
      <v-alert color="pink darken-2" type="warning" :value="warningValue">
        {{warningValue}}
      </v-alert>
      <v-layout>
        <v-flex xs12 md4>
          <v-text-field placeholder="email" v-model="email" />
          <v-text-field type="password" v-model="password" placeholder="Password" />
          <v-btn type="submit" :loading="loading">Login</v-btn>
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
    login: function() {
      this.loading = true;
      this.warningValue = false;
      firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(
        ({user}) => {
          this.$store.commit('user/loginUser', user);
          this.$router.push('/dashboard');
          this.loading = false;
        },
        (err) => {
          this.warningValue = 'Oops. ' + err.message;
          this.loading = false;
        }
      );
    }
  }
}
</script>
