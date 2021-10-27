<template>
  <section class="coaches" v-if="filteredCoaches.length">
    <coach-card
      v-for="coach in filteredCoaches"
      :key="coach._id"
      :coach-id="coach._id"
      :first-name="coach.firstName"
      :last-name="coach.lastName"
      :hourly-rate="coach.hourlyRate"
      :fields="coach.fields"
    ></coach-card>
  </section>
  <base-card v-else class="no-coaches">
    <p class="no-coaches__text">
      There are no coaches yet, be the first to sign up!
    </p>
    <base-button>Become a coach</base-button>
  </base-card>
</template>

<script>
import { mapGetters } from "vuex";

import CoachCard from "./CoachCard.vue";

export default {
  components: { CoachCard },
  props: {
    activeFields: {
      type: Array,
      required: true,
    },
    coachList: {
      type: Array,
      required: true,
    },
  },
  computed: {
    filteredCoaches() {
      return this.coachList.filter((coach) => {
        return coach.fields.some((field) => this.activeFields.includes(field));
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.coaches {
  display: grid;
  gap: 1rem;
}
.no-coaches {
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
}
</style>
