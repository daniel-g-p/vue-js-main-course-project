<template>
  <base-card>
    <h1>Become a Coach</h1>
    <form class="form">
      <base-textbox
        field-id="firstName"
        field-label="First Name"
        :is-required="true"
        v-model="firstName"
      ></base-textbox>
      <base-textbox
        field-id="lastName"
        field-label="Last Name"
        :is-required="true"
        v-model="lastName"
      ></base-textbox>
      <base-textbox
        class="form__field--span"
        field-id="email"
        field-label="Email"
        :is-required="true"
        :is-email="true"
        v-model="email"
      ></base-textbox>
      <base-textbox
        class="form__field--span"
        field-id="message"
        field-label="Bio"
        :is-required="true"
        :is-textarea="true"
        v-model="bio"
      ></base-textbox>
      <div class="form__field--span">
        <p class="form__label">Fields of expertise</p>
        <div class="form__checkboxes">
          <base-checkbox
            v-for="field in fields"
            :key="field.id"
            name="fields"
            :id="field.id"
            :label="field.label"
            :checked="field.checked"
            @toggle-checkbox="field.checked = !field.checked"
          ></base-checkbox>
        </div>
      </div>
      <div class="form__buttons">
        <base-button>Register</base-button>
        <base-button
          button-type="link"
          button-style="outline"
          :link-object="cancelLink"
          >Cancel</base-button
        >
      </div>
    </form>
  </base-card>
</template>

<script>
export default {
  data() {
    return {
      firstName: "",
      lastName: "",
      email: "",
      bio: "",
      hourlyRate: null,
      fields: [
        { id: "gym", label: "Gym", checked: false },
        { id: "football", label: "Football", checked: false },
        { id: "basketball", label: "Basketball", checked: false },
        { id: "volleyball", label: "Volleyball", checked: false },
      ],
    };
  },
  computed: {
    cancelLink() {
      return { name: "coach-list" };
    },
  },
  methods: {
    submitForm() {
      alert("SUBMIT");
    },
  },
};
</script>

<style lang="scss" scoped>
@use "../style/index.scss" as *;

.form {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.75rem;
  margin-top: 0.75rem;
  &__field {
    &--span {
      grid-column: span 2;
    }
  }
  &__label {
    font-size: 0.875rem;
    margin-bottom: 0.25rem;
  }
  &__checkboxes {
    display: flex;
    gap: 0.5rem 1rem;
    flex-wrap: wrap;
  }
}
</style>
