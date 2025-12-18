<script setup lang="ts">
import { Splide, SplideSlide } from '@splidejs/vue-splide'

const props = defineProps({
  images: {
    type: Array as PropType<string[]>,
    default: () => [],
  },
})

const options = {
  type: 'loop',
  perPage: 3,
  autoplay: true,
  interval: 4000,
  pauseOnHover: true,
  arrows: true,
  pagination: true,
} as const
</script>

<template>
  <Splide :options="options" aria-label="Hero slider">
    <SplideSlide v-for="(src, i) in props.images" :key="`${src}-${i}`">
      <div class="splide-carousel__slide">
        <img class="splide-carousel__img" :src="src" :alt="`Featured product ${i + 1}`" />
      </div>
    </SplideSlide>
  </Splide>
</template>