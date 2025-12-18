<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import SplideCarousel from '@/components/SplideCarousel.vue';
import { getProducts } from '@/api'
import type { Product } from '@/models'

const heroImages = ref<string[]>([])

onMounted(async () => {
  const products = await getProducts()

  heroImages.value = products
    .map(p => p.image)
    .filter((src): src is string => typeof src === 'string' && src.length > 0)
    .slice(0, 5) // limit to first 10 images
})
</script>

<template>
    <div class="home-page">
        <h1>Welcome to the Home Page</h1>
        <p>This is the main landing page of the e-commerce SPA.</p>
        <SplideCarousel :images="heroImages" />
    </div>
</template>