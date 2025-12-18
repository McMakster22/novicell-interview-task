<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(defineProps<{
  page: number
  totalPages: number
  disabled?: boolean
  maxButtons?: number
}>(), {
  disabled: false,
  maxButtons: 7,
})

const emit = defineEmits<{
  (e: 'update:page', value: number): void
  (e: 'change', value: number): void
}>()

const safeTotal = computed(() => Math.max(1, Math.floor(props.totalPages || 1)))
const safePage = computed(() => {
  const p = Math.floor(props.page || 1)
  return Math.min(Math.max(1, p), safeTotal.value)
})

function go(p: number) {
  const next = Math.min(Math.max(1, Math.floor(p)), safeTotal.value)
  if (next === safePage.value) return
  emit('update:page', next)
  emit('change', next)
}

const canPrev = computed(() => safePage.value > 1 && !props.disabled)
const canNext = computed(() => safePage.value < safeTotal.value && !props.disabled)

const pageButtons = computed(() => {
  const total = safeTotal.value
  const current = safePage.value
  const max = Math.max(5, props.maxButtons)

  // Always show first + last, and a window around current
  const windowSize = max - 2 // excluding first/last
  const half = Math.floor(windowSize / 2)

  let start = Math.max(2, current - half)
  let end = Math.min(total - 1, start + windowSize - 1)

  // readjust start if we're near the end
  start = Math.max(2, end - windowSize + 1)

  const items: Array<number | '...'> = [1]

  if (start > 2) items.push('...')

  for (let p = start; p <= end; p++) items.push(p)

  if (end < total - 1) items.push('...')

  if (total > 1) items.push(total)

  return items
})
</script>

<template>
  <nav class="pagination" aria-label="Pagination" v-if="safeTotal > 1">
    <button
      class="pagination__btn"
      type="button"
      :disabled="!canPrev"
      @click="go(safePage - 1)"
      aria-label="Previous page"
    >
      Prev
    </button>

    <div class="pagination__pages" role="list">
      <template v-for="(item, idx) in pageButtons" :key="`${item}-${idx}`">
        <span v-if="item === '...'" class="pagination__ellipsis" aria-hidden="true">…</span>
        <button
          v-else
          class="pagination__page"
          type="button"
          role="listitem"
          :class="{ 'pagination__page--active': item === safePage }"
          :disabled="disabled"
          @click="go(item)"
          :aria-current="item === safePage ? 'page' : undefined"
        >
          {{ item }}
        </button>
      </template>
    </div>

    <button
      class="pagination__btn"
      type="button"
      :disabled="!canNext"
      @click="go(safePage + 1)"
      aria-label="Next page"
    >
      Next
    </button>
  </nav>
</template>

<style scoped>
.pagination {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  padding: 1rem 0;
}

.pagination__pages {
  display: flex;
  align-items: center;
  gap: 0.35rem;
}

.pagination__btn,
.pagination__page {
  height: 34px;
  border-radius: 8px;
  border: 1px solid #ddd;
  background: #fff;
  padding: 0 0.75rem;
  cursor: pointer;
}

.pagination__page {
  width: 38px;
  padding: 0;
}

.pagination__page--active {
  border-color: #000;
  color: #000;
  font-weight: 600;
}

.pagination__ellipsis {
  padding: 0 0.25rem;
  color: #777;
}

button:disabled {
  opacity: 0.55;
  cursor: not-allowed;
}
</style>