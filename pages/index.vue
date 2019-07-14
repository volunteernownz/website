<template>
  <v-card class="my-4">
    <v-card-title primary-title>
      <div>
        <div class="headline">Volunteer Now NZ</div>
        <span>Be a part of something bigger than yourself!</span>
      </div>
    </v-card-title>
    <v-card>
      <v-card-title primary-title>
          <div>
            <div class="headline">Tree Planting - Conservation Volunteers NZ</div>
            <span>Saturday 20th July 2019 9:30 AM - 1:00 PM at Mt. Victoria - Ellice Street, Wellington</span>
          </div>
      </v-card-title>
      <v-list-tile-content>
        <div class="mapouter"><div class="gmap_canvas"><iframe width="600" height="200" id="gmap_canvas" src="https://maps.google.com/maps?q=Mt%20Victorial%20Ellice%20St%20wellington&t=&z=15&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><a href="https://www.embedgooglemap.net/blog/best-wordpress-themes/"></a></div><style>.mapouter{position:relative;text-align:right;height:200px;width:600px;}.gmap_canvas {overflow:hidden;background:none!important;height:200px;width:600px;}</style></div>
      </v-list-tile-content>
      <v-list-tile-content>
        <div class="signupform">
          <v-btn color="primary" dark large v-if="showSignup === false"  @click="toggleForm">Signup for this Event</v-btn>
          <signup-form v-if="showSignup" :noorg="true" />
        </div>
      </v-list-tile-content>
    </v-card>
    <v-card>
      <v-card-title primary-title>
        <div>
          <div class="headline">Stay in touch</div>
          <span>We are breaking down the barriers to enable volunteers to be instantly matched with the correct event based role.</span>
          <mailchimp-form />
        </div>
      </v-card-title>
    </v-card>
    <v-card-actions>
    </v-card-actions>
  </v-card>
</template>

<script>
import MailchimpForm from "~/components/MailchimpForm.vue";
import SignupForm from "~/components/SignupForm";

export default {
  data() {
    return {
      showSignup: false,
    };
  },

  components: {
    MailchimpForm,
    SignupForm,
  },

  methods: {
    toggleForm() {
      this.showSignup = true;
    },
  },
};
</script>

<style>
.signupform {
  padding-left: 16px;
}
</style>
