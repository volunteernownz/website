<template>
  <div>
      <job-listing-single />
  </div>
</template>
<script>
import {fireDb} from '~/plugins/firebase.js';
import JobListingSingle from '~/components/JobListingSingle.vue';
export default {
  name: 'JobList',
  data() {
    return {
      jobs: [],
    };
  },
  props: {
    organisation: { default: '', type: String },
  },
  components: {
    JobListingSingle
  },

  created() {
    const jobRef = fireDb.collection('job');
    jobRef.get().then((snapshot) => {
      snapshot.docs.forEach(snap => {
        const d = snap.data();
        if (d.author === this.organisation) {
          this.jobs.push(d);
        }
      });
    }, console.error);
  },
}
</script>
