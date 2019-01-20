<template>
  <!-- eslint-disable max-len -->
  <div class="AboutPage o-vertical-spacing o-vertical-spacing--xxl">
    <LazyHydrate ssr-only>
      <div class="o-container">
        <AppIntro
          headline="About"
          body="https://github.com/maoberlehner/vue-lazy-hydration"
        />
      </div>
    </LazyHydrate>

    <LazyHydrate ssr-only>
      <AppHero src="https://images.unsplash.com/photo-1515074060204-9be35bb919b3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1280&h=400&q=80"/>
    </LazyHydrate>

    <LazyHydrate ssr-only>
      <div class="o-container">
        <ArticleTeaserList/>
      </div>
    </LazyHydrate>
  </div>
  <!-- eslint-enable -->
</template>

<script>
import LazyHydrate from 'vue-lazy-hydration';

export default {
  name: `AboutPage`,
  components: {
    AppHero: () => import(`../components/AppHero.vue`),
    AppIntro: () => import(`../components/AppIntro.vue`),
    ArticleTeaserList: () => import(`../components/ArticleTeaserList.vue`),
    LazyHydrate,
  },
};
</script>
