<template>
  <!-- eslint-disable max-len -->
  <div class="IndexPage o-vertical-spacing o-vertical-spacing--xxl">
    <div class="o-container">
      <AppIntro
        headline="Drastically Reduce Estimated Input Latency"
        body="And Time to Interactive of SSR Vue.js Applications."
      />
    </div>

    <AppHero src="https://images.unsplash.com/photo-1515074060204-9be35bb919b3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1280&h=400&q=80"/>

    <div class="o-container">
      <ArticleTeaserList/>
    </div>

    <div class="o-container">
      <AppMarkdown
        :md="markdownText"
      />
    </div>

    <div class="o-container o-vertical-spacing">
      <AppMarkdown
        md="## Counter (loadOnInteraction)"
      />
      <AppCounter/>
    </div>

    <div class="o-container o-vertical-spacing">
      <AppMarkdown
        md="## Slider (loadWhenVisible)"
      />
      <ImageSlider :slides="imageSlides"/>
    </div>

    <div class="o-container">
      <AppMediaObject
        body="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."
        src="https://images.unsplash.com/photo-1510151490593-aa277bc49f37?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&h=280&q=80"
      />
    </div>

    <div class="o-container">
      <AppMediaObjectReversed
        body="Stet clita kasd gubergren, no sea takimata est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."
        src="https://images.unsplash.com/photo-1509904446473-1b8b71534223?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&h=280&q=80"
      />
    </div>

    <div class="o-container">
      <AppMediaObject
        body="Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."
        src="https://images.unsplash.com/photo-1509904446473-1b8b71534223?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&h=280&q=80"
      />
    </div>

    <div class="o-container">
      <AppMarkdown
        :md="markdownText2"
      />
    </div>

    <div class="o-container">
      <ArticleTeaserList/>
    </div>

    <div class="o-container">
      <LogoTeaserList/>
    </div>

    <div class="o-container">
      <AppMarkdown
        :md="markdownText"
      />
    </div>

    <div class="o-container">
      <ArticleTeaserList/>
    </div>

    <div class="o-container">
      <AppMediaObject
        body="Lorem ipsum sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."
        src="https://images.unsplash.com/photo-1510151490593-aa277bc49f37?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&h=280&q=80"
      />
    </div>

    <div class="o-container">
      <AppMediaObjectReversed
        body="Stet clita kasd gubergren, no sea takimata est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."
        src="https://images.unsplash.com/photo-1509904446473-1b8b71534223?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&h=280&q=80"
      />
    </div>

    <div class="o-container o-vertical-spacing">
      <AppMarkdown
        md="## Slider (loadWhenVisible)"
      />
      <ImageSlider :slides="imageSlides"/>
    </div>

    <div class="o-container">
      <AppMediaObject
        body="Stet clita kasd gubergren, no sea takimata est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."
        src="https://images.unsplash.com/photo-1509904446473-1b8b71534223?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&h=280&q=80"
      />
    </div>

    <div class="o-container">
      <AppMediaObjectReversed
        body="Stet clita kasd gubergren, no sea takimata est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."
        src="https://images.unsplash.com/photo-1509904446473-1b8b71534223?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&h=280&q=80"
      />
    </div>

    <div class="o-container o-vertical-spacing">
      <AppMarkdown
        md="## Slider (loadWhenVisible)"
      />
      <ImageSlider :slides="imageSlides"/>
    </div>

    <div class="o-container">
      <AppMarkdown
        :md="markdownText"
      />
    </div>

    <div class="o-container">
      <ArticleTeaserList/>
    </div>

    <div class="o-container">
      <ArticleTeaserList/>
    </div>

    <div class="o-container">
      <AppMarkdown
        :md="markdownText2"
      />
    </div>

    <div class="o-container">
      <LogoTeaserList/>
    </div>

    <div class="o-container">
      <AppMediaObject
        body="Lorem ipsum sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."
        src="https://images.unsplash.com/photo-1510151490593-aa277bc49f37?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&h=280&q=80"
      />
    </div>

    <div class="o-container o-vertical-spacing">
      <AppMarkdown
        md="## Slider (loadWhenVisible)"
      />
      <ImageSlider :slides="imageSlides"/>
    </div>

    <div class="o-container">
      <AppMediaObject
        body="Stet clita kasd gubergren, no sea takimata est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."
        src="https://images.unsplash.com/photo-1509904446473-1b8b71534223?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&h=280&q=80"
      />
    </div>

    <div class="o-container">
      <AppMediaObjectReversed
        body="Stet clita kasd gubergren, no sea takimata est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."
        src="https://images.unsplash.com/photo-1509904446473-1b8b71534223?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&h=280&q=80"
      />
    </div>

    <div class="o-container o-vertical-spacing">
      <AppMarkdown
        md="## Slider (loadWhenVisible)"
      />
      <ImageSlider :slides="imageSlides"/>
    </div>

    <div class="o-container">
      <AppMarkdown
        :md="markdownText"
      />
    </div>

    <div class="o-container">
      <LogoTeaserList/>
    </div>

    <div class="o-container">
      <ArticleTeaserList/>
    </div>
  </div>
  <!-- eslint-enable -->
</template>

<script>
import AppCounter from '../components/AppCounter.vue';
import AppHero from '../components/AppHero.vue';
import AppIntro from '../components/AppIntro.vue';
import AppMarkdown from '../components/AppMarkdown.vue';
import AppMediaObject from '../components/AppMediaObject.vue';
import AppMediaObjectReversed from '../components/AppMediaObjectReversed.vue';
import ArticleTeaserList from '../components/ArticleTeaserList.vue';
import ImageSlider from '../components/ImageSlider.vue';
import LogoTeaserList from '../components/LogoTeaserList.vue';

export default {
  name: `IndexPage`,
  components: {
    AppCounter,
    AppHero,
    AppIntro,
    AppMarkdown,
    AppMediaObject,
    AppMediaObjectReversed,
    ArticleTeaserList,
    ImageSlider,
    LogoTeaserList,
  },
  created() {
    this.imageSlides = [
      {
        headline: `Lorem Ipsum`,
        image: `https://images.unsplash.com/photo-1491002052546-bf38f186af56?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=36540868671b0e7942ab946c0e44503d&auto=format&fit=crop&w=400&h=300&q=80`,
      },
      {
        headline: `Dolor sit`,
        image: `https://images.unsplash.com/photo-1483119624769-b1a73c256500?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjExMDk0fQ&s=1f605cd0d214c866787dc3c2924ba07f&auto=format&fit=crop&w=400&h=300&q=80`,
      },
      {
        headline: `Lorem Dolor`,
        image: `https://images.unsplash.com/photo-1517362302400-873b4e30f5c0?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=fbd75d3010ba4abe9a4e747b96f57c93&auto=format&fit=crop&w=400&h=300&q=80`,
      },
      {
        headline: `Dolor Lorem sit`,
        image: `https://images.unsplash.com/photo-1516750930166-ed88ab1adb61?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=65c8f6fcafaf68f5fa434b5f076780fd&auto=format&fit=crop&w=400&h=300&q=80`,
      },
    ];
    this.markdownText = `
## Lorem Ipsum

Consetetur sadipscing elitr, **sed diam nonumy** eirmod tempor invidunt
ut labore et *dolore* magna aliquyam erat, sed diam voluptua.

## Dolor sit

Eirmod tempor Consetetur sadipscing elitr, **sed diam nonumy** invidunt
ut labore et *dolore*, sed diam voluptua magna aliquyam erat.

- Eirmod tempor
- Consetetur sadipscing
- Sed diam voluptua magn

### Eirmod

- Eirmod tempor
- Consetetur sadipscing
- Sed diam voluptua magn

Tempor Consetetur sadipscing elitr, **sed diam nonumy** invidunt
ut labore et *dolore*, sed diam voluptua magna aliquyam erat.
    `;
        this.markdownText2 = `
## Ipsum Lorem

Consetetur sadipscing elitr, **sed diam nonumy** eirmod tempor invidunt
ut labore et *dolore* magna aliquyam erat, sed diam voluptua.

### Eirmod

## Dolor sit

Eirmod tempor Consetetur sadipscing elitr, **sed diam nonumy** invidunt
ut labore et *dolore*, sed diam voluptua magna aliquyam erat.

- Eirmod tempor
- Sed diam voluptua magn
- Consetetur sadipscing

- Consetetur sadipscing
- Sed diam voluptua magn
- Eirmod tempor

Tempor Consetetur sadipscing elitr, **sed diam nonumy** invidunt
ut labore et *dolore*, sed diam voluptua magna aliquyam erat.
    `;
  },
};
</script>
