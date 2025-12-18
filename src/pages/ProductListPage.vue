<script setup lang="ts">
import { usePLP } from '@/composables/usePLP'
import ProductTile from '@/components/ProductTile.vue'
import ProductFilters from '@/components/ProductFilters.vue'
import Pagination from '@/components/Pagination.vue'

const {
  products,
  loading,
  error,
  q,
  category,
  categories,
  sort,
  page,
  totalPages,
} = usePLP()
</script>

<template>
  <section class="product-list-page">
    <ProductFilters
      v-model:q="q"
      v-model:category="category"
      v-model:sort="sort"
      :categories="categories"
      :disabled="loading"
    />

    <div v-if="loading" class="product-list-page__state">Loading…</div>
    <div v-else-if="error" class="product-list-page__state error">{{ error.message }}</div>

    <div v-else class="product-list-page__grid grid">
      <ProductTile v-for="p in products" :key="p.id" :product="p" />
    </div>

    <Pagination
      v-if="totalPages > 1"
      v-model:page="page"
      :total-pages="totalPages"
      :disabled="loading"
    />
  </section>
</template>

<style scoped>
/* ...existing code... */
</style>