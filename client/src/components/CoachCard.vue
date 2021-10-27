<template>
  <base-card class="coach">
    <h2 class="coach__name">{{ firstName }} {{ lastName }}</h2>
    <div class="coach__rate">€{{ hourlyRate }} per hour</div>
    <div class="coach__fields">
      <base-tag
        v-for="field in fields"
        :key="field"
        :card-text="field"
      ></base-tag>
    </div>
    <div class="coach__buttons">
      <base-button button-type="link" :link-object="contactLink">
        Contact
      </base-button>
      <base-button
        button-type="link"
        button-style="outline"
        :link-object="detailsLink"
      >
        Details
      </base-button>
    </div>
  </base-card>
</template>

<script>
export default {
  props: {
    coachId: {
      type: String,
      required: true,
    },
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    hourlyRate: {
      type: Number,
      required: true,
    },
    fields: {
      type: Array,
      required: true,
    },
  },
  computed: {
    detailsLink() {
      return { name: "coach-details", params: { coachId: this.coachId } };
    },
    contactLink() {
      return { name: "coach-contact", params: { coachId: this.coachId } };
    },
  },
};
</script>

<style lang="scss" scoped>
@use "../style/index.scss" as *;
.coach {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  &__name {
    font-weight: 600;
  }
  &__fields {
    display: flex;
    gap: 0.5em;
    font-size: 0.75rem;
    text-transform: uppercase;
  }
  &__buttons {
    display: flex;
    justify-content: flex-end;
    gap: 0.5rem;
  }
}
</style>
