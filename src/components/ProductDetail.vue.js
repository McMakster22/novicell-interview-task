import { ref } from 'vue';
import { formatPrice } from '@/utils/priceFormat';
const props = defineProps();
const emit = defineEmits();
const qty = ref(1);
const adding = ref(false);
const message = ref('');
function increment() {
    const stock = props.product?.stock;
    if (typeof stock === 'number') {
        if (qty.value < stock)
            qty.value++;
        return;
    }
    qty.value++;
}
function decrement() {
    if (qty.value > 1)
        qty.value--;
}
async function addToCart() {
    adding.value = true;
    message.value = '';
    // simulate async UX if needed (remove if you don't want it)
    await new Promise((r) => setTimeout(r, 150));
    emit('add-to-cart', { product: props.product, qty: Math.max(1, Math.floor(qty.value || 1)) });
    message.value = 'Added to cart.';
    adding.value = false;
}
const __VLS_ctx = {
    ...{},
    ...{},
    ...{},
    ...{},
    ...{},
};
let ___VLS_components;
let ___VLS_directives;
/** @type {__VLS_StyleScopedClasses['product-detail__grid']} */ ;
/** @type {__VLS_StyleScopedClasses['product-detail__actions']} */ ;
/** @type {__VLS_StyleScopedClasses['product-detail__add']} */ ;
__VLS_asFunctionalElement(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "product-detail" },
});
/** @type {__VLS_StyleScopedClasses['product-detail']} */ ;
__VLS_asFunctionalElement(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "product-detail__grid" },
});
/** @type {__VLS_StyleScopedClasses['product-detail__grid']} */ ;
__VLS_asFunctionalElement(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "product-detail__media" },
});
/** @type {__VLS_StyleScopedClasses['product-detail__media']} */ ;
__VLS_asFunctionalElement(__VLS_intrinsics.img)({
    ...{ class: "product-detail__image" },
    src: (__VLS_ctx.product.image),
    alt: (__VLS_ctx.product.title),
});
/** @type {__VLS_StyleScopedClasses['product-detail__image']} */ ;
__VLS_asFunctionalElement(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "product-detail__details" },
});
/** @type {__VLS_StyleScopedClasses['product-detail__details']} */ ;
__VLS_asFunctionalElement(__VLS_intrinsics.h1, __VLS_intrinsics.h1)({
    ...{ class: "product-detail__title" },
});
/** @type {__VLS_StyleScopedClasses['product-detail__title']} */ ;
(__VLS_ctx.product.title);
__VLS_asFunctionalElement(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "product-detail__meta" },
});
/** @type {__VLS_StyleScopedClasses['product-detail__meta']} */ ;
__VLS_asFunctionalElement(__VLS_intrinsics.span, __VLS_intrinsics.span)({
    ...{ class: "product-detail__price" },
});
/** @type {__VLS_StyleScopedClasses['product-detail__price']} */ ;
(__VLS_ctx.formatPrice(__VLS_ctx.product.price.toFixed(2)));
if ('stock' in __VLS_ctx.product) {
    __VLS_asFunctionalElement(__VLS_intrinsics.span, __VLS_intrinsics.span)({
        ...{ class: "product-detail__stock" },
        ...{ class: ({ 'product-detail__stock--out': __VLS_ctx.product.stock === 0 }) },
    });
    /** @type {__VLS_StyleScopedClasses['product-detail__stock']} */ ;
    /** @type {__VLS_StyleScopedClasses['product-detail__stock--out']} */ ;
    (__VLS_ctx.product.stock > 0 ? __VLS_ctx.product.stock + ' in stock' : 'Out of stock');
}
__VLS_asFunctionalElement(__VLS_intrinsics.p, __VLS_intrinsics.p)({
    ...{ class: "product-detail__description" },
});
/** @type {__VLS_StyleScopedClasses['product-detail__description']} */ ;
(__VLS_ctx.product.description);
__VLS_asFunctionalElement(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "product-detail__actions" },
});
/** @type {__VLS_StyleScopedClasses['product-detail__actions']} */ ;
__VLS_asFunctionalElement(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "product-detail__qty" },
});
/** @type {__VLS_StyleScopedClasses['product-detail__qty']} */ ;
__VLS_asFunctionalElement(__VLS_intrinsics.button, __VLS_intrinsics.button)({
    ...{ onClick: (__VLS_ctx.decrement) },
    ...{ class: "product-detail__qty-btn" },
    disabled: (__VLS_ctx.qty <= 1),
});
/** @type {__VLS_StyleScopedClasses['product-detail__qty-btn']} */ ;
__VLS_asFunctionalElement(__VLS_intrinsics.input)({
    ...{ class: "product-detail__qty-input" },
    type: "number",
    min: "1",
    max: ((__VLS_ctx.product.stock || 9999)),
    'aria-label': "Quantity",
});
(__VLS_ctx.qty);
/** @type {__VLS_StyleScopedClasses['product-detail__qty-input']} */ ;
__VLS_asFunctionalElement(__VLS_intrinsics.button, __VLS_intrinsics.button)({
    ...{ onClick: (__VLS_ctx.increment) },
    ...{ class: "product-detail__qty-btn" },
    disabled: (__VLS_ctx.product.stock ? __VLS_ctx.qty >= __VLS_ctx.product.stock : false),
});
/** @type {__VLS_StyleScopedClasses['product-detail__qty-btn']} */ ;
__VLS_asFunctionalElement(__VLS_intrinsics.button, __VLS_intrinsics.button)({
    ...{ onClick: (__VLS_ctx.addToCart) },
    ...{ class: "product-detail__add product-tile__add" },
    disabled: ((__VLS_ctx.product.stock === 0) || __VLS_ctx.adding),
});
/** @type {__VLS_StyleScopedClasses['product-detail__add']} */ ;
/** @type {__VLS_StyleScopedClasses['product-tile__add']} */ ;
(__VLS_ctx.adding ? 'Adding...' : 'Add to cart');
if (__VLS_ctx.message) {
    __VLS_asFunctionalElement(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "product-detail__message" },
    });
    /** @type {__VLS_StyleScopedClasses['product-detail__message']} */ ;
    (__VLS_ctx.message);
}
// @ts-ignore
[product, product, product, product, product, product, product, product, product, product, product, product, product, formatPrice, decrement, qty, qty, qty, increment, addToCart, adding, adding, message, message,];
const __VLS_export = (await import('vue')).defineComponent({
    __typeEmits: {},
    __typeProps: {},
});
export default {};
//# sourceMappingURL=ProductDetail.vue.js.map