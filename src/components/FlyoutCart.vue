<script setup lang="ts">
import { computed } from 'vue'
import { useCartStore } from '@/stores/cart'
import ProductTile from '@/components/ProductTile.vue'

const cart = useCartStore()

const shouldShow = computed(() => cart.flyoutOpen && !!cart.flyoutProduct)
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

        <ProductTile v-if="cart.flyoutProduct" :product="cart.flyoutProduct" :showImage="false" />

        <div class="flyout-cart__actions">
          <RouterLink
            class="flyout-cart__action flyout-cart__view"
            :to="{ name: 'basket' }"
            @click="cart.closeFlyout()"
          >
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

.flyout-cart__actions {
  display: flex;
  justify-content: flex-end;
  margin-top: 0.75rem;
}

.flyout-cart__action,
.flyout-cart__view {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem 0.75rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  background: white;
  color: inherit;
  text-decoration: none;
  cursor: pointer;
  user-select: none;
  transition: background-color 120ms ease, transform 120ms ease;
}

.flyout-cart__action:hover,
.flyout-cart__view:hover {
  background: rgba(0, 0, 0, 0.04);
}

.flyout-cart__action:active,
.flyout-cart__view:active {
  transform: translateY(1px);
  background: rgba(0, 0, 0, 0.08);
}

.flyout-cart__action:focus-visible,
.flyout-cart__view:focus-visible {
  outline: 2px solid rgba(0, 0, 0, 0.35);
  outline-offset: 2px;
}

.product-tile {
  margin: 0;
}
</style>