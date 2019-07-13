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
      <user-profile />
    </v-flex>
    <v-flex
      xs12
      md-7
    >
      <job-list />
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
  }
};
</script>
<style>
</style>
