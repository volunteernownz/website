<template>
  <v-card class="my-4">
    <v-card-title primary-title>
      <div>
        <div class="headline">Volunteer Now</div>
        <span>Be a part of something bigger than yourself!</span>
      </div>
    </v-card-title>
    <v-card>
      <v-card-title primary-title>
          <div>
            <div class="headline">Three Planting - Conservation Volunteers NZ</div>
            <span>Saturday 29th July 2019 09:00-10:00 at Mt. Victoria - Ellice Street, Wellington</span>
          </div>
      </v-card-title>
      <v-list-tile-content>
        <div class="mapouter"><div class="gmap_canvas"><iframe width="600" height="200" id="gmap_canvas" src="https://maps.google.com/maps?q=Mt%20Victorial%20Ellice%20St%20wellington&t=&z=15&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><a href="https://www.embedgooglemap.net/blog/best-wordpress-themes/"></a></div><style>.mapouter{position:relative;text-align:right;height:200px;width:600px;}.gmap_canvas {overflow:hidden;background:none!important;height:200px;width:600px;}</style></div>
      </v-list-tile-content>
      <v-list-tile-content>
        <v-btn color="primary" dark large href="/signup">Signup for this Event</v-btn>
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

export default {
  components: {
    MailchimpForm
  }
};
</script>
<style>
</style>
