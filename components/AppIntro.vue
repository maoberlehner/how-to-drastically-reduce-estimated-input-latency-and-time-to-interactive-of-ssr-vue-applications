<template>
  <div class="AppIntro">
    <div class="o-container o-container--s">
      <h1>{{ headline }}</h1>
      <p class="AppIntro__body">
        {{ body }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: `AppIntro`,
  props: {
    body: {
      required: true,
      type: String,
    },
    headline: {
      required: true,
      type: String,
    },
  },
};
</script>

<style lang="scss">
@import '../assets/scss/settings/**/*';

.AppIntro {
  text-align: center;
}

.AppIntro__body {
  margin-top: setting-spacing(m);
  font-size: 1.25em;
}
</style>
