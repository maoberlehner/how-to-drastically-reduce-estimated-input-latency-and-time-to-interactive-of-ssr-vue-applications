<template>
  <div class="DefaultLayout o-vertical-spacing o-vertical-spacing--xxl">
    <TheHeader/>
    <nuxt/>
    <TheFooter/>
  </div>
</template>

<script>
import TheFooter from '../components/TheFooter.vue';
import TheHeader from '../components/TheHeader.vue';

export default {
  name: `DefaultLayout`,
  components: {
    TheFooter,
    TheHeader,
  },
};
</script>

<style lang="scss">
// Settings
@import '../assets/scss/settings/**/*';

// Generic
@import '../assets/scss/generic/**/*';

// Objects
@import '{
  .o-container,
  .o-container--s,
} from ~@avalanche/object-container';
@import '{
  .o-vertical-spacing,
  .o-vertical-spacing--xxl,
} from ~@avalanche/object-vertical-spacing';
@import '../assets/scss/objects/**/*';
</style>
