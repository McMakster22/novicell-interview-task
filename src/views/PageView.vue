<script setup lang="ts">
import { computed, defineAsyncComponent } from 'vue'
import { useRoute } from 'vue-router'

const props = defineProps<{
  id?: number
}>()

const route = useRoute()

const Pages = {
  homePage: defineAsyncComponent(() => import('@/pages/HomePage.vue')),
  productListPage: defineAsyncComponent(() => import('@/pages/ProductListPage.vue')),
  productPage: defineAsyncComponent(() => import('@/pages/ProductPage.vue')),
  basketPage: defineAsyncComponent(() => import('@/pages/BasketPage.vue')),
  errorPage: defineAsyncComponent(() => import('@/pages/ErrorPage.vue')),
} as const

type PageKey = keyof typeof Pages

const pageKey = computed<PageKey>(() => {
  const key = route.meta?.pageKey
  return (typeof key === 'string' && key in Pages ? (key as PageKey) : 'errorPage')
})

const pageComponent = computed(() => Pages[pageKey.value])

const forwardedProps = computed(() => {
  // Only forward what the resolved page needs
  if (pageKey.value === 'productPage') return { id: props.id }
  return {}
})
</script>

<template>
  <Suspense>
    <template #default>
      <component :is="pageComponent" v-bind="forwardedProps" />
    </template>
    <template #fallback>
      <div class="page-view__loading">Loading…</div>
    </template>
  </Suspense>
</template>

<style scoped>
.page-view__loading { 
    padding: 2rem; text-align: center; 
    color: #666; 
}
</style>