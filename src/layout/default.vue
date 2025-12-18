<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';

import AppFooter from '@/components/AppFooter.vue';
import AppHeader from '@/components/AppHeader.vue';
import AppLookNavigation from '@/components/AppLookNavigation.vue';
import FlyoutCart from '@/components/FlyoutCart.vue';

</script>

<template>
    <div class="default-layout">
        <AppHeader />
        <FlyoutCart />
        <main class="container main-content">
            <slot />
        </main>
        <AppFooter />
        <!-- <AppLookNavigation /> -->
    </div>
</template>

<style lang="scss" scoped>
.default-layout {
    display: flex;
    flex-direction: column;
    min-height: 100vh; // full viewport height
    flex-wrap: wrap;

    .main-content {
        flex: 1 0 auto;
        padding-top: 1rem;
        padding-bottom: 1rem;
        min-height: 100vh; // ensure main content takes full height
    }
}
</style>