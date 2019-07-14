<template>
  <v-card class="my-4">
    <v-card-title d-block class="headline text-xs-center">Login</v-card-title>
    <v-card-text>
      <login-form />
    </v-card-text>
    <v-card-actions>
    </v-card-actions>
  </v-card>
</template>
<script>
import LoginForm from "~/components/LoginForm.vue";
export default {
  name: "LoginPage",
  components: { LoginForm },
};
</script>
