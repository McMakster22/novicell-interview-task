<template>
  <div class="product-page">
    <button class="back" @click="goBack">← Back</button>

    <div v-if="loading" class="center">Loading...</div>
    <div v-else-if="error" class="center error">{{ error }}</div>

    <ProductDetail
      v-else-if="product"
      :product="product"
      @add-to-cart="handleAddToCart"
    />
  </div>
</template>

<script setup lang="ts">
import { toRef } from 'vue'
import { useRouter } from 'vue-router'
import { useProduct } from '@/composables/usePDP'
import ProductDetail from '@/components/ProductDetail.vue'
import type { Product } from '@/models'
import { useCartStore } from '@/stores/cart'

const props = defineProps<{ id: number }>()

const router = useRouter()
function goBack() {
  router.back()
}

const { product, loading, error } = useProduct(toRef(props, 'id'))

const cartStore = useCartStore()

function handleAddToCart(payload: { product: Product; qty: number }) {
  cartStore.addProduct(payload.product, payload.qty)
}
</script>

<style scoped>
/* ...existing code... */
</style>