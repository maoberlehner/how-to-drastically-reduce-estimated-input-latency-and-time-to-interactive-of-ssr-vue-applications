import nodeSassMagicImporter from 'node-sass-magic-importer';

export default {
  build: {
    loaders: {
      scss: {
        importer: nodeSassMagicImporter(),
      },
    },
  },
  head: {
    title: `How to Drastically Reduce Estimated Input Latency and Time to Interactive of SSR Vue.js Applications`,
    meta: [
      { charset: `utf-8` },
      { name: `viewport`, content: `width=device-width, initial-scale=1` },
    ],
    link: [
      { rel: `icon`, type: `image/x-icon`, href: `/favicon.ico` },
    ],
  },
  loading: { color: `#fff` },
  mode: `universal`,
  modules: [`vue-lazy-hydration/nuxt`],
  render: {
    resourceHints: false,
  },
};
