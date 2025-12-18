import { computed } from 'vue';
import { useCartStore } from '@/stores/cart';
import { formatPrice } from '@/utils/priceFormat';
const cart = useCartStore();
const isEmpty = computed(() => cart.items.length === 0);
const totalPrice = computed(() => formatPrice(cart.totalPrice));
function dec(id, current) {
    cart.updateQuantity(id, current - 1);
}
function inc(id, current) {
    cart.updateQuantity(id, current + 1);
}
const __VLS_ctx = {
    ...{},
    ...{},
};
let ___VLS_components;
let ___VLS_directives;
/** @type {__VLS_StyleScopedClasses['basket__empty-link']} */ ;
__VLS_asFunctionalElement(__VLS_intrinsics.section, __VLS_intrinsics.section)({
    ...{ class: "basket" },
});
/** @type {__VLS_StyleScopedClasses['basket']} */ ;
__VLS_asFunctionalElement(__VLS_intrinsics.header, __VLS_intrinsics.header)({
    ...{ class: "basket__header" },
});
/** @type {__VLS_StyleScopedClasses['basket__header']} */ ;
__VLS_asFunctionalElement(__VLS_intrinsics.h1, __VLS_intrinsics.h1)({
    ...{ class: "basket__title" },
});
/** @type {__VLS_StyleScopedClasses['basket__title']} */ ;
__VLS_asFunctionalElement(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "basket__summary" },
});
/** @type {__VLS_StyleScopedClasses['basket__summary']} */ ;
__VLS_asFunctionalElement(__VLS_intrinsics.span, __VLS_intrinsics.span)({
    ...{ class: "basket__count" },
});
/** @type {__VLS_StyleScopedClasses['basket__count']} */ ;
(__VLS_ctx.cart.totalItems);
__VLS_asFunctionalElement(__VLS_intrinsics.strong, __VLS_intrinsics.strong)({
    ...{ class: "basket__total" },
});
/** @type {__VLS_StyleScopedClasses['basket__total']} */ ;
(__VLS_ctx.totalPrice);
if (__VLS_ctx.isEmpty) {
    __VLS_asFunctionalElement(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "basket__empty" },
    });
    /** @type {__VLS_StyleScopedClasses['basket__empty']} */ ;
    __VLS_asFunctionalElement(__VLS_intrinsics.p, __VLS_intrinsics.p)({
        ...{ class: "basket__empty-text" },
    });
    /** @type {__VLS_StyleScopedClasses['basket__empty-text']} */ ;
    let __VLS_0;
    /** @ts-ignore @type {typeof ___VLS_components.RouterLink} */
    RouterLink;
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({
        ...{ class: "basket__empty-link" },
        to: ({ name: 'products' }),
    }));
    const __VLS_2 = __VLS_1({
        ...{ class: "basket__empty-link" },
        to: ({ name: 'products' }),
    }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    /** @type {__VLS_StyleScopedClasses['basket__empty-link']} */ ;
    const { default: __VLS_5 } = __VLS_3.slots;
    // @ts-ignore
    [cart, totalPrice, isEmpty,];
    var __VLS_3;
}
else {
    __VLS_asFunctionalElement(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "basket__content" },
    });
    /** @type {__VLS_StyleScopedClasses['basket__content']} */ ;
    __VLS_asFunctionalElement(__VLS_intrinsics.ul, __VLS_intrinsics.ul)({
        ...{ class: "basket__list" },
    });
    /** @type {__VLS_StyleScopedClasses['basket__list']} */ ;
    for (const [item] of __VLS_getVForSourceType((__VLS_ctx.cart.items))) {
        __VLS_asFunctionalElement(__VLS_intrinsics.li, __VLS_intrinsics.li)({
            key: (item.id),
            ...{ class: "basket__item" },
        });
        /** @type {__VLS_StyleScopedClasses['basket__item']} */ ;
        if (item.image) {
            __VLS_asFunctionalElement(__VLS_intrinsics.img)({
                ...{ class: "basket__item-image" },
                src: (item.image),
                alt: (item.name),
            });
            /** @type {__VLS_StyleScopedClasses['basket__item-image']} */ ;
        }
        __VLS_asFunctionalElement(__VLS_intrinsics.div, __VLS_intrinsics.div)({
            ...{ class: "basket__item-main" },
        });
        /** @type {__VLS_StyleScopedClasses['basket__item-main']} */ ;
        __VLS_asFunctionalElement(__VLS_intrinsics.div, __VLS_intrinsics.div)({
            ...{ class: "basket__item-top" },
        });
        /** @type {__VLS_StyleScopedClasses['basket__item-top']} */ ;
        __VLS_asFunctionalElement(__VLS_intrinsics.h2, __VLS_intrinsics.h2)({
            ...{ class: "basket__item-name" },
        });
        /** @type {__VLS_StyleScopedClasses['basket__item-name']} */ ;
        (item.name);
        __VLS_asFunctionalElement(__VLS_intrinsics.button, __VLS_intrinsics.button)({
            ...{ onClick: (...[$event]) => {
                    if (!!(__VLS_ctx.isEmpty))
                        return;
                    __VLS_ctx.cart.removeItem(item.id);
                    // @ts-ignore
                    [cart, cart,];
                } },
            ...{ class: "basket__remove" },
            type: "button",
        });
        /** @type {__VLS_StyleScopedClasses['basket__remove']} */ ;
        __VLS_asFunctionalElement(__VLS_intrinsics.div, __VLS_intrinsics.div)({
            ...{ class: "basket__item-bottom" },
        });
        /** @type {__VLS_StyleScopedClasses['basket__item-bottom']} */ ;
        __VLS_asFunctionalElement(__VLS_intrinsics.div, __VLS_intrinsics.div)({
            ...{ class: "basket__qty" },
        });
        /** @type {__VLS_StyleScopedClasses['basket__qty']} */ ;
        __VLS_asFunctionalElement(__VLS_intrinsics.button, __VLS_intrinsics.button)({
            ...{ onClick: (...[$event]) => {
                    if (!!(__VLS_ctx.isEmpty))
                        return;
                    __VLS_ctx.dec(item.id, item.quantity);
                    // @ts-ignore
                    [dec,];
                } },
            ...{ class: "basket__qty-btn" },
            type: "button",
            disabled: (item.quantity <= 1),
        });
        /** @type {__VLS_StyleScopedClasses['basket__qty-btn']} */ ;
        __VLS_asFunctionalElement(__VLS_intrinsics.input)({
            ...{ onChange: (...[$event]) => {
                    if (!!(__VLS_ctx.isEmpty))
                        return;
                    __VLS_ctx.cart.updateQuantity(item.id, item.quantity);
                    // @ts-ignore
                    [cart,];
                } },
            ...{ class: "basket__qty-input" },
            type: "number",
            min: "1",
            'aria-label': "Quantity",
        });
        (item.quantity);
        /** @type {__VLS_StyleScopedClasses['basket__qty-input']} */ ;
        __VLS_asFunctionalElement(__VLS_intrinsics.button, __VLS_intrinsics.button)({
            ...{ onClick: (...[$event]) => {
                    if (!!(__VLS_ctx.isEmpty))
                        return;
                    __VLS_ctx.inc(item.id, item.quantity);
                    // @ts-ignore
                    [inc,];
                } },
            ...{ class: "basket__qty-btn" },
            type: "button",
        });
        /** @type {__VLS_StyleScopedClasses['basket__qty-btn']} */ ;
        __VLS_asFunctionalElement(__VLS_intrinsics.div, __VLS_intrinsics.div)({
            ...{ class: "basket__prices" },
        });
        /** @type {__VLS_StyleScopedClasses['basket__prices']} */ ;
        __VLS_asFunctionalElement(__VLS_intrinsics.strong, __VLS_intrinsics.strong)({
            ...{ class: "basket__line" },
        });
        /** @type {__VLS_StyleScopedClasses['basket__line']} */ ;
        (__VLS_ctx.formatPrice(item.price * item.quantity));
        // @ts-ignore
        [formatPrice,];
    }
    __VLS_asFunctionalElement(__VLS_intrinsics.footer, __VLS_intrinsics.footer)({
        ...{ class: "basket__footer" },
    });
    /** @type {__VLS_StyleScopedClasses['basket__footer']} */ ;
    __VLS_asFunctionalElement(__VLS_intrinsics.button, __VLS_intrinsics.button)({
        ...{ onClick: (...[$event]) => {
                if (!!(__VLS_ctx.isEmpty))
                    return;
                __VLS_ctx.cart.clearCart();
                // @ts-ignore
                [cart,];
            } },
        ...{ class: "basket__clear" },
        type: "button",
    });
    /** @type {__VLS_StyleScopedClasses['basket__clear']} */ ;
    __VLS_asFunctionalElement(__VLS_intrinsics.button, __VLS_intrinsics.button)({
        ...{ class: "basket__checkout" },
        type: "button",
    });
    /** @type {__VLS_StyleScopedClasses['basket__checkout']} */ ;
}
// @ts-ignore
[];
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
//# sourceMappingURL=BasketPage.vue.js.map