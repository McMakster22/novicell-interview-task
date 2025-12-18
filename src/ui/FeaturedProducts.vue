<script setup lang="ts">
import type { Product } from '@/models'
import ProductCard from '@/ui/ProductCard.vue'

defineProps<{
  products: Product[]
}>()

const emit = defineEmits<{
  (e: 'add', product: Product): void
}>()
</script>

<template>
  <section class="ui-featured-products" aria-label="Featured products">
    <h6>Featured Products</h6>
    <div class="grid">
      <ProductCard v-for="p in products" :key="p.id" :product="p" @add="emit('add', $event)" />
    </div>
  </section>
</template>

<style scoped>
.ui-featured-products {
  padding: 1rem 0;
}
</style>
