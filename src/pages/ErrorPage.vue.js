import { computed, onBeforeUnmount, onMounted, ref } from 'vue';
import SplideCarousel from '@/components/SplideCarousel.vue';
import { getProducts } from '@/api';
import balloon from '@/assets/svg/balloon.svg';
const heroImages = ref([]);
// Countdown timer (simple: end time is 48h from first load)
const saleEndsAt = ref(Date.now() + 48 * 60 * 60 * 1000);
const now = ref(Date.now());
let timerId;
const remainingMs = computed(() => Math.max(0, saleEndsAt.value - now.value));
const remainingTotalSeconds = computed(() => Math.floor(remainingMs.value / 1000));
const daysLeft = computed(() => Math.floor(remainingTotalSeconds.value / 86400));
const hoursLeft = computed(() => Math.floor((remainingTotalSeconds.value % 86400) / 3600));
const minutesLeft = computed(() => Math.floor((remainingTotalSeconds.value % 3600) / 60));
const secondsLeft = computed(() => remainingTotalSeconds.value % 60);
function pad2(n) {
    return String(n).padStart(2, '0');
}
const balloons = ref([]);
const balloonCount = 16;
function randomBetween(min, max) {
    return min + Math.random() * (max - min);
}
function generateBalloons(count) {
    // Use percentages so it scales with the container.
    // Keep a small gutter so balloons don't clip at edges.
    const next = [];
    for (let i = 0; i < count; i++) {
        next.push({
            id: i + 1,
            left: randomBetween(6, 94),
            top: randomBetween(8, 92),
            size: Math.round(randomBetween(22, 52)),
            rotate: Math.round(randomBetween(-20, 20)),
        });
    }
    balloons.value = next;
}
onMounted(async () => {
    generateBalloons(balloonCount);
    timerId = window.setInterval(() => {
        now.value = Date.now();
    }, 1000);
    const products = await getProducts();
    heroImages.value = products
        .map(p => p.image)
        .filter((src) => typeof src === 'string' && src.length > 0)
        .slice(0, 8); // limit to first 8 images
});
onBeforeUnmount(() => {
    if (timerId)
        window.clearInterval(timerId);
});
const __VLS_ctx = {
    ...{},
    ...{},
};
let ___VLS_components;
let ___VLS_directives;
/** @type {__VLS_StyleScopedClasses['home-page']} */ ;
/** @type {__VLS_StyleScopedClasses['home-page__hero']} */ ;
/** @type {__VLS_StyleScopedClasses['home-page__title']} */ ;
/** @type {__VLS_StyleScopedClasses['home-page__subtitle']} */ ;
/** @type {__VLS_StyleScopedClasses['home-page__countdown']} */ ;
/** @type {__VLS_StyleScopedClasses['home-page__countdown-title']} */ ;
/** @type {__VLS_StyleScopedClasses['home-page__countdown-time']} */ ;
/** @type {__VLS_StyleScopedClasses['home-page__countdown-title']} */ ;
/** @type {__VLS_StyleScopedClasses['home-page__countdown-time']} */ ;
/** @type {__VLS_StyleScopedClasses['splide-carousel']} */ ;
__VLS_asFunctionalElement(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "home-page" },
});
/** @type {__VLS_StyleScopedClasses['home-page']} */ ;
__VLS_asFunctionalElement(__VLS_intrinsics.section, __VLS_intrinsics.section)({
    ...{ class: "home-page__hero" },
    'aria-label': "Black Friday",
});
/** @type {__VLS_StyleScopedClasses['home-page__hero']} */ ;
__VLS_asFunctionalElement(__VLS_intrinsics.h1, __VLS_intrinsics.h1)({
    ...{ class: "home-page__title" },
});
/** @type {__VLS_StyleScopedClasses['home-page__title']} */ ;
__VLS_asFunctionalElement(__VLS_intrinsics.p, __VLS_intrinsics.p)({
    ...{ class: "home-page__subtitle" },
});
/** @type {__VLS_StyleScopedClasses['home-page__subtitle']} */ ;
__VLS_asFunctionalElement(__VLS_intrinsics.p, __VLS_intrinsics.p)({
    ...{ class: "home-page__fineprint" },
});
/** @type {__VLS_StyleScopedClasses['home-page__fineprint']} */ ;
const __VLS_0 = SplideCarousel;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({
    images: (__VLS_ctx.heroImages),
}));
const __VLS_2 = __VLS_1({
    images: (__VLS_ctx.heroImages),
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
__VLS_asFunctionalElement(__VLS_intrinsics.section, __VLS_intrinsics.section)({
    ...{ class: "home-page__balloon-stage" },
    'aria-label': "Sale countdown",
});
/** @type {__VLS_StyleScopedClasses['home-page__balloon-stage']} */ ;
__VLS_asFunctionalElement(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "home-page__countdown" },
    role: "status",
    'aria-live': "polite",
});
/** @type {__VLS_StyleScopedClasses['home-page__countdown']} */ ;
__VLS_asFunctionalElement(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "home-page__countdown-title" },
});
/** @type {__VLS_StyleScopedClasses['home-page__countdown-title']} */ ;
__VLS_asFunctionalElement(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "home-page__countdown-time" },
});
/** @type {__VLS_StyleScopedClasses['home-page__countdown-time']} */ ;
__VLS_asFunctionalElement(__VLS_intrinsics.span, __VLS_intrinsics.span)({
    ...{ class: "home-page__countdown-part" },
});
/** @type {__VLS_StyleScopedClasses['home-page__countdown-part']} */ ;
(__VLS_ctx.daysLeft);
__VLS_asFunctionalElement(__VLS_intrinsics.span, __VLS_intrinsics.span)({
    ...{ class: "home-page__countdown-sep" },
});
/** @type {__VLS_StyleScopedClasses['home-page__countdown-sep']} */ ;
__VLS_asFunctionalElement(__VLS_intrinsics.span, __VLS_intrinsics.span)({
    ...{ class: "home-page__countdown-part" },
});
/** @type {__VLS_StyleScopedClasses['home-page__countdown-part']} */ ;
(__VLS_ctx.pad2(__VLS_ctx.hoursLeft));
__VLS_asFunctionalElement(__VLS_intrinsics.span, __VLS_intrinsics.span)({
    ...{ class: "home-page__countdown-sep" },
});
/** @type {__VLS_StyleScopedClasses['home-page__countdown-sep']} */ ;
__VLS_asFunctionalElement(__VLS_intrinsics.span, __VLS_intrinsics.span)({
    ...{ class: "home-page__countdown-part" },
});
/** @type {__VLS_StyleScopedClasses['home-page__countdown-part']} */ ;
(__VLS_ctx.pad2(__VLS_ctx.minutesLeft));
__VLS_asFunctionalElement(__VLS_intrinsics.span, __VLS_intrinsics.span)({
    ...{ class: "home-page__countdown-sep" },
});
/** @type {__VLS_StyleScopedClasses['home-page__countdown-sep']} */ ;
__VLS_asFunctionalElement(__VLS_intrinsics.span, __VLS_intrinsics.span)({
    ...{ class: "home-page__countdown-part" },
});
/** @type {__VLS_StyleScopedClasses['home-page__countdown-part']} */ ;
(__VLS_ctx.pad2(__VLS_ctx.secondsLeft));
for (const [b] of __VLS_getVForSourceType((__VLS_ctx.balloons))) {
    __VLS_asFunctionalElement(__VLS_intrinsics.img)({
        key: (b.id),
        ...{ class: "home-page__balloon" },
        src: (__VLS_ctx.balloon),
        alt: "",
        'aria-hidden': "true",
        ...{ style: ({
                left: b.left + '%',
                top: b.top + '%',
                width: b.size + 'px',
                transform: 'translate(-50%, -50%) rotate(' + b.rotate + 'deg)',
            }) },
    });
    /** @type {__VLS_StyleScopedClasses['home-page__balloon']} */ ;
    // @ts-ignore
    [heroImages, daysLeft, pad2, pad2, pad2, hoursLeft, minutesLeft, secondsLeft, balloons, balloon,];
}
// @ts-ignore
[];
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
//# sourceMappingURL=ErrorPage.vue.js.map