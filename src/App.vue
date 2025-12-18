<script setup lang="ts">
import { computed } from 'vue';
import { useRoute, RouterView } from 'vue-router';
import { defineAsyncComponent } from 'vue';

type LayoutKey = 'default' | 'basket' | 'error';
const route = useRoute();

const currentLayoutRef = computed<LayoutKey>(() => {
  const key = route.meta?.layoutKey
  return (key === 'basket' || key === 'error') ? key : 'default'
})

const Layouts = {
  default: defineAsyncComponent(() => import('@/layout/default.vue')),
  basket: defineAsyncComponent(() => import('@/layout/basket.vue')),
  error: defineAsyncComponent(() => import('@/layout/error.vue')),
};

const pageLayout = computed(() => Layouts[currentLayoutRef.value] || null);

</script>

<template>
  <div v-if="pageLayout" :key="currentLayoutRef">
    <component :is="pageLayout">
      <RouterView />
    </component>
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
