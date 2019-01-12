<template>
  <AppGrid class="ArticleTeaserList">
    <AppGridItem>
      <AppTeaserItem
        body="Lorem ipsum dolor sit amet, consetetur sadipscing elitr lorem ip"
        headline="Article 1"
        src="https://images.unsplash.com/photo-1510151490593-aa277bc49f37?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&h=260&q=80"
      />
    </AppGridItem>
    <AppGridItem>
      <AppTeaserItem
        body="Lorem ipsum dolor sit amet, consetetur sadipscing elitr lorem ip"
        headline="Article 2"
        src="https://images.unsplash.com/photo-1509904446473-1b8b71534223?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&h=260&q=80"
      />
    </AppGridItem>
    <AppGridItem>
      <AppTeaserItem
        body="Lorem ipsum dolor sit amet, consetetur sadipscing elitr lorem ip"
        headline="Article 3"
        src="https://images.unsplash.com/photo-1515074060204-9be35bb919b3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&h=260&q=80"
      />
    </AppGridItem>
  </AppGrid>
</template>

<script>
import AppGrid from './AppGrid.vue';
import AppGridItem from './AppGridItem.vue';
import AppTeaserItem from './AppTeaserItem.vue';

export default {
  name: `ArticleTeaserList`,
  components: {
    AppGrid,
    AppGridItem,
    AppTeaserItem,
  },
};
</script>

<style lang="scss">
.ArticleTeaserList {
  padding-top: 1em;

  @media (min-width: 42em) {
    padding-left: 1em;
  }
}
</style>
