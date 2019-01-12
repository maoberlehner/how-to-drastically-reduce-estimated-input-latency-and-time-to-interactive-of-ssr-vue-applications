<template>
  <div class="TheHeader">
    <div class="o-container">
      <div class="TheHeader__inner">
        <AppLogo/>
        <TheNav/>
      </div>
    </div>
  </div>
</template>

<script>
import {
  loadSsrOnly,
} from 'vue-lazy-hydration';

import TheNav from './TheNav.vue';

export default {
  name: `TheHeader`,
  components: {
    AppLogo: loadSsrOnly(() => import(`./AppLogo.vue`)),
    TheNav,
  },
};
</script>

<style lang="scss">
.TheHeader {
  padding-top: 1em;
  padding-bottom: 1em;
  border-bottom: 1px solid #e2e2e2;
}

.TheHeader__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
