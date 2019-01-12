<template>
  <div class="AppMediaObject">
    <div class="AppMediaObject__figure">
      <img
        :src="src"
        class="AppMediaObject__image"
      >
    </div>
    <div class="AppMediaObject__body">
      <p>{{ body }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: `AppMediaObject`,
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

.AppMediaObject {
  display: flex;
  align-items: center;
}

.AppMediaObject__image {
  max-width: 50vw;
}

.AppMediaObject__body {
  margin-left: setting-spacing(m);
}
</style>
