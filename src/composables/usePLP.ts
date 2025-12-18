import { computed, onMounted, ref, watch, nextTick } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import type { Product } from '@/models'
import { getProducts } from '@/api'

type SortKey = 'price-asc' | 'price-desc' | 'rating'

function isSortKey(v: unknown): v is SortKey {
  return v === 'price-asc' || v === 'price-desc' || v === 'rating'
}

function readString(value: unknown): string | null {
  if (typeof value === 'string') return value
  if (Array.isArray(value) && typeof value[0] === 'string') return value[0]
  return null
}

function readPositiveInt(value: unknown): number | null {
  const s = readString(value)
  if (!s) return null
  const n = Number(s)
  if (!Number.isFinite(n)) return null
  const i = Math.floor(n)
  return i > 0 ? i : null
}

function normalizeQuery(query: Record<string, unknown>): Record<string, string> {
  // Turn route.query (string | string[] | null-ish) into a stable string map for comparisons.
  const out: Record<string, string> = {}
  for (const [k, v] of Object.entries(query)) {
    const s = readString(v)
    if (s != null && s !== '') out[k] = s
  }
  return out
}

function shallowEqualStringMap(a: Record<string, string>, b: Record<string, string>) {
  const ak = Object.keys(a).sort()
  const bk = Object.keys(b).sort()
  if (ak.length !== bk.length) return false
  for (let i = 0; i < ak.length; i++) {
    const k = ak[i]
    if (k !== bk[i]) return false
    if (a[k] !== b[k]) return false
  }
  return true
}

export function usePLP() {
  const router = useRouter()
  const route = useRoute()

  // Data
  const allProducts = ref<Product[]>([])
  const loading = ref(false)
  const error = ref<Error | null>(null)

  // UI state (these drive filters + URL)
  const q = ref('') // bound to the input
  const qDebounced = ref('') // actually used for filtering + URL
  const category = ref<string | null>(null)
  const sort = ref<SortKey>('price-asc')
  const page = ref(1)

  const pageSize = 12
  const debounceMs = 300

  // --- Fetch
  async function refetch() {
    loading.value = true
    error.value = null
    try {
      allProducts.value = await getProducts()
    } catch (e) {
      error.value = e as Error
    } finally {
      loading.value = false
    }
  }

  // --- Debounce search input (so we don’t recompute/filter + update URL on every keystroke)
  let qTimer: number | undefined
  watch(
    q,
    (next) => {
      if (typeof window === 'undefined') {
        qDebounced.value = next
        return
      }
      if (qTimer) window.clearTimeout(qTimer)
      qTimer = window.setTimeout(() => {
        qDebounced.value = next
      }, debounceMs)
    },
    { immediate: true }
  )

  // --- Derived lists
  const categories = computed(() => {
    const set = new Set<string>()
    for (const p of allProducts.value) set.add(p.category)
    return Array.from(set).sort()
  })

  const filteredProducts = computed(() => {
    const query = qDebounced.value.trim().toLowerCase()
    const cat = category.value

    return allProducts.value.filter((p) => {
      if (cat && p.category !== cat) return false
      if (!query) return true

      const haystack = `${p.title ?? ''} ${p.description ?? ''}`.toLowerCase()
      return haystack.includes(query)
    })
  })

  const sortedProducts = computed(() => {
    const list = [...filteredProducts.value]
    if (sort.value === 'price-asc') return list.sort((a, b) => a.price - b.price)
    if (sort.value === 'price-desc') return list.sort((a, b) => b.price - a.price)
    // rating
    return list.sort((a, b) => (b.rating?.rate ?? 0) - (a.rating?.rate ?? 0))
  })

  const totalPages = computed(() => Math.max(1, Math.ceil(sortedProducts.value.length / pageSize)))

  const products = computed(() => {
    const start = (page.value - 1) * pageSize
    return sortedProducts.value.slice(start, start + pageSize)
  })

  // Reset to page 1 when filters change (use debounced q)
  watch([qDebounced, category, sort], () => {
    page.value = 1
  })

  // Clamp page if results shrink
  watch(totalPages, (tp) => {
    if (page.value > tp) page.value = tp
    if (page.value < 1) page.value = 1
  })

  // --- URL query param sync
  // We need a guard so “route -> state” updates don’t immediately trigger “state -> route” writes.
  const syncingFromRoute = ref(false)

  function applyRouteToState() {
    const qParam = readString(route.query.q) ?? ''
    const catParam = readString(route.query.category)
    const sortParam = readString(route.query.sort)
    const pageParam = readPositiveInt(route.query.page)

    // Search: set both input + debounced value (so refresh shows instantly)
    q.value = qParam
    qDebounced.value = qParam
    if (qTimer && typeof window !== 'undefined') window.clearTimeout(qTimer)

    // Category
    category.value = catParam && catParam.length ? catParam : null

    // Sort (validated)
    if (isSortKey(sortParam)) sort.value = sortParam
    else sort.value = 'price-asc'

    // Page
    page.value = pageParam ?? 1
  }

  function buildQueryFromState(): Record<string, string> {
    const out: Record<string, string> = {}

    const qq = qDebounced.value.trim()
    if (qq) out.q = qq

    if (category.value) out.category = category.value

    // keep URL clean: omit default sort + default page
    if (sort.value !== 'price-asc') out.sort = sort.value
    if (page.value !== 1) out.page = String(page.value)

    return out
  }

  // Read URL -> state (initial + back/forward)
  watch(
    () => route.query,
    async () => {
      syncingFromRoute.value = true
      try {
        applyRouteToState()
      } finally {
        // let watchers settle before re-enabling state->route updates
        await nextTick()
        syncingFromRoute.value = false
      }
    },
    { immediate: true }
  )

  // Write state -> URL
  watch([qDebounced, category, sort, page], async () => {
    if (syncingFromRoute.value) return

    const nextQuery = buildQueryFromState()
    const currentQuery = normalizeQuery(route.query as Record<string, unknown>)

    if (shallowEqualStringMap(nextQuery, currentQuery)) return

    // replace avoids polluting browser history while typing
    await router.replace({ query: nextQuery })
  })

  onMounted(refetch)

  return {
    products,
    loading,
    error,

    // bind these from components
    q,
    category,
    categories,
    sort,
    page,

    totalPages,
    refetch,
  }
}