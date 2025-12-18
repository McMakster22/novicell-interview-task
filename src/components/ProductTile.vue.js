// ...existing code...
import { Product } from '@/models';
import { useCartStore } from '@/stores/cart';
import { formatPrice } from '@/utils/priceFormat';
const props = defineProps({
    product: {
        type: Product,
        required: true,
    },
    showImage: {
        type: Boolean,
        default: true,
    },
});
const cartStore = useCartStore();
function addToCart() {
    cartStore.addProduct(props.product, 1);
}
const __VLS_ctx = {
    ...{},
    ...{},
    ...{},
    ...{},
};
let ___VLS_components;
let ___VLS_directives;
/** @type {__VLS_StyleScopedClasses['product-tile__sr-only']} */ ;
__VLS_asFunctionalElement(__VLS_intrinsics.article, __VLS_intrinsics.article)({
    ...{ class: "product-tile" },
});
/** @type {__VLS_StyleScopedClasses['product-tile']} */ ;
let __VLS_0;
/** @ts-ignore @type {typeof ___VLS_components.RouterLink} */
RouterLink;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({
    ...{ class: "product-tile__link" },
    to: ({ name: 'product', params: { id: __VLS_ctx.product.id } }),
    'aria-label': (`View ${__VLS_ctx.product.title}`),
}));
const __VLS_2 = __VLS_1({
    ...{ class: "product-tile__link" },
    to: ({ name: 'product', params: { id: __VLS_ctx.product.id } }),
    'aria-label': (`View ${__VLS_ctx.product.title}`),
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
/** @type {__VLS_StyleScopedClasses['product-tile__link']} */ ;
const { default: __VLS_5 } = __VLS_3.slots;
if (__VLS_ctx.showImage) {
    __VLS_asFunctionalElement(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "product-tile__media" },
    });
    /** @type {__VLS_StyleScopedClasses['product-tile__media']} */ ;
    __VLS_asFunctionalElement(__VLS_intrinsics.img)({
        src: (__VLS_ctx.product.image),
        alt: (__VLS_ctx.product.title),
        ...{ class: "product-tile__image" },
    });
    /** @type {__VLS_StyleScopedClasses['product-tile__image']} */ ;
}
__VLS_asFunctionalElement(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "product-tile__content" },
});
/** @type {__VLS_StyleScopedClasses['product-tile__content']} */ ;
__VLS_asFunctionalElement(__VLS_intrinsics.h6, __VLS_intrinsics.h6)({
    ...{ class: "product-tile__title" },
});
/** @type {__VLS_StyleScopedClasses['product-tile__title']} */ ;
(__VLS_ctx.product.title);
if (__VLS_ctx.product.rating) {
    __VLS_asFunctionalElement(__VLS_intrinsics.p, __VLS_intrinsics.p)({
        ...{ class: "product-tile__rating" },
    });
    /** @type {__VLS_StyleScopedClasses['product-tile__rating']} */ ;
    for (const [n] of __VLS_getVForSourceType((5))) {
        __VLS_asFunctionalElement(__VLS_intrinsics.span, __VLS_intrinsics.span)({
            key: (n),
            ...{ class: "product-tile__star" },
            'aria-hidden': (true),
        });
        /** @type {__VLS_StyleScopedClasses['product-tile__star']} */ ;
        (n <= Math.round(__VLS_ctx.product.rating.rate) ? '★' : '☆');
        // @ts-ignore
        [product, product, product, product, product, product, product, showImage,];
    }
    __VLS_asFunctionalElement(__VLS_intrinsics.span, __VLS_intrinsics.span)({
        ...{ class: "product-tile__sr-only" },
    });
    /** @type {__VLS_StyleScopedClasses['product-tile__sr-only']} */ ;
    (__VLS_ctx.product.rating.rate);
}
// @ts-ignore
[product,];
var __VLS_3;
__VLS_asFunctionalElement(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "product-tile__price-row" },
});
/** @type {__VLS_StyleScopedClasses['product-tile__price-row']} */ ;
__VLS_asFunctionalElement(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "product-tile__price" },
});
/** @type {__VLS_StyleScopedClasses['product-tile__price']} */ ;
__VLS_asFunctionalElement(__VLS_intrinsics.span, __VLS_intrinsics.span)({
    ...{ class: "product-tile__current" },
});
/** @type {__VLS_StyleScopedClasses['product-tile__current']} */ ;
(__VLS_ctx.formatPrice(__VLS_ctx.product.price));
__VLS_asFunctionalElement(__VLS_intrinsics.button, __VLS_intrinsics.button)({
    ...{ onClick: (__VLS_ctx.addToCart) },
    ...{ class: "product-tile__add" },
    'aria-label': (`Add ${__VLS_ctx.product.title} to cart`),
});
/** @type {__VLS_StyleScopedClasses['product-tile__add']} */ ;
// @ts-ignore
[product, product, formatPrice, addToCart,];
const __VLS_export = (await import('vue')).defineComponent({
    props: {
        product: {
            type: Product,
            required: true,
        },
        showImage: {
            type: Boolean,
            default: true,
        },
    },
});
export default {};
//# sourceMappingURL=ProductTile.vue.js.map