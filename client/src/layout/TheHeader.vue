<template>
  <header class="header">
    <div class="header__container">
      <div class="header__logo">Coach Finder</div>
      <nav class="header__nav">
        <router-link :to="coachesLink" class="header__link"
          >Coaches</router-link
        >
        <router-link :to="requestsLink" class="header__link"
          >Requests</router-link
        >
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      coachesLink: { name: "coach-list" },
      requestsLink: { name: "request-list" },
    };
  },
};
</script>

<style lang="scss" scoped>
@use "../style/index.scss" as *;
.header {
  color: $color-grey-light;
  background-color: $color-blue-dark;
  padding: 1rem;
  &__container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 60rem;
    margin: 0 auto;
  }
  &__logo {
    font-size: 1.5rem;
    font-weight: 600;
  }
  &__nav {
    display: flex;
    gap: 1rem;
  }
  &__link {
    text-decoration: none;
    position: relative;
    transition: color 0.25s ease;
    &::after {
      content: "";
      position: absolute;
      top: 100%;
      left: 0;
      width: 0;
      height: 0.125rem;
      background-color: currentColor;
      transition: width 0.25s ease;
    }
    &:hover,
    &:focus {
      &::after {
        width: 100%;
      }
    }
    &.router-link-active {
      color: $color-red-light;
    }
  }
}
</style>
