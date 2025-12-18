import { computed } from 'vue';
import { useRoute } from 'vue-router';
import { useCartStore } from '@/stores/cart';
const route = useRoute();
const cart = useCartStore();
const basketCount = computed(() => cart.totalItems);
function isActive(name) {
    return route.name === name;
}
const __VLS_ctx = {
    ...{},
    ...{},
};
let ___VLS_components;
let ___VLS_directives;
__VLS_asFunctionalElement(__VLS_intrinsics.nav, __VLS_intrinsics.nav)({
    ...{ class: "header-nav" },
    'aria-label': "Primary",
});
/** @type {__VLS_StyleScopedClasses['header-nav']} */ ;
let __VLS_0;
/** @ts-ignore @type {typeof ___VLS_components.RouterLink} */
RouterLink;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({
    ...{ class: "header-nav__link" },
    ...{ class: ({ 'header-nav__link--active': __VLS_ctx.isActive('home') }) },
    to: ({ name: 'home' }),
}));
const __VLS_2 = __VLS_1({
    ...{ class: "header-nav__link" },
    ...{ class: ({ 'header-nav__link--active': __VLS_ctx.isActive('home') }) },
    to: ({ name: 'home' }),
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
/** @type {__VLS_StyleScopedClasses['header-nav__link']} */ ;
/** @type {__VLS_StyleScopedClasses['header-nav__link--active']} */ ;
const { default: __VLS_5 } = __VLS_3.slots;
// @ts-ignore
[isActive,];
var __VLS_3;
let __VLS_6;
/** @ts-ignore @type {typeof ___VLS_components.RouterLink} */
RouterLink;
// @ts-ignore
const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({
    ...{ class: "header-nav__link" },
    ...{ class: ({ 'header-nav__link--active': __VLS_ctx.isActive('products') }) },
    to: ({ name: 'products' }),
}));
const __VLS_8 = __VLS_7({
    ...{ class: "header-nav__link" },
    ...{ class: ({ 'header-nav__link--active': __VLS_ctx.isActive('products') }) },
    to: ({ name: 'products' }),
}, ...__VLS_functionalComponentArgsRest(__VLS_7));
/** @type {__VLS_StyleScopedClasses['header-nav__link']} */ ;
/** @type {__VLS_StyleScopedClasses['header-nav__link--active']} */ ;
const { default: __VLS_11 } = __VLS_9.slots;
// @ts-ignore
[isActive,];
var __VLS_9;
let __VLS_12;
/** @ts-ignore @type {typeof ___VLS_components.RouterLink} */
RouterLink;
// @ts-ignore
const __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, new __VLS_12({
    ...{ class: "header-nav__link header-nav__link--basket" },
    ...{ class: ({ 'header-nav__link--active': __VLS_ctx.isActive('basket') }) },
    to: ({ name: 'basket' }),
    'aria-label': "Basket",
}));
const __VLS_14 = __VLS_13({
    ...{ class: "header-nav__link header-nav__link--basket" },
    ...{ class: ({ 'header-nav__link--active': __VLS_ctx.isActive('basket') }) },
    to: ({ name: 'basket' }),
    'aria-label': "Basket",
}, ...__VLS_functionalComponentArgsRest(__VLS_13));
/** @type {__VLS_StyleScopedClasses['header-nav__link']} */ ;
/** @type {__VLS_StyleScopedClasses['header-nav__link--basket']} */ ;
/** @type {__VLS_StyleScopedClasses['header-nav__link--active']} */ ;
const { default: __VLS_17 } = __VLS_15.slots;
if (__VLS_ctx.basketCount > 0) {
    __VLS_asFunctionalElement(__VLS_intrinsics.span, __VLS_intrinsics.span)({
        ...{ class: "header-nav__badge" },
        'aria-label': "Items in basket",
    });
    /** @type {__VLS_StyleScopedClasses['header-nav__badge']} */ ;
    (__VLS_ctx.basketCount);
}
// @ts-ignore
[isActive, basketCount, basketCount,];
var __VLS_15;
// @ts-ignore
[];
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
//# sourceMappingURL=AppHeaderNavigation.vue.js.map