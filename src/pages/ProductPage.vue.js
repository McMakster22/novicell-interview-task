import { toRef } from 'vue';
import { useRouter } from 'vue-router';
import { useProduct } from '@/composables/usePDP';
import ProductDetail from '@/components/ProductDetail.vue';
import { useCartStore } from '@/stores/cart';
const props = defineProps();
const router = useRouter();
function goBack() {
    router.back();
}
const { product, loading, error } = useProduct(toRef(props, 'id'));
const cartStore = useCartStore();
function handleAddToCart(payload) {
    cartStore.addProduct(payload.product, payload.qty);
}
const __VLS_ctx = {
    ...{},
    ...{},
    ...{},
    ...{},
};
let ___VLS_components;
let ___VLS_directives;
__VLS_asFunctionalElement(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "product-page" },
});
/** @type {__VLS_StyleScopedClasses['product-page']} */ ;
__VLS_asFunctionalElement(__VLS_intrinsics.button, __VLS_intrinsics.button)({
    ...{ onClick: (__VLS_ctx.goBack) },
    ...{ class: "back" },
});
/** @type {__VLS_StyleScopedClasses['back']} */ ;
if (__VLS_ctx.loading) {
    __VLS_asFunctionalElement(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "center" },
    });
    /** @type {__VLS_StyleScopedClasses['center']} */ ;
}
else if (__VLS_ctx.error) {
    __VLS_asFunctionalElement(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "center error" },
    });
    /** @type {__VLS_StyleScopedClasses['center']} */ ;
    /** @type {__VLS_StyleScopedClasses['error']} */ ;
    (__VLS_ctx.error);
}
else if (__VLS_ctx.product) {
    const __VLS_0 = ProductDetail;
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({
        ...{ 'onAddToCart': {} },
        product: (__VLS_ctx.product),
    }));
    const __VLS_2 = __VLS_1({
        ...{ 'onAddToCart': {} },
        product: (__VLS_ctx.product),
    }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    let __VLS_5;
    const __VLS_6 = ({ addToCart: {} },
        { onAddToCart: (__VLS_ctx.handleAddToCart) });
    var __VLS_3;
    var __VLS_4;
}
// @ts-ignore
[goBack, loading, error, error, product, product, handleAddToCart,];
const __VLS_export = (await import('vue')).defineComponent({
    __typeProps: {},
});
export default {};
//# sourceMappingURL=ProductPage.vue.js.map