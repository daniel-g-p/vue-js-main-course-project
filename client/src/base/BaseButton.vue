<template>
  <button v-if="isButton" class="button" :class="buttonClass">
    <slot></slot>
  </button>
  <router-link v-else :to="linkObject" class="button" :class="buttonClass">
    <slot></slot>
  </router-link>
</template>

<script>
export default {
  props: {
    buttonType: {
      type: String,
      default: "button",
      validator(value) {
        return ["link", "button"].includes(value);
      },
    },
    buttonStyle: {
      type: String,
      default: "fill",
      validator(value) {
        return ["fill", "outline"].includes(value);
      },
    },
    linkObject: {
      type: Object,
    },
  },
  computed: {
    isButton() {
      return this.buttonType === "button";
    },
    buttonClass() {
      switch (this.buttonStyle) {
        case "fill":
          return { "button--fill": true };
        case "outline":
          return { "button--outline": true };
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@use "../style/index.scss" as *;
.button {
  border-radius: 2em;
  padding: 0.75em 1.5em;
  text-decoration: none;
  &:hover,
  &:focus {
    cursor: pointer;
  }
  &--fill {
    background-color: $color-blue-dark;
    color: $color-grey-light;
    transition: background-color 0.25s ease;
    &:hover,
    &:focus {
      background-color: $color-blue-light;
    }
  }
  &--outline {
    color: $color-blue-dark;
    border: 0.125rem solid currentColor;
    transition: color 0.25s ease;
    &:hover,
    &:focus {
      color: $color-blue-light;
    }
  }
}
</style>
