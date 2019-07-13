<template>
  <v-card class="my-4">
    <v-card-title d-block class="headline text-xs-center">Signup</v-card-title>
    <v-card-text>
      <signup-form />
    </v-card-text>
    <v-card-actions>
    </v-card-actions>
  </v-card>
</template>
<script>
import Logo from "~/components/Logo.vue";
import SignupForm from "~/components/SignupForm.vue";
export default {
  name: "SignupPage",
  components: { Logo, SignupForm },
};
</script>