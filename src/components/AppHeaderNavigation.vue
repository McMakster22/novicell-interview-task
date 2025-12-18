<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useCartStore } from '@/stores/cart'

const route = useRoute()
const cart = useCartStore()

const basketCount = computed(() => cart.totalItems)

function isActive(name: string) {
  return route.name === name
}
</script>

<template>
  <nav class="header-nav" aria-label="Primary">
    <RouterLink
      class="header-nav__link"
      :class="{ 'header-nav__link--active': isActive('home') }"
      :to="{ name: 'home' }"
    >
      Home
    </RouterLink>

    <RouterLink
      class="header-nav__link"
      :class="{ 'header-nav__link--active': isActive('products') }"
      :to="{ name: 'products' }"
    >
      Products
    </RouterLink>

    <RouterLink
      class="header-nav__link header-nav__link--basket"
      :class="{ 'header-nav__link--active': isActive('basket') }"
      :to="{ name: 'basket' }"
      aria-label="Basket"
    >
      Basket
      <span v-if="basketCount > 0" class="header-nav__badge" aria-label="Items in basket">
        {{ basketCount }}
      </span>
    </RouterLink>
  </nav>
</template>

<style scoped>
.header-nav {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin: 1rem;
    text-transform: uppercase;
}

.header-nav__link {
    text-decoration: none;
    color: inherit;
    padding: 0.25rem 0.4rem;
    border-radius: 8px;
}

.header-nav__link--active {
    background:#000000;
    color: #fff;
}

.header-nav__link--basket {
    display: inline-flex;
    align-items: center;
    gap: 0.4rem;
}

.header-nav__badge {
    min-width: 22px;
    height: 22px;
    padding: 0 6px;
    border-radius: 999px;
    background: #000000;
    color: #fff;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: 12px;
}
</style>