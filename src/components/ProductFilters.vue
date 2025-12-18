<script setup lang="ts">
export type ProductSort = 'price-asc' | 'price-desc' | 'rating'

defineProps<{
  q: string
  category: string | null
  sort: ProductSort
  categories: string[]
  disabled?: boolean
}>()

defineEmits<{
  (e: 'update:q', value: string): void
  (e: 'update:category', value: string | null): void
  (e: 'update:sort', value: ProductSort): void
}>()
</script>

<template>
  <div class="product-filters">
    <label class="product-filters__field">
      <span class="product-filters__label">Search</span>
      <input
        class="product-filters__control"
        type="search"
        :value="q"
        placeholder="Search products…"
        :disabled="disabled ?? false"
        @input="$emit('update:q', ($event.target as HTMLInputElement).value)"
      />
    </label>

    <label class="product-filters__field">
      <span class="product-filters__label">Category</span>
      <select
        class="product-filters__control"
        :value="category ?? ''"
        :disabled="disabled ?? false"
        @change="$emit('update:category', ($event.target as HTMLSelectElement).value || null)"
      >
        <option value="">All</option>
        <option v-for="c in categories" :key="c" :value="c">{{ c }}</option>
      </select>
    </label>

    <label class="product-filters__field">
      <span class="product-filters__label">Sort</span>
      <select
        class="product-filters__control"
        :value="sort"
        :disabled="disabled ?? false"
        @change="$emit('update:sort', ($event.target as HTMLSelectElement).value as ProductSort)"
      >
        <option value="price-asc">Price: low → high</option>
        <option value="price-desc">Price: high → low</option>
        <option value="rating">Rating</option>
      </select>
    </label>
  </div>
</template>

<style scoped>
.product-filters {
  display: flex;
  gap: 1rem;
  align-items: end;
  flex-wrap: wrap;
  padding: 0.75rem;
  border: 1px solid #e6e6e6;
  border-radius: 10px;
  background: #fff;
}
.product-filters__field { display: grid; gap: 0.35rem; min-width: 220px; }
.product-filters__label { font-size: 0.85rem; color: #555; }
.product-filters__control {
  height: 36px;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 0 0.65rem;
}
</style>