<script setup lang="ts">
import type { PropType } from 'vue'
import { Splide, SplideSlide } from '@splidejs/vue-splide'

const props = defineProps({
  images: {
    type: Array as PropType<string[]>,
    default: () => [],
  },
})

const options = {
  type: 'loop',
  perPage: 5,
  autoplay: true,
  interval: 4000,
  pauseOnHover: true,
  arrows: true,
  pagination: true,
  padding: '1rem',
  gap: '2rem',
  breakpoints: {
    1280: { perPage: 4 },
    1024: { perPage: 3 },
    768: { perPage: 2 },
    640: { perPage: 1 },
  },
} as const
</script>

<template>
    <div class="splide-carousel">
        <Splide :options="options" aria-label="Hero slider">
            <SplideSlide v-for="(src, i) in props.images" :key="`${src}-${i}`">
                <div class="splide-carousel__slide">
                    <img class="splide-carousel__img" :src="src" :alt="`Featured product ${i + 1}`" />
                </div>
            </SplideSlide>
        </Splide>
    </div>
</template>

<style scoped>
.splide-carousel {
  background: #000000;   /* behind the whole slider */
  border-radius: 12px;
  padding: 12px;         /* creates visible background around slides */
}

.splide-carousel__slide {
  border-radius: 10px;
  padding: 0.5rem;
  border: solid 1px white;
}

.splide-carousel__img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}
</style>