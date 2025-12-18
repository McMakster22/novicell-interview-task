import { Splide, SplideSlide } from '@splidejs/vue-splide';
const props = defineProps({
    images: {
        type: Array,
        default: () => [],
    },
});
const options = {
    type: 'loop',
    perPage: 5,
    autoplay: true,
    interval: 4000,
    pauseOnHover: true,
    arrows: true,
    pagination: true,
    padding: '1rem',
    gap: '2rem',
    breakpoints: {
        1280: { perPage: 4 },
        1024: { perPage: 3 },
        768: { perPage: 2 },
        640: { perPage: 1 },
    },
};
const __VLS_ctx = {
    ...{},
    ...{},
    ...{},
    ...{},
};
let ___VLS_components;
let ___VLS_directives;
__VLS_asFunctionalElement(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "splide-carousel" },
});
/** @type {__VLS_StyleScopedClasses['splide-carousel']} */ ;
let __VLS_0;
/** @ts-ignore @type {typeof ___VLS_components.Splide} */
Splide;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({
    options: (__VLS_ctx.options),
    'aria-label': "Hero slider",
}));
const __VLS_2 = __VLS_1({
    options: (__VLS_ctx.options),
    'aria-label': "Hero slider",
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
const { default: __VLS_5 } = __VLS_3.slots;
for (const [src, i] of __VLS_getVForSourceType((props.images))) {
    let __VLS_6;
    /** @ts-ignore @type {typeof ___VLS_components.SplideSlide} */
    SplideSlide;
    // @ts-ignore
    const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({
        key: (`${src}-${i}`),
    }));
    const __VLS_8 = __VLS_7({
        key: (`${src}-${i}`),
    }, ...__VLS_functionalComponentArgsRest(__VLS_7));
    const { default: __VLS_11 } = __VLS_9.slots;
    __VLS_asFunctionalElement(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "splide-carousel__slide" },
    });
    /** @type {__VLS_StyleScopedClasses['splide-carousel__slide']} */ ;
    __VLS_asFunctionalElement(__VLS_intrinsics.img)({
        ...{ class: "splide-carousel__img" },
        src: (src),
        alt: (`Featured product ${i + 1}`),
    });
    /** @type {__VLS_StyleScopedClasses['splide-carousel__img']} */ ;
    // @ts-ignore
    [options,];
    var __VLS_9;
    // @ts-ignore
    [];
}
// @ts-ignore
[];
var __VLS_3;
// @ts-ignore
[];
const __VLS_export = (await import('vue')).defineComponent({
    props: {
        images: {
            type: Array,
            default: () => [],
        },
    },
});
export default {};
//# sourceMappingURL=SplideCarousel.vue.js.map