<template>
  <div class="AppGrid">
    <slot/>
  </div>
</template>

<script>
export default {
  name: `AppGrid`,
};
</script>

<style lang="scss">
.AppGrid {
  margin-top: -1em;

  @media (min-width: 42em) {
    display: flex;
    margin-left: -1em;
  }
}
</style>
