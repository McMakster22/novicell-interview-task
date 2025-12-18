import { ref, watch, type Ref } from 'vue'
import type { Product } from '@/models'
import { getProduct } from '@/api'

/**
 * PDP composable
 * - Fetches a single product by id via getProduct(id)
 * - Caches results in-memory to avoid refetching on back/forth navigation
 * - Guards against stale responses when id changes quickly
 */

const productCache = new Map<number, Product>()

export function useProduct(id: Ref<number | undefined>) {
  const product = ref<Product | null>(null)
  const loading = ref(false)
  const error = ref<string>('')

  let requestSeq = 0

  async function fetchProduct() {
    const productId = id.value

    if (!productId || !Number.isInteger(productId) || productId <= 0) {
      product.value = null
      loading.value = false
      error.value = 'Invalid product id.'
      return
    }

    const cached = productCache.get(productId)
    if (cached) {
      product.value = cached
      error.value = ''
      loading.value = false
      return
    }

    loading.value = true
    error.value = ''

    const seq = ++requestSeq
    try {
      const data = await getProduct(productId)

      // If id changed while we were fetching, ignore this response
      if (seq !== requestSeq) return

      productCache.set(productId, data as Product)
      product.value = data as Product
    } catch (e: any) {
      if (seq !== requestSeq) return
      product.value = null
      error.value = e?.message ?? 'Failed to load product.'
    } finally {
      if (seq !== requestSeq) return
      loading.value = false
    }
  }

  watch(
    id,
    () => {
      void fetchProduct()
    },
    { immediate: true }
  )

  return {
    product,
    loading,
    error,
    refetch: fetchProduct,
  }
}