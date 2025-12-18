import type { Product } from '@/models';
type __VLS_Props = {
    product: Product;
};
declare const __VLS_export: import("vue", { with: { "resolution-mode": "import" } }).DefineComponent<__VLS_Props, {}, {}, {}, {}, import("vue", { with: { "resolution-mode": "import" } }).ComponentOptionsMixin, import("vue", { with: { "resolution-mode": "import" } }).ComponentOptionsMixin, {} & {
    "add-to-cart": (payload: {
        product: Product;
        qty: number;
    }) => any;
}, string, import("vue", { with: { "resolution-mode": "import" } }).PublicProps, Readonly<__VLS_Props> & Readonly<{
    "onAdd-to-cart"?: ((payload: {
        product: Product;
        qty: number;
    }) => any) | undefined;
}>, {}, {}, {}, {}, string, import("vue", { with: { "resolution-mode": "import" } }).ComponentProvideOptions, false, {}, any>;
declare const _default: typeof __VLS_export;
export default _default;
