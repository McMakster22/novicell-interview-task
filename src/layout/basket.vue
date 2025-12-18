
<script setup lang="ts">
import AppHeader from '@/components/AppHeader.vue';
</script>

<template>
  <div class="basket-layout">
    <AppHeader />
    <header class="basket-layout__header">
      <div class="basket-layout__brand">My Basket</div>
        <RouterLink :to="{ name: 'products' }" class="basket-layout__back-link"> Back to Products</RouterLink>
    </header>

    <main class="basket-layout__main">
      <slot />
    </main>
  </div>
</template>

<style scoped>
.basket-layout__header {
  position: sticky;
  top: 0;
  background: #fff;
  border-bottom: 1px solid #eee;
  padding: 0.75rem 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.basket-layout__main {
  max-width: 1100px;
  margin: 0 auto;
  padding: 1rem;
}

:deep(.header-nav) {
  display: none;
}
</style>