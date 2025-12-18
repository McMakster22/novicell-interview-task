<script setup lang="ts">
import SplideCarousel from '@/components/SplideCarousel.vue'

defineProps<{
  title: string
  subtitle?: string
  fineprint?: string
  images: string[]
}>()
</script>

<template>
  <section class="ui-hero" :aria-label="title">
    <h1 class="ui-hero__title">{{ title }}</h1>
    <p v-if="subtitle" class="ui-hero__subtitle">{{ subtitle }}</p>
    <p v-if="fineprint" class="ui-hero__fineprint">{{ fineprint }}</p>
    <SplideCarousel :images="images" />
  </section>
</template>

<style scoped>
.ui-hero {
  text-align: center;
}

.ui-hero__title {
  margin: 0;
}

.ui-hero__subtitle,
.ui-hero__fineprint {
  margin: 0.5rem 0 0;
}
</style>
