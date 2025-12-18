import { type Ref } from 'vue';
export declare function useProduct(id: Ref<number | undefined>): {
    product: any;
    loading: Ref<boolean, boolean>;
    error: Ref<string, string>;
    refetch: () => Promise<void>;
};
