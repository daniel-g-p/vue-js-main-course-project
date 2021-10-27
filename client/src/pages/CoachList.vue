<template>
  <base-card class="header">
    <h1>Coach List</h1>
    <coach-list-filter
      v-if="coachFields.length"
      :coach-fields="coachFields"
      :active-fields="activeFields"
      @change-filter="changeFilter"
    ></coach-list-filter>
  </base-card>
  <coach-list-items
    :coach-list="coachList"
    :active-fields="activeFields"
  ></coach-list-items>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

import CoachListFilter from "../components/CoachListFilter.vue";
import CoachListItems from "../components/CoachListItems.vue";

export default {
  components: {
    CoachListFilter,
    CoachListItems,
  },
  data() {
    return {
      activeFields: [],
    };
  },
  computed: {
    ...mapGetters({
      coachList: "coaches/coachList",
      coachFields: "coaches/coachFields",
    }),
  },
  methods: {
    changeFilter(fieldId) {
      const index = this.activeFields.findIndex((field) => field === fieldId);
      if (index === -1) {
        this.activeFields.push(fieldId);
      } else {
        this.activeFields.splice(index, 1);
      }
    },
    ...mapActions({ fetchCoaches: "coaches/fetchCoaches" }),
  },
  async mounted() {
    if (!this.coachList.length) {
      await this.fetchCoaches();
    }
    this.activeFields = this.coachFields.map((field) => field.id);
  },
};
</script>

<style lang="scss" scoped>
@use "../style/index.scss" as *;
.header {
  background-color: $color-red-dark;
  color: $color-grey-light;
  margin-bottom: 1rem;
}
</style>
