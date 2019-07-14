<template>
  <v-form @submit.prevent="submitOpportunity">
    <v-snackbar v-model="snackbar" absolute top>{{ snackbarContent }}</v-snackbar>
    <v-container class="pa-0">
      <v-alert color="pink darken-2" type="warning" :value="warningValue">
        {{warningValue}}
      </v-alert>
      <v-layout>
        <v-flex xs12 md6>
          <v-text-field label="Opportunity title" v-model="title" />
          <v-textarea v-model="content" label="Description" />
          <v-text-field type="number" label="People needed" v-model="people" />
          <v-btn type="submit" :loading="loading">Submit</v-btn>
        </v-flex>
      </v-layout>
    </v-container>
  </v-form>
</template>
<script>
import {fireDb} from '~/plugins/firebase.js';

export default {
  name: 'OpportunityForm',
  data() {
    return {
      title: '',
      content: '',
      people: false,
      loading: false,
      warningValue: false,
      snackbar: false,
      snackbarContent: 'Opportunity have been posted!',
    }
  },
  methods: {
    submitOpportunity: function() {
      this.loading = true;
      const { uid } = this.$store.state.user;
      const dataSave = {
        title: this.title,
        content: this.content,
        people: this.people,
        author: uid,
      };

      fireDb.collection('job').add(dataSave).then((r) => {
        console.log(r);
        fireDb.collection('user').doc(uid).set({
          jobs: [],
        }, { merge: true });
        this.snackbar = true;
        setTimeout(() => this.$router.push('/dashboard'), 1000);
        this.loading = false;
      }, () => {
        this.snackbar = false;
        this.loading = false;
      });
    }
  },
}
</script>
