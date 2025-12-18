import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { createAppRouter } from '@/router';
import { useCartStore } from '@/stores/cart';
import '@/assets/global.scss';
import '@splidejs/splide/dist/css/splide.min.css';
import App from './App.vue';
const app = createApp(App);
const router = createAppRouter();
const pinia = createPinia();
const cart = useCartStore(pinia);
app.use(pinia);
app.use(router);
// TODO: replace with real auth user id
void cart.initCartSession(1, { preferRemote: true });
app.mount('#app');
//# sourceMappingURL=main.js.map