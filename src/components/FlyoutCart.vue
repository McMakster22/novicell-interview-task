<script setup lang="ts">
import { computed, onBeforeUnmount, watch } from 'vue'
import { useCartStore } from '@/stores/cart'
import ProductTile from '@/components/ProductTile.vue'

const cart = useCartStore()

const shouldShow = computed(() => cart.flyoutOpen && !!cart.flyoutProduct)

let timer: number | undefined

function restartAutoClose() {
  if (timer) window.clearTimeout(timer)
  timer = window.setTimeout(() => {
    cart.closeFlyout()
  }, 3500)
}

watch(
  () => cart.flyoutNonce,
  () => {
    // only auto-close if it is currently shown
    // if (shouldShow.value) restartAutoClose()
  }
)

onBeforeUnmount(() => {
  if (timer) window.clearTimeout(timer)
})
</script>

<template>
  <Teleport to="body">
    <Transition name="flyout">
      <aside
        v-if="shouldShow"
        class="flyout-cart"
        role="status"
        aria-live="polite"
      >
        <div class="flyout-cart__header">
          <strong class="flyout-cart__title">Added to cart</strong>
          <button
            class="flyout-cart__close"
            type="button"
            @click="cart.closeFlyout()"
            aria-label="Close"
          >
            ✕
          </button>
        </div>

        <div class="flyout-cart__qty">Qty: {{ cart.flyoutQty }}</div>

        <ProductTile :product="cart.flyoutProduct" :showImage="false" />

        <div class="flyout-cart__actions">
          <RouterLink class="flyout-cart__view" to="/cart" @click="cart.closeFlyout()">
            View cart
          </RouterLink>
        </div>
      </aside>
    </Transition>
  </Teleport>
</template>

<style scoped>
.flyout-cart {
  position: fixed;
  top: 1rem;
  right: 1rem;
  width: 300px;
  background: white;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  padding: 1rem;
  z-index: 1000;
}

.flyout-cart__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.5rem;
}

.product-tile {
  margin: 0;
}
</style>