import { ref, watch } from 'vue';
import { getProduct } from '@/api';
/**
 * PDP composable
 * - Fetches a single product by id via getProduct(id)
 * - Caches results in-memory to avoid refetching on back/forth navigation
 * - Guards against stale responses when id changes quickly
 */
const productCache = new Map();
export function useProduct(id) {
    const product = ref(null);
    const loading = ref(false);
    const error = ref('');
    let requestSeq = 0;
    async function fetchProduct() {
        const productId = id.value;
        if (!productId || !Number.isInteger(productId) || productId <= 0) {
            product.value = null;
            loading.value = false;
            error.value = 'Invalid product id.';
            return;
        }
        const cached = productCache.get(productId);
        if (cached) {
            product.value = cached;
            error.value = '';
            loading.value = false;
            return;
        }
        loading.value = true;
        error.value = '';
        const seq = ++requestSeq;
        try {
            const data = await getProduct(productId);
            // If id changed while we were fetching, ignore this response
            if (seq !== requestSeq)
                return;
            productCache.set(productId, data);
            product.value = data;
        }
        catch (e) {
            if (seq !== requestSeq)
                return;
            product.value = null;
            error.value = e?.message ?? 'Failed to load product.';
        }
        finally {
            if (seq !== requestSeq)
                return;
            loading.value = false;
        }
    }
    watch(id, () => {
        void fetchProduct();
    }, { immediate: true });
    return {
        product,
        loading,
        error,
        refetch: fetchProduct,
    };
}
//# sourceMappingURL=usePDP.js.map