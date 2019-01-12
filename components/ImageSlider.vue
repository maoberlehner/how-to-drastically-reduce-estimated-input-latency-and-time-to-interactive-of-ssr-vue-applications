<template>
  <SliderFrame>
    <div
      slot-scope="{ goToIndex, next, prev }"
      class="ImageSlider"
    >
      <SliderSlides>
        <SliderSlide
          v-for="slide in slides"
          :key="slide.image"
          class="ImageSlider__slide"
        >
          <img
            :src="slide.image"
            :alt="slide.headline"
            class="ImageSlider__image"
          >
          <h2 class="ImageSlider__headline">
            {{ slide.headline }}
          </h2>
        </SliderSlide>
      </SliderSlides>

      <button
        class="ImageSlider__direction ImageSlider__direction--prev"
        @click="prev"
      >
        &laquo; Prev
      </button>
      <button
        class="ImageSlider__direction ImageSlider__direction--next"
        @click="next"
      >
        Next &raquo;
      </button>

      <ol class="ImageSlider__dots">
        <li
          v-for="n in slides.length"
          :key="n"
        >
          <button @click="goToIndex(n - 1)">
            {{ n }}
          </button>
        </li>
      </ol>
    </div>
  </SliderFrame>
</template>

<script>
import SliderFrame from './SliderFrame';
import SliderSlide from './SliderSlide.vue';
import SliderSlides from './SliderSlides.vue';

export default {
  name: `ImageSlider`,
  components: {
    SliderFrame,
    SliderSlide,
    SliderSlides,
  },
  props: {
    slides: {
      default: () => [],
      type: Array,
    },
  },
};
</script>

<style lang="scss">
.ImageSlider {
  position: relative;
}

.ImageSlider__headline,
.ImageSlider__direction {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}

.ImageSlider__direction--prev {
  left: 0.5em;
}

.ImageSlider__direction--next {
  right: 0.5em;
}

.ImageSlider__slide,
.ImageSlider__image {
  width: 100%;
}

.ImageSlider__slide {
  &::before {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(#000, 0.2);
    content: '';
  }
}

.ImageSlider__headline {
  width: 100%;
  text-align: center;
  font-size: 2.5em;
  color: #fff;
  text-shadow: 0 0 0.75em rgba(#000, 0.4);
}

.ImageSlider__image {
  vertical-align: middle;
}

.ImageSlider__dots {
  position: absolute;
  right: 0;
  bottom: 0.5em;
  left: 0;
  display: flex;
  justify-content: center;
}
</style>
