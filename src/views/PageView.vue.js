import { computed, defineAsyncComponent } from 'vue';
import { useRoute } from 'vue-router';
const props = defineProps();
const route = useRoute();
const Pages = {
    homePage: defineAsyncComponent(() => import('@/pages/HomePage.vue')),
    productListPage: defineAsyncComponent(() => import('@/pages/ProductListPage.vue')),
    productPage: defineAsyncComponent(() => import('@/pages/ProductPage.vue')),
    basketPage: defineAsyncComponent(() => import('@/pages/BasketPage.vue')),
    errorPage: defineAsyncComponent(() => import('@/pages/ErrorPage.vue')),
};
const pageKey = computed(() => {
    const key = route.meta?.pageKey;
    return (typeof key === 'string' && key in Pages ? key : 'errorPage');
});
const pageComponent = computed(() => Pages[pageKey.value]);
const forwardedProps = computed(() => {
    // Only forward what the resolved page needs
    if (pageKey.value === 'productPage')
        return { id: props.id };
    return {};
});
const __VLS_ctx = {
    ...{},
    ...{},
    ...{},
    ...{},
};
let ___VLS_components;
let ___VLS_directives;
let __VLS_0;
/** @ts-ignore @type {typeof ___VLS_components.Suspense} */
Suspense;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({}));
const __VLS_2 = __VLS_1({}, ...__VLS_functionalComponentArgsRest(__VLS_1));
const { default: __VLS_5 } = __VLS_3.slots;
{
    const { default: __VLS_6 } = __VLS_3.slots;
    const __VLS_7 = (__VLS_ctx.pageComponent);
    // @ts-ignore
    const __VLS_8 = __VLS_asFunctionalComponent(__VLS_7, new __VLS_7({
        ...(__VLS_ctx.forwardedProps),
    }));
    const __VLS_9 = __VLS_8({
        ...(__VLS_ctx.forwardedProps),
    }, ...__VLS_functionalComponentArgsRest(__VLS_8));
    // @ts-ignore
    [pageComponent, forwardedProps,];
}
{
    const { fallback: __VLS_12 } = __VLS_3.slots;
    __VLS_asFunctionalElement(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "page-view__loading" },
    });
    /** @type {__VLS_StyleScopedClasses['page-view__loading']} */ ;
    // @ts-ignore
    [];
}
// @ts-ignore
[];
var __VLS_3;
// @ts-ignore
[];
const __VLS_export = (await import('vue')).defineComponent({
    __typeProps: {},
});
export default {};
//# sourceMappingURL=PageView.vue.js.map