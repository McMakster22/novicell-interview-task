import type { Product } from '@/models';
export type CartItem = {
    id: string;
    name: string;
    price: number;
    quantity: number;
    image?: string;
    sku?: string;
};
type CartState = {
    items: CartItem[];
    remoteCartId: number | null;
    userId: number | null;
    syncing: boolean;
    syncError: string | null;
    lastSyncedAt: number | null;
    flyoutOpen: boolean;
    flyoutProduct: Product | null;
    flyoutQty: number;
    flyoutNonce: number;
};
export declare const useCartStore: import("pinia").StoreDefinition<"cart", CartState, {
    totalItems: (state: {
        items: {
            id: string;
            name: string;
            price: number;
            quantity: number;
            image?: string | undefined;
            sku?: string | undefined;
        }[];
        remoteCartId: number | null;
        userId: number | null;
        syncing: boolean;
        syncError: string | null;
        lastSyncedAt: number | null;
        flyoutOpen: boolean;
        flyoutProduct: Product | null;
        flyoutQty: number;
        flyoutNonce: number;
    } & import("pinia").PiniaCustomStateProperties<CartState>) => number;
    totalUniqueItems: (state: {
        items: {
            id: string;
            name: string;
            price: number;
            quantity: number;
            image?: string | undefined;
            sku?: string | undefined;
        }[];
        remoteCartId: number | null;
        userId: number | null;
        syncing: boolean;
        syncError: string | null;
        lastSyncedAt: number | null;
        flyoutOpen: boolean;
        flyoutProduct: Product | null;
        flyoutQty: number;
        flyoutNonce: number;
    } & import("pinia").PiniaCustomStateProperties<CartState>) => number;
    totalPrice: (state: {
        items: {
            id: string;
            name: string;
            price: number;
            quantity: number;
            image?: string | undefined;
            sku?: string | undefined;
        }[];
        remoteCartId: number | null;
        userId: number | null;
        syncing: boolean;
        syncError: string | null;
        lastSyncedAt: number | null;
        flyoutOpen: boolean;
        flyoutProduct: Product | null;
        flyoutQty: number;
        flyoutNonce: number;
    } & import("pinia").PiniaCustomStateProperties<CartState>) => number;
    isRemoteConnected: (state: {
        items: {
            id: string;
            name: string;
            price: number;
            quantity: number;
            image?: string | undefined;
            sku?: string | undefined;
        }[];
        remoteCartId: number | null;
        userId: number | null;
        syncing: boolean;
        syncError: string | null;
        lastSyncedAt: number | null;
        flyoutOpen: boolean;
        flyoutProduct: Product | null;
        flyoutQty: number;
        flyoutNonce: number;
    } & import("pinia").PiniaCustomStateProperties<CartState>) => boolean;
}, {
    privateSaveLocal(): void;
    privateSaveRemoteContext(): void;
    openFlyout(product: Product, qty: number): void;
    closeFlyout(): void;
    _syncTimer: number | undefined;
    scheduleSync(delayMs?: number): void;
    /** Prefer this from UI: add a real product */
    addProduct(product: Product, quantity?: number): void;
    addItem(item: Omit<CartItem, "quantity"> & {
        quantity?: number;
    }): void;
    removeItem(id: string): void;
    updateQuantity(id: string, quantity: number): void;
    clearCart(): void;
    setItems(items: CartItem[]): void;
    /** Remote: attach store to a user/cart context */
    setRemoteContext(payload: {
        userId: number;
        cartId?: number | null;
    }): void;
    /** Remote: GET and replace local items with remote */
    pullFromRemote(cartId?: number): Promise<void>;
    /** Remote: POST create a cart from current local items */
    createRemoteCart(userId: number): Promise<any>;
    /** Remote: PUT overwrite remote cart with current local items (local is source of truth) */
    pushToRemote(): Promise<any>;
    /** Remote: DELETE cart and clear remote context (local items are kept unless you clear them) */
    deleteRemoteCart(): Promise<void>;
    /**
     * App bootstrap entrypoint.
     * - Uses persisted remoteCartId if present
     * - Pulls remote cart when possible (remote is canonical by default)
     * - Otherwise creates a remote cart from local items and ensures future sync works
     */
    initCartSession(userId: number, opts?: {
        preferRemote?: boolean;
    }): Promise<void>;
    /** Optional convenience: remove remote linkage but keep local cart */
    disconnectRemote(): void;
}>;
export {};
