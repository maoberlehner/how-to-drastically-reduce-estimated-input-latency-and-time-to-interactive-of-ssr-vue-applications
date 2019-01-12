<template>
  <div class="AppCounter">
    <p>The current count is: {{ count }}</p>
    <button @click="count -= 1">
      -
    </button>
    <button @click="count += 1">
      +
    </button>
  </div>
</template>

<script>
export default {
  name: `AppCounter`,
  data() {
    return {
      count: 0,
    };
  },
};
</script>

<style lang="scss">
</style>
