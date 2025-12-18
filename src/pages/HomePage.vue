<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from 'vue';
import SplideCarousel from '@/components/SplideCarousel.vue';
import { getProducts } from '@/api'
import balloon from '@/assets/svg/balloon.svg'

const heroImages = ref<string[]>([])

// Countdown timer (simple: end time is 48h from first load)
const saleEndsAt = ref<number>(Date.now() + 48 * 60 * 60 * 1000)
const now = ref<number>(Date.now())
let timerId: number | undefined

const remainingMs = computed(() => Math.max(0, saleEndsAt.value - now.value))
const remainingTotalSeconds = computed(() => Math.floor(remainingMs.value / 1000))

const daysLeft = computed(() => Math.floor(remainingTotalSeconds.value / 86400))
const hoursLeft = computed(() => Math.floor((remainingTotalSeconds.value % 86400) / 3600))
const minutesLeft = computed(() => Math.floor((remainingTotalSeconds.value % 3600) / 60))
const secondsLeft = computed(() => remainingTotalSeconds.value % 60)

function pad2(n: number) {
    return String(n).padStart(2, '0')
}

type Balloon = {
    id: number
    left: number
    top: number
    size: number
    rotate: number
}

const balloons = ref<Balloon[]>([])
const balloonCount = 16

function randomBetween(min: number, max: number) {
    return min + Math.random() * (max - min)
}

function generateBalloons(count: number) {
    // Use percentages so it scales with the container.
    // Keep a small gutter so balloons don't clip at edges.
    const next: Balloon[] = []
    for (let i = 0; i < count; i++) {
        next.push({
            id: i + 1,
            left: randomBetween(6, 94),
            top: randomBetween(8, 92),
            size: Math.round(randomBetween(22, 52)),
            rotate: Math.round(randomBetween(-20, 20)),
        })
    }
    balloons.value = next
}

onMounted(async () => {
    generateBalloons(balloonCount)

        timerId = window.setInterval(() => {
            now.value = Date.now()
        }, 1000)

  const products = await getProducts()

  heroImages.value = products
    .map(p => p.image)
    .filter((src): src is string => typeof src === 'string' && src.length > 0)
        .slice(0, 8) // limit to first 8 images
})

onBeforeUnmount(() => {
    if (timerId) window.clearInterval(timerId)
})
</script>

<template>
    <div class="home-page">
        <section class="home-page__hero" aria-label="Black Friday">
            <h1 class="home-page__title">Black Friday Sale</h1>
            <p class="home-page__subtitle">
                Limited-time deals on best sellers — up to 60% off. New offers drop daily, while stock lasts.
            </p>
            <p class="home-page__fineprint">
                Discounts apply to selected items only. Prices may change during the campaign.
            </p>
            <SplideCarousel :images="heroImages" />
        </section>


        <section class="home-page__balloon-stage" aria-label="Sale countdown">
            <div class="home-page__countdown" role="status" aria-live="polite">
                <div class="home-page__countdown-title">Deal ends in</div>
                <div class="home-page__countdown-time">
                    <span class="home-page__countdown-part">{{ daysLeft }}d</span>
                    <span class="home-page__countdown-sep">:</span>
                    <span class="home-page__countdown-part">{{ pad2(hoursLeft) }}</span>
                    <span class="home-page__countdown-sep">:</span>
                    <span class="home-page__countdown-part">{{ pad2(minutesLeft) }}</span>
                    <span class="home-page__countdown-sep">:</span>
                    <span class="home-page__countdown-part">{{ pad2(secondsLeft) }}</span>
                </div>
            </div>

            <img
                v-for="b in balloons"
                :key="b.id"
                class="home-page__balloon"
                :src="balloon"
                alt=""
                aria-hidden="true"
                :style="{
                    left: b.left + '%',
                    top: b.top + '%',
                    width: b.size + 'px',
                    transform: 'translate(-50%, -50%) rotate(' + b.rotate + 'deg)',
                }"
            />
        </section>
    </div>
</template>

<style scoped>
.home-page {
    max-width: 1200px;
    margin: 0 auto;
    padding: 1rem;
    width: 100vw;
}

.home-page__hero {
    /* full-bleed section inside a centered page container */
    margin-left: calc(50% - 50vw);
    margin-right: calc(50% - 50vw);
    padding: 0.75rem 1rem 1rem;
    background-color: black;
    color: white;
    text-align: center;
}

.home-page__title {
    margin: 0;
    font-size: 2rem;
    font-weight: 800;
    letter-spacing: -0.02em;
    line-height: 1.1;
}

.home-page__subtitle {
    margin: 0.6rem 0 0;
    font-size: 2rem;
    line-height: 1.5;
    color: #fff;
    text-transform: uppercase;
}

.home-page__fineprint {
    margin: 0.5rem 0 0;
    color: #fff;
    padding: 1rem;
}

@media (min-width: 1024px) {
    .home-page {
        padding: 2rem 1rem;
    }

    .home-page__hero {
        padding: 1.25rem 1rem 1.5rem;
    }

    .home-page__title {
        font-size: 6rem;
    }

    .home-page__subtitle {
        font-size: 1.05rem;
    }
}

.home-page__balloon-stage {
    background: #edc300;
    margin-left: calc(50% - 50vw);
    margin-right: calc(50% - 50vw);
    height: 60rem;
    position: relative;
    overflow: hidden;
}

.home-page__countdown {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    background: rgba(0, 0, 0, 1);
    color: #fff;
    border: 1px solid rgba(255, 255, 255, 0.25);
    border-radius: 14px;
    padding: 0.75rem 0.9rem;
    width: min(700px, calc(100vw - 2rem));
    z-index: 2;
}

.home-page__countdown-title {
    font-size: 1.1rem;
    opacity: 0.9;
    margin-bottom: 0.5rem;
}

.home-page__countdown-time {
    font-weight: 800;
    letter-spacing: 0.08em;
    font-size: 1.25rem;
    display: inline-flex;
    align-items: baseline;
    gap: 0.35rem;
}

.home-page__countdown-part {
    font-variant-numeric: tabular-nums;
}

.home-page__countdown-sep {
    opacity: 0.6;
}

.home-page__balloon {
    position: absolute;
    height: auto;
    display: block;
    pointer-events: none;
    user-select: none;
    z-index: 1;
}

@media (min-width: 768px) {
    .home-page__countdown {
        padding: 1rem 1.25rem;
    }

    .home-page__countdown-title {
        font-size: 1.6rem;
    }

    .home-page__countdown-time {
        font-size: 1.75rem;
    }

    .splide-carousel {
        margin: 0 auto;
    }
}

@media (min-width: 1024px) {
    .home-page__countdown-title {
        font-size: 2rem;
    }

    .home-page__countdown-time {
        font-size: 2rem;
    }

    .splide-carousel {
        margin: 10rem;
    }
}

</style>