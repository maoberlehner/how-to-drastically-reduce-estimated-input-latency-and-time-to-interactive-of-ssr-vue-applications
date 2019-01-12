<template>
  <!-- eslint-disable max-len -->
  <div class="AboutPage o-vertical-spacing o-vertical-spacing--xxl">
    <div class="o-container">
      <AppIntro
        headline="About"
        body="https://github.com/maoberlehner/vue-lazy-hydration"
      />
    </div>

    <AppHero src="https://images.unsplash.com/photo-1515074060204-9be35bb919b3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1280&h=400&q=80"/>

    <div class="o-container">
      <ArticleTeaserList/>
    </div>
  </div>
  <!-- eslint-enable -->
</template>

<script>
import {
  loadOnInteraction,
  loadSsrOnly,
  loadWhenVisible,
} from 'vue-lazy-hydration';

export default {
  name: `AboutPage`,
  components: {
    AppHero: loadSsrOnly(() => import(`../components/AppHero.vue`)),
    AppIntro: loadSsrOnly(() => import(`../components/AppIntro.vue`)),
    ArticleTeaserList: loadSsrOnly(() => import(`../components/ArticleTeaserList.vue`)),
  },
};
</script>
