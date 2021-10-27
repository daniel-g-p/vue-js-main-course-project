<template>
  <section class="page">
    <base-card class="coach">
      <h1>{{ coach.firstName }} {{ coach.lastName }}</h1>
      <div class="coach__fields">
        <base-tag
          v-for="field in coach.fields"
          :key="field"
          :card-text="field"
        ></base-tag>
      </div>
      <p class="coach__rate">€{{ coach.hourlyRate }} per hour</p>
      <p class="coach__date">Member since {{ joinDate }}</p>
      <p>{{ coach.bio }}</p>
      <base-button
        button-type="link"
        button-style="outline"
        :link-object="contactLink"
      >
        Get in touch
      </base-button>
    </base-card>
    <router-view></router-view>
  </section>
</template>

<script>
export default {
  props: {
    coachId: {
      type: String,
      required: true,
    },
  },
  emits: ["not-found"],
  data() {
    return {
      coach: {},
    };
  },
  computed: {
    contactLink() {
      return { name: "coach-contact", params: { coachId: this.coachId } };
    },
    joinDate() {
      const date = new Date(this.coach._created);
      return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
    },
  },
  methods: {
    getCoachData() {
      return fetch(`http://localhost:3000/coaches/${this.coachId}`).then(
        (res) => {
          return res.status === 200 ? res.json() : undefined;
        }
      );
    },
  },
  async mounted() {
    try {
      const { coach } = await this.getCoachData();
      if (!coach) {
        console.error("Not found");
      } else {
        this.coach = coach;
      }
    } catch (error) {
      console.log(error);
    }
  },
};
</script>

<style lang="scss" scoped>
@use "../style/index.scss" as *;
.page {
  display: grid;
  gap: 1rem;
}
.coach {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.75rem;
  &__fields {
    display: flex;
    gap: 0.5rem;
  }
  &__rate {
    font-size: 1.5rem;
  }
  &__date {
    text-transform: uppercase;
  }
}
</style>
