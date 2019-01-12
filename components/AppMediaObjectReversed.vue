<template>
  <div class="AppMediaObjectReversed">
    <div class="AppMediaObjectReversed__body">
      <p>{{ body }}</p>
    </div>
    <div class="AppMediaObjectReversed__figure">
      <img
        :src="src"
        class="AppMediaObjectReversed__image"
      >
    </div>
  </div>
</template>

<script>
export default {
  name: `AppMediaObjectReversed`,
  props: {
    body: {
      required: true,
      type: String,
    },
    src: {
      required: true,
      type: String,
    },
  },
};
</script>

<style lang="scss">
@import '../assets/scss/settings/**/*';

.AppMediaObjectReversed {
  display: flex;
  align-items: center;
}

.AppMediaObjectReversed__image {
  max-width: 50vw;
}

.AppMediaObjectReversed__body {
  margin-right: setting-spacing(m);
}
</style>
