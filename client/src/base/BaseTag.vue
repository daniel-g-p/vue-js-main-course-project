<template>
  <div class="tag">{{ cardText }}</div>
</template>

<script>
export default {
  props: {
    cardText: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
@use "../style/index.scss" as *;
.tag {
  background-color: $color-red-light;
  color: $color-grey-light;
  border-radius: 2em;
  padding: 0.5em 0.75em;
}
</style>
