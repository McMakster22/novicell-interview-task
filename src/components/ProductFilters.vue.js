const __VLS_props = defineProps();
const __VLS_emit = defineEmits();
const __VLS_ctx = {
    ...{},
    ...{},
    ...{},
    ...{},
};
let ___VLS_components;
let ___VLS_directives;
__VLS_asFunctionalElement(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "product-filters" },
});
/** @type {__VLS_StyleScopedClasses['product-filters']} */ ;
__VLS_asFunctionalElement(__VLS_intrinsics.label, __VLS_intrinsics.label)({
    ...{ class: "product-filters__field" },
});
/** @type {__VLS_StyleScopedClasses['product-filters__field']} */ ;
__VLS_asFunctionalElement(__VLS_intrinsics.span, __VLS_intrinsics.span)({
    ...{ class: "product-filters__label" },
});
/** @type {__VLS_StyleScopedClasses['product-filters__label']} */ ;
__VLS_asFunctionalElement(__VLS_intrinsics.input)({
    ...{ onInput: (...[$event]) => {
            __VLS_ctx.$emit('update:q', $event.target.value);
            // @ts-ignore
            [$emit,];
        } },
    ...{ class: "product-filters__control" },
    type: "search",
    value: (__VLS_ctx.q),
    placeholder: "Search products…",
    disabled: (__VLS_ctx.disabled ?? false),
});
/** @type {__VLS_StyleScopedClasses['product-filters__control']} */ ;
__VLS_asFunctionalElement(__VLS_intrinsics.label, __VLS_intrinsics.label)({
    ...{ class: "product-filters__field" },
});
/** @type {__VLS_StyleScopedClasses['product-filters__field']} */ ;
__VLS_asFunctionalElement(__VLS_intrinsics.span, __VLS_intrinsics.span)({
    ...{ class: "product-filters__label" },
});
/** @type {__VLS_StyleScopedClasses['product-filters__label']} */ ;
__VLS_asFunctionalElement(__VLS_intrinsics.select, __VLS_intrinsics.select)({
    ...{ onChange: (...[$event]) => {
            __VLS_ctx.$emit('update:category', $event.target.value || null);
            // @ts-ignore
            [$emit, q, disabled,];
        } },
    ...{ class: "product-filters__control" },
    value: (__VLS_ctx.category ?? ''),
    disabled: (__VLS_ctx.disabled ?? false),
});
/** @type {__VLS_StyleScopedClasses['product-filters__control']} */ ;
__VLS_asFunctionalElement(__VLS_intrinsics.option, __VLS_intrinsics.option)({
    value: "",
});
for (const [c] of __VLS_getVForSourceType((__VLS_ctx.categories))) {
    __VLS_asFunctionalElement(__VLS_intrinsics.option, __VLS_intrinsics.option)({
        key: (c),
        value: (c),
    });
    (c);
    // @ts-ignore
    [disabled, category, categories,];
}
__VLS_asFunctionalElement(__VLS_intrinsics.label, __VLS_intrinsics.label)({
    ...{ class: "product-filters__field" },
});
/** @type {__VLS_StyleScopedClasses['product-filters__field']} */ ;
__VLS_asFunctionalElement(__VLS_intrinsics.span, __VLS_intrinsics.span)({
    ...{ class: "product-filters__label" },
});
/** @type {__VLS_StyleScopedClasses['product-filters__label']} */ ;
__VLS_asFunctionalElement(__VLS_intrinsics.select, __VLS_intrinsics.select)({
    ...{ onChange: (...[$event]) => {
            __VLS_ctx.$emit('update:sort', $event.target.value);
            // @ts-ignore
            [$emit,];
        } },
    ...{ class: "product-filters__control" },
    value: (__VLS_ctx.sort),
    disabled: (__VLS_ctx.disabled ?? false),
});
/** @type {__VLS_StyleScopedClasses['product-filters__control']} */ ;
__VLS_asFunctionalElement(__VLS_intrinsics.option, __VLS_intrinsics.option)({
    value: "price-asc",
});
__VLS_asFunctionalElement(__VLS_intrinsics.option, __VLS_intrinsics.option)({
    value: "price-desc",
});
__VLS_asFunctionalElement(__VLS_intrinsics.option, __VLS_intrinsics.option)({
    value: "rating",
});
// @ts-ignore
[disabled, sort,];
const __VLS_export = (await import('vue')).defineComponent({
    __typeEmits: {},
    __typeProps: {},
});
export default {};
//# sourceMappingURL=ProductFilters.vue.js.map