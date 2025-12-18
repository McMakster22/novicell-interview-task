import { computed } from 'vue';
const props = withDefaults(defineProps(), {
    disabled: false,
    maxButtons: 7,
});
const emit = defineEmits();
const safeTotal = computed(() => Math.max(1, Math.floor(props.totalPages || 1)));
const safePage = computed(() => {
    const p = Math.floor(props.page || 1);
    return Math.min(Math.max(1, p), safeTotal.value);
});
function go(p) {
    const next = Math.min(Math.max(1, Math.floor(p)), safeTotal.value);
    if (next === safePage.value)
        return;
    emit('update:page', next);
    emit('change', next);
}
const canPrev = computed(() => safePage.value > 1 && !props.disabled);
const canNext = computed(() => safePage.value < safeTotal.value && !props.disabled);
const pageButtons = computed(() => {
    const total = safeTotal.value;
    const current = safePage.value;
    const max = Math.max(5, props.maxButtons);
    // Always show first + last, and a window around current
    const windowSize = max - 2; // excluding first/last
    const half = Math.floor(windowSize / 2);
    let start = Math.max(2, current - half);
    let end = Math.min(total - 1, start + windowSize - 1);
    // readjust start if we're near the end
    start = Math.max(2, end - windowSize + 1);
    const items = [1];
    if (start > 2)
        items.push('...');
    for (let p = start; p <= end; p++)
        items.push(p);
    if (end < total - 1)
        items.push('...');
    if (total > 1)
        items.push(total);
    return items;
});
const __VLS_defaults = {
    disabled: false,
    maxButtons: 7,
};
const __VLS_ctx = {
    ...{},
    ...{},
    ...{},
    ...{},
    ...{},
};
let ___VLS_components;
let ___VLS_directives;
/** @type {__VLS_StyleScopedClasses['pagination__page']} */ ;
if (__VLS_ctx.safeTotal > 1) {
    __VLS_asFunctionalElement(__VLS_intrinsics.nav, __VLS_intrinsics.nav)({
        ...{ class: "pagination" },
        'aria-label': "Pagination",
    });
    /** @type {__VLS_StyleScopedClasses['pagination']} */ ;
    __VLS_asFunctionalElement(__VLS_intrinsics.button, __VLS_intrinsics.button)({
        ...{ onClick: (...[$event]) => {
                if (!(__VLS_ctx.safeTotal > 1))
                    return;
                __VLS_ctx.go(__VLS_ctx.safePage - 1);
                // @ts-ignore
                [safeTotal, go, safePage,];
            } },
        ...{ class: "pagination__btn" },
        type: "button",
        disabled: (!__VLS_ctx.canPrev),
        'aria-label': "Previous page",
    });
    /** @type {__VLS_StyleScopedClasses['pagination__btn']} */ ;
    __VLS_asFunctionalElement(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "pagination__pages" },
        role: "list",
    });
    /** @type {__VLS_StyleScopedClasses['pagination__pages']} */ ;
    for (const [item, idx] of __VLS_getVForSourceType((__VLS_ctx.pageButtons))) {
        (`${item}-${idx}`);
        if (item === '...') {
            __VLS_asFunctionalElement(__VLS_intrinsics.span, __VLS_intrinsics.span)({
                ...{ class: "pagination__ellipsis" },
                'aria-hidden': "true",
            });
            /** @type {__VLS_StyleScopedClasses['pagination__ellipsis']} */ ;
        }
        else {
            __VLS_asFunctionalElement(__VLS_intrinsics.button, __VLS_intrinsics.button)({
                ...{ onClick: (...[$event]) => {
                        if (!(__VLS_ctx.safeTotal > 1))
                            return;
                        if (!!(item === '...'))
                            return;
                        __VLS_ctx.go(item);
                        // @ts-ignore
                        [go, canPrev, pageButtons,];
                    } },
                ...{ class: "pagination__page" },
                type: "button",
                role: "listitem",
                ...{ class: ({ 'pagination__page--active': item === __VLS_ctx.safePage }) },
                disabled: (__VLS_ctx.disabled),
                'aria-current': (item === __VLS_ctx.safePage ? 'page' : undefined),
            });
            /** @type {__VLS_StyleScopedClasses['pagination__page']} */ ;
            /** @type {__VLS_StyleScopedClasses['pagination__page--active']} */ ;
            (item);
        }
        // @ts-ignore
        [safePage, safePage, disabled,];
    }
    __VLS_asFunctionalElement(__VLS_intrinsics.button, __VLS_intrinsics.button)({
        ...{ onClick: (...[$event]) => {
                if (!(__VLS_ctx.safeTotal > 1))
                    return;
                __VLS_ctx.go(__VLS_ctx.safePage + 1);
                // @ts-ignore
                [go, safePage,];
            } },
        ...{ class: "pagination__btn" },
        type: "button",
        disabled: (!__VLS_ctx.canNext),
        'aria-label': "Next page",
    });
    /** @type {__VLS_StyleScopedClasses['pagination__btn']} */ ;
}
// @ts-ignore
[canNext,];
const __VLS_export = (await import('vue')).defineComponent({
    __typeEmits: {},
    __typeProps: {},
    props: {},
});
export default {};
//# sourceMappingURL=Pagination.vue.js.map