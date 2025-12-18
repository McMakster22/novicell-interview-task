// ...existing code...
<script setup lang="ts">
import { Product } from '@/models'
import { useCartStore } from '@/stores/cart'
import { formatPrice } from '@/utils/priceFormat'

const props = defineProps({
  product: {
    type: Product,
    required: true,
  },
  showImage: {
    type: Boolean,
    default: true,
  },
})

const cartStore = useCartStore()

function addToCart() {
  cartStore.addProduct(props.product, 1)
}

</script>

<template>
  <article class="product-tile">
    <RouterLink
      class="product-tile__link"
      :to="{ name: 'product', params: { id: product.id } }"
      :aria-label="`View ${product.title}`"
    >
      <div v-if="showImage" class="product-tile__media">
        <img :src="product.image" :alt="product.title" class="product-tile__image" />
      </div>

      <div class="product-tile__content">
        <h6 class="product-tile__title">{{ product.title }}</h6>
        <p class="product-tile__rating" v-if="product.rating">
          <span v-for="n in 5" :key="n" class="product-tile__star" :aria-hidden="true">
            {{ n <= Math.round(product.rating.rate) ? '★' : '☆' }}
          </span>
          <span class="product-tile__sr-only">Rating {{ product.rating.rate }} of 5</span>
        </p>
      </div>
    </RouterLink>

    <div class="product-tile__price-row">
      <div class="product-tile__price">
        <span class="product-tile__current">{{ formatPrice(product.price) }}</span>
      </div>
      <button class="product-tile__add" @click.stop="addToCart" :aria-label="`Add ${product.title} to cart`">
        Add
      </button>
    </div>
  </article>
</template>

<style scoped>
.product-tile { 
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    overflow: hidden;
    margin: 0.5rem;

    @media (min-width: 1280px) 
    {
      margin: 2rem 3rem;
    }
}

.product-tile__title { 
     height: 1.5rem;
  }

.product-tile__link { 
    display: block; 
    color: inherit; 
    text-decoration: none; 
}

.product-tile__content{
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.product-tile__rating {
  margin: 0;
}

.product-tile__sr-only {
  display: none;
}

@media (min-width: 1024px) {
  .product-tile__sr-only {
    display: inline;
  }
}

.product-tile__price-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.5rem 0;
    background: #f9f9f9;
}
</style>