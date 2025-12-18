
declare module '*.vue' {
    import type { DefineComponent } from 'vue'
    const component: DefineComponent<{}, {}, any>;
    export default component
}

declare module '*.svg' {
    const src: string
    export default src
}

// Workaround for @splidejs/vue-splide exporting types via "exports" in a way
// vue-tsc can't resolve reliably. We only need basic component typing.
declare module '@splidejs/vue-splide' {
    import type { DefineComponent } from 'vue'
    export const Splide: DefineComponent<any, any, any>
    export const SplideSlide: DefineComponent<any, any, any>
}