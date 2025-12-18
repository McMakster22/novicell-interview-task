type __VLS_Props = {
    page: number;
    totalPages: number;
    disabled?: boolean;
    maxButtons?: number;
};
declare const __VLS_export: import("vue", { with: { "resolution-mode": "import" } }).DefineComponent<__VLS_Props, {}, {}, {}, {}, import("vue", { with: { "resolution-mode": "import" } }).ComponentOptionsMixin, import("vue", { with: { "resolution-mode": "import" } }).ComponentOptionsMixin, {} & {
    "update:page": (value: number) => any;
    change: (value: number) => any;
}, string, import("vue", { with: { "resolution-mode": "import" } }).PublicProps, Readonly<__VLS_Props> & Readonly<{
    "onUpdate:page"?: ((value: number) => any) | undefined;
    onChange?: ((value: number) => any) | undefined;
}>, {
    disabled: boolean;
    maxButtons: number;
}, {}, {}, {}, string, import("vue", { with: { "resolution-mode": "import" } }).ComponentProvideOptions, false, {}, any>;
declare const _default: typeof __VLS_export;
export default _default;
