<template>
  <v-layout
    row
    wrap
    justify-center
    align-center
  >
    <v-flex
    >
      <div class="text-xs-center">
        <logo />
      </div>
      <v-card class="my-4">
        <v-card-title d-block class="headline text-xs-center">
          Volunteer Now
        </v-card-title>
        <v-card-text>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod dicta eos dolores consequuntur quidem obcaecati cumque voluptates placeat ad. Ipsum eveniet enim iure quos esse, delectus blanditiis fugit qui in!</p>
        </v-card-text>
        <v-card-actions>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import Logo from '~/components/Logo.vue'
import VuetifyLogo from '~/components/VuetifyLogo.vue'

export default {
  components: {
    Logo,
    VuetifyLogo
  }
}
</script>
