<template>
  <v-card class="my-4">
    <v-card-title
      d-block
      class="headline text-xs-center"
    >
      Volunteer Now
    </v-card-title>
    <v-card-text>
      <p>Our idea is still taking a shape. Subscribe to updates below to hear about the result!</p>
      <mailchimp-form />
    </v-card-text>
    <v-card-actions>
    </v-card-actions>
  </v-card>
</template>

<script>
import MailchimpForm from "~/components/MailchimpForm.vue";
import { fireDb } from "~/plugins/firebase.js";

export default {
  components: {
    MailchimpForm
  }
};
</script>
<style>
</style>
