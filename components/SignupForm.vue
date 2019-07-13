<template>
  <v-form>
    <v-container class="pa-0">
      <v-layout>
        <v-flex xs12 md4>
          <v-text-field placeholder="username" v-model="username" />
          <v-btn class="ma-0">Signup</v-btn>
        </v-flex>
      </v-layout>
    </v-container>
  </v-form>
</template>
<script>
export default {
  name: 'SignupForm',

  data() {
    return {
      username: '',
    };
  },

  methods: {
    addUser() {
      fireDb
        .collection("user")
        .add({
          first: this.username,
          last: "Lovelace",
          born: 1815
        })
        .then(function(docRef) {
          console.log("Document written with ID: ", docRef.id);
        })
        .catch(function(error) {
          console.error("Error adding document: ", error);
        });
    }
  }
}
</script>
