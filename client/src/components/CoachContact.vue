<template>
  <base-card>
    <h2>Contact</h2>
    <form
      class="form"
      novalidate
      @keydown.enter="preventSubmission"
      @submit="submitForm"
    >
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
        class="form__field--span2"
        field-id="email"
        field-label="Email"
        :is-required="true"
        :is-email="true"
        v-model="email"
      ></base-textbox>
      <base-textbox
        class="form__field--span2"
        field-id="message"
        field-label="Your message"
        :is-required="true"
        :is-textarea="true"
        v-model="message"
      ></base-textbox>
      <div class="form__buttons">
        <base-button>
          Send
        </base-button>
        <base-button button-style="outline" @click="cancelContact">
          Cancel
        </base-button>
      </div>
    </form>
  </base-card>
</template>

<script>
export default {
  props: {
    coachId: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      firstName: "",
      lastName: "",
      email: "",
      message: "",
    };
  },
  methods: {
    cancelContact($event) {
      $event.preventDefault();
      this.$router.push({
        name: "coach-details",
        params: { coachId: this.coachId },
      });
    },
    preventSubmission($event) {
      $event.preventDefault();
    },
    sendFormData(data) {
      const url = `http://localhost:3000/requests/${this.coachId}`;
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      };
      return fetch(url, options).then((res) => res.json());
    },
    async submitForm($event) {
      $event.preventDefault();
      const data = {
        firstName: this.firstName,
        lastName: this.lastName,
        email: this.email,
        message: this.message,
      };
      try {
        const response = await this.sendFormData(data);
        if (response.valid) {
          alert("Request OK.");
        } else {
          alert(response.message);
        }
      } catch (error) {
        console.log(error);
      }
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
    &--span2 {
      grid-column: span 2;
    }
  }
  &__buttons {
    display: flex;
    justify-content: flex-start;
    gap: 0.5rem;
  }
}
</style>
