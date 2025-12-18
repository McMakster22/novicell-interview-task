<script setup lang="ts">
import type { Product } from '@/models'
import { formatPrice } from '@/utils/priceFormat'

const props = defineProps<{
  product: Product
}>()

const emit = defineEmits<{
  (e: 'add', product: Product): void
}>()

function onAdd() {
  emit('add', props.product)
}
</script>

<template>
  <article class="ui-product-card">
    <RouterLink class="ui-product-card__link" :to="`/product/${product.id}`">
      <img class="ui-product-card__image" :src="product.image" :alt="product.title" loading="lazy" />
      <h3 class="ui-product-card__title">{{ product.title }}</h3>
    </RouterLink>

    <div class="ui-product-card__meta">
      <div class="ui-product-card__price">{{ formatPrice(product.price) }}</div>
      <button class="product-tile__add" type="button" @click="onAdd">Add to cart</button>
    </div>
  </article>
</template>

<style scoped>
.ui-product-card {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.ui-product-card__link {
  display: block;
}

.ui-product-card__title {
  margin: 0.5rem 0 0;
}

.ui-product-card__meta {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;
}

.ui-product-card__price {
  font-weight: 600;
}
</style>
