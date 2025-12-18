<script setup lang="ts">
import { computed } from 'vue'
import { useCartStore } from '@/stores/cart'
import { formatPrice } from '@/utils/priceFormat'

const cart = useCartStore()

const isEmpty = computed(() => cart.items.length === 0)
const totalPrice = computed(() => formatPrice(cart.totalPrice))

function dec(id: string, current: number) {
  cart.updateQuantity(id, current - 1)
}

function inc(id: string, current: number) {
  cart.updateQuantity(id, current + 1)
}

</script>

<template>
  <section class="basket">
    <header class="basket__header">
      <h1 class="basket__title">Basket</h1>
      <div class="basket__summary">
        <span class="basket__count">{{ cart.totalItems }} items</span>
        <strong class="basket__total">{{ totalPrice }}</strong>
      </div>
    </header>

    <div v-if="isEmpty" class="basket__empty">
      <p class="basket__empty-text">Your basket is empty.</p>
      <RouterLink class="basket__empty-link" :to="{ name: 'products' }">Please add some products to your basket.</RouterLink>
    </div>

    <div v-else class="basket__content">
      <ul class="basket__list">
        <li v-for="item in cart.items" :key="item.id" class="basket__item">
          <img v-if="item.image" class="basket__item-image" :src="item.image" :alt="item.name" />

          <div class="basket__item-main">
            <div class="basket__item-top">
              <h2 class="basket__item-name">{{ item.name }}</h2>
              <button class="basket__remove" type="button" @click="cart.removeItem(item.id)">Remove</button>
            </div>

            <div class="basket__item-bottom">
              <div class="basket__qty">
                <button class="basket__qty-btn" type="button" @click="dec(item.id, item.quantity)" :disabled="item.quantity <= 1">
                  −
                </button>
                <input
                  class="basket__qty-input"
                  type="number"
                  min="1"
                  v-model.number="item.quantity"
                  @change="cart.updateQuantity(item.id, item.quantity)"
                  aria-label="Quantity"
                />
                <button class="basket__qty-btn" type="button" @click="inc(item.id, item.quantity)">+</button>
              </div>

              <div class="basket__prices">
                <strong class="basket__line">{{ formatPrice(item.price * item.quantity) }}</strong>
              </div>
            </div>
          </div>
        </li>
      </ul>

      <footer class="basket__footer">
        <button class="basket__clear" type="button" @click="cart.clearCart()">Clear basket</button>
        <button class="basket__checkout" type="button">Checkout</button>
      </footer>
    </div>
  </section>
</template>

<style scoped>
.basket { 
    max-width: 960px; 
    margin: 0 auto; 
    padding: 1rem; 
}

.basket__header { 
    display: flex; 
    align-items: baseline; 
    justify-content: space-between; 
    gap: 1rem; 
}

.basket__title { 
    margin: 0; 
    font-size: 1.5rem; 
}
.basket__summary { 
    display: flex; 
    align-items: 
    baseline; 
    gap: 0.75rem; 
}

.basket__count { 
    color: #666; 
}

.basket__total { 
    font-size: 1.25rem; 
}

.basket__empty { 
    padding: 2rem 0; 
}

.basket__empty-text { 
    margin: 0 0 0.75rem; 
    color: #666; 
}

.basket__empty-link { 
    text-decoration: none; 
}

.basket__list {
    list-style: none;
    padding: 0;
    margin: 1rem 0;
    display: grid;
    gap: 0.75rem;
}

.basket__item {
    display: grid;
    grid-template-columns: 80px 1fr;
    gap: 0.75rem;
    border: 1px solid #e6e6e6;
    border-radius: 10px;
    padding: 0.75rem;
    background: #fff;
}

.basket__item-image {
    width: 80px;
    height: 80px;
    object-fit: contain;
    background: #fafafa;
    border-radius: 8px;
}

.basket__item-main {
    display: grid;
    gap: 0.5rem;
}

.basket__item-top {
    display: flex;
    align-items: start;
    justify-content: space-between;
    gap: 0.75rem;
}

.basket__item-name {
    margin: 0;
    font-size: 1rem;
}

.basket__remove {
    background: transparent;
    border: 0;
    color: #b00020;
    cursor: pointer;
    padding: 0;
}

.basket__item-bottom {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
}

.basket__qty {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
}

.basket__qty-btn {
    width: 32px;
    height: 32px;
    border: 1px solid #ddd;
    background: #fff;
    border-radius: 8px;
    cursor: pointer;
}

.basket__qty-input {
    width: 64px;
    height: 32px;
    border: 1px solid #ddd;
    border-radius: 8px;
    text-align: center;
}

.basket__prices {
    display: grid;
    justify-items: end;
}

.basket__unit {
    color: #666;
    font-size: 0.9rem;
}

.basket__line {
    font-size: 1rem;
}

.basket__footer {
    display: flex;
    justify-content: space-between;
    gap: 0.75rem;
    margin-top: 1rem;
}

.basket__clear {
    background: #fff;
    border: 1px solid #ddd;
    padding: 0.6rem 0.9rem;
    border-radius: 10px;
    cursor: pointer;
}

.basket__checkout {
    background: #000;
    color: #fff;
    border: 0;
    padding: 0.6rem 0.9rem;
    border-radius: 10px;
    cursor: pointer;
}

.basket__empty-link:hover {
    color: #000;
    text-decoration: underline;
}
</style>