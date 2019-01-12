<template>
  <div class="AppGridItem">
    <slot/>
  </div>
</template>

<script>
export default {
  name: `AppGridItem`,
};
</script>

<style lang="scss">
.AppGridItem {
  padding-top: 1em;

  @media (min-width: 42em) {
    padding-left: 1em;
  }
}
</style>
