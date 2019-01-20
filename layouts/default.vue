<template>
  <div class="DefaultLayout o-vertical-spacing o-vertical-spacing--xxl">
    <LazyHydrate on-interaction="mouseenter">
      <TheHeader/>
    </LazyHydrate>
    <nuxt/>
    <LazyHydrate ssr-only>
      <TheFooter/>
    </LazyHydrate>
  </div>
</template>

<script>
import LazyHydrate from 'vue-lazy-hydration';

export default {
  name: `DefaultLayout`,
  components: {
    LazyHydrate,
    TheFooter: () => import(`../components/TheFooter.vue`),
    TheHeader: () => import(`../components/TheHeader.vue`),
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
