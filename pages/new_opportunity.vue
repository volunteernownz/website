<template>
  <v-card class="my-4">
    <v-card-title d-block class="headline text-xs-center">New Opportunity</v-card-title>
    <v-card-text>
      <opportunity-form />
    </v-card-text>
    <v-card-actions>
    </v-card-actions>
  </v-card>
</template>
<script>
import Logo from "~/components/Logo.vue";
import OpportunityForm from "~/components/OpportunityForm.vue";
export default {
  name: "NewOpportunity",
  components: { OpportunityForm },
};
</script>
