<template>
  <div>
      <job-listing-single />
  </div>
</template>
<script>
import JobListingSingle from '~/components/JobListingSingle.vue';
export default {
  name: 'JobList',
  components: {
    JobListingSingle
  },
}
</script>
