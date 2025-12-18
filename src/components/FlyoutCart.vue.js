import { computed, onBeforeUnmount, watch } from 'vue';
import { useCartStore } from '@/stores/cart';
import ProductTile from '@/components/ProductTile.vue';
const cart = useCartStore();
const shouldShow = computed(() => cart.flyoutOpen && !!cart.flyoutProduct);
let timer;
function restartAutoClose() {
    if (timer)
        window.clearTimeout(timer);
    timer = window.setTimeout(() => {
        cart.closeFlyout();
    }, 3500);
}
watch(() => cart.flyoutNonce, () => {
    // only auto-close if it is currently shown
    // if (shouldShow.value) restartAutoClose()
});
onBeforeUnmount(() => {
    if (timer)
        window.clearTimeout(timer);
});
const __VLS_ctx = {
    ...{},
    ...{},
};
let ___VLS_components;
let ___VLS_directives;
/** @type {__VLS_StyleScopedClasses['flyout-cart__action']} */ ;
/** @type {__VLS_StyleScopedClasses['flyout-cart__view']} */ ;
/** @type {__VLS_StyleScopedClasses['flyout-cart__action']} */ ;
/** @type {__VLS_StyleScopedClasses['flyout-cart__view']} */ ;
/** @type {__VLS_StyleScopedClasses['flyout-cart__action']} */ ;
/** @type {__VLS_StyleScopedClasses['flyout-cart__view']} */ ;
let __VLS_0;
/** @ts-ignore @type {typeof ___VLS_components.Teleport} */
Teleport;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({
    to: "body",
}));
const __VLS_2 = __VLS_1({
    to: "body",
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
const { default: __VLS_5 } = __VLS_3.slots;
let __VLS_6;
/** @ts-ignore @type {typeof ___VLS_components.Transition} */
Transition;
// @ts-ignore
const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({
    name: "flyout",
}));
const __VLS_8 = __VLS_7({
    name: "flyout",
}, ...__VLS_functionalComponentArgsRest(__VLS_7));
const { default: __VLS_11 } = __VLS_9.slots;
if (__VLS_ctx.shouldShow) {
    __VLS_asFunctionalElement(__VLS_intrinsics.aside, __VLS_intrinsics.aside)({
        ...{ class: "flyout-cart" },
        role: "status",
        'aria-live': "polite",
    });
    /** @type {__VLS_StyleScopedClasses['flyout-cart']} */ ;
    __VLS_asFunctionalElement(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "flyout-cart__header" },
    });
    /** @type {__VLS_StyleScopedClasses['flyout-cart__header']} */ ;
    __VLS_asFunctionalElement(__VLS_intrinsics.strong, __VLS_intrinsics.strong)({
        ...{ class: "flyout-cart__title" },
    });
    /** @type {__VLS_StyleScopedClasses['flyout-cart__title']} */ ;
    __VLS_asFunctionalElement(__VLS_intrinsics.button, __VLS_intrinsics.button)({
        ...{ onClick: (...[$event]) => {
                if (!(__VLS_ctx.shouldShow))
                    return;
                __VLS_ctx.cart.closeFlyout();
                // @ts-ignore
                [shouldShow, cart,];
            } },
        ...{ class: "flyout-cart__close" },
        type: "button",
        'aria-label': "Close",
    });
    /** @type {__VLS_StyleScopedClasses['flyout-cart__close']} */ ;
    __VLS_asFunctionalElement(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "flyout-cart__qty" },
    });
    /** @type {__VLS_StyleScopedClasses['flyout-cart__qty']} */ ;
    (__VLS_ctx.cart.flyoutQty);
    const __VLS_12 = ProductTile;
    // @ts-ignore
    const __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, new __VLS_12({
        product: (__VLS_ctx.cart.flyoutProduct),
        showImage: (false),
    }));
    const __VLS_14 = __VLS_13({
        product: (__VLS_ctx.cart.flyoutProduct),
        showImage: (false),
    }, ...__VLS_functionalComponentArgsRest(__VLS_13));
    __VLS_asFunctionalElement(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "flyout-cart__actions" },
    });
    /** @type {__VLS_StyleScopedClasses['flyout-cart__actions']} */ ;
    let __VLS_17;
    /** @ts-ignore @type {typeof ___VLS_components.RouterLink} */
    RouterLink;
    // @ts-ignore
    const __VLS_18 = __VLS_asFunctionalComponent(__VLS_17, new __VLS_17({
        ...{ 'onClick': {} },
        ...{ class: "flyout-cart__action flyout-cart__view" },
        to: ({ name: 'basket' }),
    }));
    const __VLS_19 = __VLS_18({
        ...{ 'onClick': {} },
        ...{ class: "flyout-cart__action flyout-cart__view" },
        to: ({ name: 'basket' }),
    }, ...__VLS_functionalComponentArgsRest(__VLS_18));
    let __VLS_22;
    const __VLS_23 = ({ click: {} },
        { onClick: (...[$event]) => {
                if (!(__VLS_ctx.shouldShow))
                    return;
                __VLS_ctx.cart.closeFlyout();
                // @ts-ignore
                [cart, cart, cart,];
            } });
    /** @type {__VLS_StyleScopedClasses['flyout-cart__action']} */ ;
    /** @type {__VLS_StyleScopedClasses['flyout-cart__view']} */ ;
    const { default: __VLS_24 } = __VLS_20.slots;
    // @ts-ignore
    [];
    var __VLS_20;
    var __VLS_21;
}
// @ts-ignore
[];
var __VLS_9;
// @ts-ignore
[];
var __VLS_3;
// @ts-ignore
[];
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
//# sourceMappingURL=FlyoutCart.vue.js.map