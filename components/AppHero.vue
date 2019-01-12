<template>
  <div class="AppHero">
    <img
      :src="src"
      class="AppHero__img"
    >
  </div>
</template>

<script>
export default {
  name: `AppHero`,
  props: {
    src: {
      required: true,
      type: String,
    },
  },
};
</script>

<style lang="scss">
.AppHero {
  max-width: 80em;
  margin-right: auto;
  margin-left: auto;
}

.AppHero__img {
  width: 100%;
}
</style>
