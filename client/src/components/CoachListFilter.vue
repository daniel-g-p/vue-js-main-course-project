<template>
  <div class="filters">
    <base-checkbox
      v-for="field in coachFields"
      :key="field.id"
      name="fields"
      :id="field.id"
      :label="field.label"
      :checked="activeFields.includes(field.id)"
      @toggle-checkbox="toggleCheckbox(field.id)"
    ></base-checkbox>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  emits: ["change-filter"],
  props: {
    coachFields: {
      type: Array,
      required: true,
    },
    activeFields: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      checkedOptions: [],
    };
  },
  methods: {
    toggleCheckbox(fieldId) {
      this.$emit("change-filter", fieldId);
    },
  },
};
</script>

<style lang="scss" scoped>
.filters {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: 0.5rem;
}
</style>
