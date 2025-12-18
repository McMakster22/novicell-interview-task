import { usePLP } from '@/composables/usePLP';
import ProductTile from '@/components/ProductTile.vue';
import ProductFilters from '@/components/ProductFilters.vue';
import Pagination from '@/components/Pagination.vue';
const { products, loading, error, q, category, categories, sort, page, totalPages, } = usePLP();
const __VLS_ctx = {
    ...{},
    ...{},
};
let ___VLS_components;
let ___VLS_directives;
__VLS_asFunctionalElement(__VLS_intrinsics.section, __VLS_intrinsics.section)({
    ...{ class: "product-list-page" },
});
/** @type {__VLS_StyleScopedClasses['product-list-page']} */ ;
const __VLS_0 = ProductFilters;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({
    q: (__VLS_ctx.q),
    category: (__VLS_ctx.category),
    sort: (__VLS_ctx.sort),
    categories: (__VLS_ctx.categories),
    disabled: (__VLS_ctx.loading),
}));
const __VLS_2 = __VLS_1({
    q: (__VLS_ctx.q),
    category: (__VLS_ctx.category),
    sort: (__VLS_ctx.sort),
    categories: (__VLS_ctx.categories),
    disabled: (__VLS_ctx.loading),
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
if (__VLS_ctx.loading) {
    __VLS_asFunctionalElement(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "product-list-page__state" },
    });
    /** @type {__VLS_StyleScopedClasses['product-list-page__state']} */ ;
}
else if (__VLS_ctx.error) {
    __VLS_asFunctionalElement(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "product-list-page__state error" },
    });
    /** @type {__VLS_StyleScopedClasses['product-list-page__state']} */ ;
    /** @type {__VLS_StyleScopedClasses['error']} */ ;
    (__VLS_ctx.error.message);
}
else {
    __VLS_asFunctionalElement(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "product-list-page__grid grid" },
    });
    /** @type {__VLS_StyleScopedClasses['product-list-page__grid']} */ ;
    /** @type {__VLS_StyleScopedClasses['grid']} */ ;
    for (const [p] of __VLS_getVForSourceType((__VLS_ctx.products))) {
        const __VLS_5 = ProductTile;
        // @ts-ignore
        const __VLS_6 = __VLS_asFunctionalComponent(__VLS_5, new __VLS_5({
            key: (p.id),
            product: (p),
        }));
        const __VLS_7 = __VLS_6({
            key: (p.id),
            product: (p),
        }, ...__VLS_functionalComponentArgsRest(__VLS_6));
        // @ts-ignore
        [q, category, sort, categories, loading, loading, error, error, products,];
    }
}
if (__VLS_ctx.totalPages > 1) {
    const __VLS_10 = Pagination;
    // @ts-ignore
    const __VLS_11 = __VLS_asFunctionalComponent(__VLS_10, new __VLS_10({
        page: (__VLS_ctx.page),
        totalPages: (__VLS_ctx.totalPages),
        disabled: (__VLS_ctx.loading),
    }));
    const __VLS_12 = __VLS_11({
        page: (__VLS_ctx.page),
        totalPages: (__VLS_ctx.totalPages),
        disabled: (__VLS_ctx.loading),
    }, ...__VLS_functionalComponentArgsRest(__VLS_11));
}
// @ts-ignore
[loading, totalPages, totalPages, page,];
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
//# sourceMappingURL=ProductListPage.vue.js.map