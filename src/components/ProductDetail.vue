<script setup lang="ts">
import { computed, ref } from 'vue'
import type { Product } from '@/models'
import { formatPrice } from '@/utils/priceFormat';

const props = defineProps<{
  product: Product
}>()

const emit = defineEmits<{
  (e: 'add-to-cart', payload: { product: Product; qty: number }): void
}>()

const qty = ref(1)
const adding = ref(false)
const message = ref('')

function increment() {
  const stock = (props.product as any)?.stock
  if (typeof stock === 'number') {
    if (qty.value < stock) qty.value++
    return
  }
  qty.value++
}

function decrement() {
  if (qty.value > 1) qty.value--
}

async function addToCart() {
  adding.value = true
  message.value = ''

  // simulate async UX if needed (remove if you don't want it)
  await new Promise((r) => setTimeout(r, 150))

  emit('add-to-cart', { product: props.product, qty: Math.max(1, Math.floor(qty.value || 1)) })

  message.value = 'Added to cart.'
  adding.value = false
}
</script>

<template>
  <div class="product-detail">
    <div class="product-detail__grid">
      <div class="product-detail__media">
        <img class="product-detail__image" :src="product.image" :alt="product.title" />
      </div>

      <div class="product-detail__details">
        <h1 class="product-detail__title">{{ product.title }}</h1>

        <div class="product-detail__meta">
          <span class="product-detail__price">formatPrice(product.price.toFixed(2))</span>
          <span
            v-if="'stock' in product"
            class="product-detail__stock"
            :class="{ 'product-detail__stock--out': product.stock === 0 }"
          >
            {{ product.stock > 0 ? product.stock + ' in stock' : 'Out of stock' }}
          </span>
        </div>

        <p class="product-detail__description">{{ product.description }}</p>

        <div class="product-detail__actions">
          <div class="product-detail__qty">
            <button class="product-detail__qty-btn" @click="decrement" :disabled="qty <= 1">−</button>
            <input
              class="product-detail__qty-input"
              type="number"
              min="1"
              :max="(product.stock || 9999)"
              v-model.number="qty"
              aria-label="Quantity"
            />
            <button
              class="product-detail__qty-btn"
              @click="increment"
              :disabled="product.stock ? qty >= product.stock : false"
            >
              +
            </button>
          </div>

          <button
            class="product-detail__add"
            :disabled="(product.stock === 0) || adding"
            @click="addToCart"
          >
            {{ adding ? 'Adding...' : 'Add to cart' }}
          </button>
        </div>

        <div v-if="message" class="product-detail__message">{{ message }}</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* keep styling here or move to global; omitted for brevity */
/* ...existing code... */
</style>