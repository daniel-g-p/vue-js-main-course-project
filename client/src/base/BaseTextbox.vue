<template>
  <div class="field" :class="inputErrorClass">
    <label :for="fieldId" class="field__label">{{ fieldLabel }}</label>
    <textarea
      v-if="isTextarea"
      class="field__input field__input--textarea"
      :name="fieldId"
      :id="fieldId"
      :value="modelValue"
      :required="isRequired"
      @input="update"
    ></textarea>
    <input
      v-else
      class="field__input"
      :type="fieldType"
      :id="fieldId"
      :name="fieldId"
      :value="modelValue"
      :required="isRequired"
      @input="update"
    />
  </div>
</template>

<script>
export default {
  props: {
    fieldId: {
      type: String,
      required: true,
    },
    fieldLabel: {
      type: String,
      required: true,
    },
    modelValue: {
      required: true,
    },
    isEmail: {
      type: Boolean,
      default: false,
    },
    isTextarea: {
      type: Boolean,
      default: false,
    },
    isRequired: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      hasError: false,
    };
  },
  computed: {
    fieldType() {
      if (this.isEmail) {
        return "email";
      } else {
        return "text";
      }
    },
    inputErrorClass() {
      return { "field--error": this.hasError };
    },
  },
  methods: {
    update($event) {
      const value = $event.target.value;
      const emptyError = this.isRequired && !value;
      const emailError =
        this.isEmail &&
        !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value);
      if (emptyError || emailError) {
        this.hasError = true;
      } else {
        this.hasError = false;
      }
      this.$emit("update:modelValue", $event.target.value);
    },
  },
};
</script>

<style lang="scss" scoped>
@use "../style/index.scss" as *;
.field {
  display: flex;
  flex-direction: column;
  transition: color 0.125s ease;
  &--error {
    color: $color-red-light;
  }
  &__label {
    align-self: flex-start;
    margin-bottom: 0.25rem;
    font-size: 0.875rem;
  }
  &__input {
    border: 0.125rem solid currentColor;
    border-radius: 0.25em;
    padding: 0.5em;
    transition: background-color 0.25s ease;
    &:hover,
    &:focus {
      background-color: $color-grey-light;
    }
    &--textarea {
      resize: none;
      min-height: 9rem;
    }
  }
}
</style>
