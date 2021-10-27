<template>
  <div class="checkbox">
    <input
      type="checkbox"
      class="checkbox__input"
      :name="name"
      :id="id"
      :value="id"
      :checked="checked"
      @change="toggleCheckbox"
    />
    <label :for="id">{{ label }}</label>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true,
    },
    id: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
    checked: {
      type: Boolean,
      required: true,
    },
  },
  emits: ["toggle-checkbox"],
  methods: {
    toggleCheckbox() {
      this.$emit("toggle-checkbox", this.id);
    },
  },
};
</script>

<style lang="scss" scoped>
.checkbox {
  &__input {
    margin-right: 0.25rem;
  }
}
</style>
