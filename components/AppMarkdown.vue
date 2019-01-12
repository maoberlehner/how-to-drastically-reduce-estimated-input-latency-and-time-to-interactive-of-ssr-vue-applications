<template>
  <div
    class="AppMarkdown"
    v-html="html"
  />
</template>

<script>
import marked from 'marked';

export default {
  name: `AppMarkdown`,
  props: {
    md: {
      default: ``,
      required: true,
      type: String,
    },
  },
  computed: {
    html() {
      return marked(this.md);
    },
  },
};
</script>

<style lang="scss">
.AppMarkdown {
  > * + * {
    margin-top: 1em;
  }

  strong {
    font-weight: 700;
  }

  em {
    font-style: italic;
  }

  ul {
    padding-left: 1.5em;
    list-style-type: disc;
  }
}
</style>
