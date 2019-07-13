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
        </v-card-text>
        <v-card-actions>
        </v-card-actions>
      </v-card>
      <v-card>
        <link
          href="//cdn-images.mailchimp.com/embedcode/slim-10_7.css"
          rel="stylesheet"
          type="text/css"
        >
        <style type="text/css">
        #mc_embed_signup {
          background: #fff;
          clear: left;
          font: 14px Helvetica, Arial, sans-serif;
        }

        /* Add your own Mailchimp form style overrides in your site stylesheet or in this style block.
	   We recommend moving this block and the preceding CSS link to the HEAD of your HTML file. */
        </style>
        <div id="mc_embed_signup">
          <form
            action="https://gmail.us3.list-manage.com/subscribe/post?u=e82e1d408c1d8b1590cb90e4e&amp;id=23e012e088"
            method="post"
            id="mc-embedded-subscribe-form"
            name="mc-embedded-subscribe-form"
            class="validate"
            target="_blank"
            novalidate
          >
            <div id="mc_embed_signup_scroll">
              <label for="mce-EMAIL">Stay in touch</label>
              <input
                type="email"
                value=""
                name="EMAIL"
                class="email"
                id="mce-EMAIL"
                placeholder="email address"
                required
              >
              <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
              <div
                style="position: absolute; left: -5000px;"
                aria-hidden="true"
              ><input
                  type="text"
                  name="b_e82e1d408c1d8b1590cb90e4e_23e012e088"
                  tabindex="-1"
                  value=""
                ></div>
              <div class="clear"><input
                  type="submit"
                  value="Subscribe"
                  name="subscribe"
                  id="mc-embedded-subscribe"
                  class="button"
                ></div>
            </div>
          </form>
        </div>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import Logo from "~/components/Logo.vue";
import VuetifyLogo from "~/components/VuetifyLogo.vue";

export default {
  components: {
    Logo,
    VuetifyLogo
  }
};
</script>
