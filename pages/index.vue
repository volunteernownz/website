<template>
  <v-layout
    row
    wrap
    justify-center
    align-center
  >
    <v-flex>
      <div class="text-xs-center">
        <logo />
      </div>
      <v-card class="my-4">
        <v-card-title
          d-block
          class="headline text-xs-center"
        >
          Volunteer Now
        </v-card-title>
        <v-card-text>
          <p>Our idea is still taking a shape. Subsribe to updates below to hear about the result!</p>
          <mailchimp-form />
        </v-card-text>
        <v-card-actions>
        </v-card-actions>
      </v-card>
      <v-card>

      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import Logo from "~/components/Logo.vue";
import VuetifyLogo from "~/components/VuetifyLogo.vue";
import MailchimpForm from '~/components/MailchimpForm.vue';

export default {
  components: {
    Logo,
    VuetifyLogo,
    MailchimpForm,
  }
};
</script>
