<template>
  <div class="AppTeaserItem">
    <img
      :src="src"
      class="AppTeaserItem__image"
    >
    <div class="AppTeaserItem__body">
      <h3>{{ headline }}</h3>
      <p>{{ body }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: `AppTeaserItem`,
  props: {
    body: {
      required: true,
      type: String,
    },
    headline: {
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
.AppTeaserItem {
  border: 1px solid #e2e2e2;
  border-radius: 0.1875em;
  overflow: hidden;
}

.AppTeaserItem__image {
  width: 100%;
}

.AppTeaserItem__body {
  padding: 1em;
}
</style>
