export type ProductSort = 'price-asc' | 'price-desc' | 'rating';
type __VLS_Props = {
    q: string;
    category: string | null;
    sort: ProductSort;
    categories: string[];
    disabled?: boolean;
};
declare const __VLS_export: import("vue", { with: { "resolution-mode": "import" } }).DefineComponent<__VLS_Props, {}, {}, {}, {}, import("vue", { with: { "resolution-mode": "import" } }).ComponentOptionsMixin, import("vue", { with: { "resolution-mode": "import" } }).ComponentOptionsMixin, {} & {
    "update:q": (value: string) => any;
    "update:category": (value: string | null) => any;
    "update:sort": (value: ProductSort) => any;
}, string, import("vue", { with: { "resolution-mode": "import" } }).PublicProps, Readonly<__VLS_Props> & Readonly<{
    "onUpdate:q"?: ((value: string) => any) | undefined;
    "onUpdate:category"?: ((value: string | null) => any) | undefined;
    "onUpdate:sort"?: ((value: ProductSort) => any) | undefined;
}>, {}, {}, {}, {}, string, import("vue", { with: { "resolution-mode": "import" } }).ComponentProvideOptions, false, {}, any>;
declare const _default: typeof __VLS_export;
export default _default;
