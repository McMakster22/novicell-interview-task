import { computed } from 'vue';
import { useRoute, RouterView } from 'vue-router';
import { defineAsyncComponent } from 'vue';
const route = useRoute();
const currentLayoutRef = computed(() => {
    const key = route.meta?.layoutKey;
    return (key === 'basket' || key === 'error') ? key : 'default';
});
const Layouts = {
    default: defineAsyncComponent(() => import('@/layout/default.vue')),
    basket: defineAsyncComponent(() => import('@/layout/basket.vue')),
    error: defineAsyncComponent(() => import('@/layout/error.vue')),
};
const pageLayout = computed(() => Layouts[currentLayoutRef.value] || null);
const __VLS_ctx = {
    ...{},
    ...{},
};
let ___VLS_components;
let ___VLS_directives;
/** @type {__VLS_StyleScopedClasses['logo']} */ ;
/** @type {__VLS_StyleScopedClasses['logo']} */ ;
if (__VLS_ctx.pageLayout) {
    __VLS_asFunctionalElement(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        key: (__VLS_ctx.currentLayoutRef),
    });
    const __VLS_0 = (__VLS_ctx.pageLayout);
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({}));
    const __VLS_2 = __VLS_1({}, ...__VLS_functionalComponentArgsRest(__VLS_1));
    const { default: __VLS_5 } = __VLS_3.slots;
    let __VLS_6;
    /** @ts-ignore @type {typeof ___VLS_components.RouterView} */
    RouterView;
    // @ts-ignore
    const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({}));
    const __VLS_8 = __VLS_7({}, ...__VLS_functionalComponentArgsRest(__VLS_7));
    // @ts-ignore
    [pageLayout, pageLayout, currentLayoutRef,];
    var __VLS_3;
}
// @ts-ignore
[];
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
//# sourceMappingURL=App.vue.js.map