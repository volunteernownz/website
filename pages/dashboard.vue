<template>
  <v-layout
    justify-center
    class="my-3"
  >
    <v-flex
      xs12
      md5
      class="mx-3"
    >
      <user-profile v-if="$store.state.user.uid" />
    </v-flex>
    <v-flex
      xs12
      md-7
    >
      <job-list :organisation="($store.state.user.is_org ? $store.state.user.uid : '')" />
    </v-flex>
  </v-layout>
</template>

<script>
import UserProfile from "~/components/UserProfile";
import JobList from "~/components/JobList";

export default {
  components: {
    UserProfile,
    JobList,
  },

  afterCreate() {
    if (!this.$store.state.user.email) {
      this.$router.replace('/login');
    }
  },
};
</script>
<style>
</style>
