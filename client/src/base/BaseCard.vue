<template>
  <section class="section">
    <slot></slot>
  </section>
</template>

<style lang="scss" scoped>
@use "../style/index.scss" as *;
.section {
  color: $color-grey-dark;
  border-radius: 0.25rem;
  box-shadow: 0 0 0.5rem $color-shadow;
  padding: 1rem;
}
</style>
