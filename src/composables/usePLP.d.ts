type SortKey = 'price-asc' | 'price-desc' | 'rating';
export declare function usePLP(): {
    products: import("vue").ComputedRef<any[]>;
    loading: import("vue").Ref<boolean, boolean>;
    error: import("vue").Ref<Error | null, Error | null>;
    q: import("vue").Ref<string, string>;
    category: import("vue").Ref<string | null, string | null>;
    categories: import("vue").ComputedRef<string[]>;
    sort: import("vue").Ref<SortKey, SortKey>;
    page: import("vue").Ref<number, number>;
    totalPages: import("vue").ComputedRef<number>;
    refetch: () => Promise<void>;
};
export {};
