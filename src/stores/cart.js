import { defineStore } from 'pinia';
import { createCart, deleteCart, getCart, updateCart } from '@/api';
const LS_ITEMS_KEY = 'cart';
const LS_REMOTE_KEY = 'cart_remote_context';
function safeLoadLocalItems() {
    try {
        if (typeof window !== 'undefined') {
            const raw = localStorage.getItem(LS_ITEMS_KEY);
            if (raw)
                return JSON.parse(raw);
        }
    }
    catch { }
    return [];
}
function safeLoadRemoteContext() {
    try {
        if (typeof window === 'undefined')
            return { userId: null, remoteCartId: null };
        const raw = localStorage.getItem(LS_REMOTE_KEY);
        if (!raw)
            return { userId: null, remoteCartId: null };
        const parsed = JSON.parse(raw);
        const userId = typeof parsed.userId === 'number' && parsed.userId > 0 ? parsed.userId : null;
        const remoteCartId = typeof parsed.remoteCartId === 'number' && parsed.remoteCartId > 0 ? parsed.remoteCartId : null;
        return { userId, remoteCartId };
    }
    catch {
        return { userId: null, remoteCartId: null };
    }
}
function toApiProducts(items) {
    // Your described cart API expects full product objects.
    // Your cart items only have a subset. Fill required fields with safe defaults.
    return items.map((i) => ({
        id: Number(i.id),
        title: i.name,
        price: i.price,
        description: '',
        category: '',
        image: i.image ?? '',
        quantity: i.quantity,
        flyoutOpen: false,
        flyoutProduct: null,
        flyoutQty: 0,
        flyoutNonce: 0,
    }));
}
function fromApiProducts(products) {
    return (products ?? []).map((p) => ({
        id: String(p.id),
        name: p.title,
        price: p.price,
        quantity: typeof p.quantity === 'number' && p.quantity > 0 ? p.quantity : 1,
        image: p.image,
    }));
}
const productCache = new Map();
export const useCartStore = defineStore('cart', {
    state: () => {
        const ctx = safeLoadRemoteContext();
        return {
            items: safeLoadLocalItems(),
            remoteCartId: ctx.remoteCartId,
            userId: ctx.userId,
            syncing: false,
            syncError: null,
            lastSyncedAt: null,
            flyoutOpen: false,
            flyoutProduct: undefined,
            flyoutQty: 0,
            flyoutNonce: 0
        };
    },
    getters: {
        totalItems: (state) => state.items.reduce((sum, i) => sum + i.quantity, 0),
        totalUniqueItems: (state) => state.items.length,
        totalPrice: (state) => state.items.reduce((sum, i) => sum + i.price * i.quantity, 0),
        isRemoteConnected: (state) => typeof state.remoteCartId === 'number' && state.remoteCartId > 0,
    },
    actions: {
        privateSaveLocal() {
            try {
                if (typeof window !== 'undefined') {
                    localStorage.setItem(LS_ITEMS_KEY, JSON.stringify(this.items));
                }
            }
            catch { }
        },
        privateSaveRemoteContext() {
            try {
                if (typeof window !== 'undefined') {
                    localStorage.setItem(LS_REMOTE_KEY, JSON.stringify({ userId: this.userId, remoteCartId: this.remoteCartId }));
                }
            }
            catch { }
        },
        openFlyout(product, qty) {
            this.flyoutProduct = product;
            this.flyoutQty = Math.max(1, Math.floor(qty || 1));
            this.flyoutOpen = true;
            this.flyoutNonce++;
        },
        closeFlyout() {
            this.flyoutOpen = false;
        },
        // Debounced remote sync (avoid API spam on +/- quantity)
        _syncTimer: undefined,
        scheduleSync(delayMs = 400) {
            if (typeof window === 'undefined')
                return;
            if (!this.isRemoteConnected)
                return;
            if (this._syncTimer)
                window.clearTimeout(this._syncTimer);
            this._syncTimer = window.setTimeout(() => {
                void this.pushToRemote();
            }, delayMs);
        },
        /** Prefer this from UI: add a real product */
        addProduct(product, quantity = 1) {
            this.addItem({
                id: String(product.id),
                name: product.title,
                price: product.price,
                image: product.image,
                quantity,
            });
        },
        addItem(item) {
            const id = String(item.id);
            const qty = Math.max(1, Math.floor(item.quantity ?? 1));
            const existing = this.items.find((i) => i.id === id);
            if (existing)
                existing.quantity += qty;
            else
                this.items.push({ ...item, id, quantity: qty });
            this.privateSaveLocal();
            this.scheduleSync();
            const flyoutProduct = {
                id: Number(id),
                title: item.name,
                price: item.price,
                description: '',
                category: '',
                image: item.image ?? '',
            };
            this.openFlyout(flyoutProduct, qty);
        },
        removeItem(id) {
            this.items = this.items.filter((i) => i.id !== String(id));
            this.privateSaveLocal();
            this.scheduleSync();
        },
        updateQuantity(id, quantity) {
            const q = Math.floor(quantity);
            if (q <= 0)
                return this.removeItem(id);
            const item = this.items.find((i) => i.id === String(id));
            if (item)
                item.quantity = q;
            this.privateSaveLocal();
            this.scheduleSync();
        },
        clearCart() {
            this.items = [];
            this.privateSaveLocal();
            this.scheduleSync();
        },
        setItems(items) {
            this.items = items;
            this.privateSaveLocal();
            this.scheduleSync();
        },
        /** Remote: attach store to a user/cart context */
        setRemoteContext(payload) {
            this.userId = payload.userId;
            this.remoteCartId = typeof payload.cartId === 'number' ? payload.cartId : null;
            this.privateSaveRemoteContext();
        },
        /** Remote: GET and replace local items with remote */
        async pullFromRemote(cartId) {
            const id = cartId ?? this.remoteCartId;
            if (!id)
                throw new Error('No remote cart id set.');
            this.syncing = true;
            this.syncError = null;
            try {
                const remote = await getCart(id);
                this.remoteCartId = remote.id;
                this.userId = remote.userId;
                this.items = fromApiProducts(remote.products);
                this.privateSaveLocal();
                this.privateSaveRemoteContext();
                this.lastSyncedAt = Date.now();
            }
            catch (e) {
                this.syncError = e?.message ?? 'Failed to load remote cart.';
                throw e;
            }
            finally {
                this.syncing = false;
            }
        },
        /** Remote: POST create a cart from current local items */
        async createRemoteCart(userId) {
            this.syncing = true;
            this.syncError = null;
            try {
                const payload = {
                    userId,
                    products: toApiProducts(this.items),
                };
                const created = await createCart(payload);
                this.remoteCartId = created.id;
                this.userId = created.userId;
                this.privateSaveRemoteContext();
                this.lastSyncedAt = Date.now();
                return created;
            }
            catch (e) {
                this.syncError = e?.message ?? 'Failed to create remote cart.';
                throw e;
            }
            finally {
                this.syncing = false;
            }
        },
        /** Remote: PUT overwrite remote cart with current local items (local is source of truth) */
        async pushToRemote() {
            if (!this.remoteCartId)
                throw new Error('No remote cart id set.');
            if (!this.userId)
                throw new Error('No userId set for remote cart.');
            this.syncing = true;
            this.syncError = null;
            try {
                const payload = {
                    userId: this.userId,
                    products: toApiProducts(this.items),
                };
                const updated = await updateCart(this.remoteCartId, payload);
                this.lastSyncedAt = Date.now();
                return updated;
            }
            catch (e) {
                this.syncError = e?.message ?? 'Failed to sync remote cart.';
                throw e;
            }
            finally {
                this.syncing = false;
            }
        },
        /** Remote: DELETE cart and clear remote context (local items are kept unless you clear them) */
        async deleteRemoteCart() {
            if (!this.remoteCartId)
                return;
            this.syncing = true;
            this.syncError = null;
            try {
                await deleteCart(this.remoteCartId);
                this.remoteCartId = null;
                this.privateSaveRemoteContext();
                this.lastSyncedAt = Date.now();
            }
            catch (e) {
                this.syncError = e?.message ?? 'Failed to delete remote cart.';
                throw e;
            }
            finally {
                this.syncing = false;
            }
        },
        /**
         * App bootstrap entrypoint.
         * - Uses persisted remoteCartId if present
         * - Pulls remote cart when possible (remote is canonical by default)
         * - Otherwise creates a remote cart from local items and ensures future sync works
         */
        async initCartSession(userId, opts) {
            const preferRemote = opts?.preferRemote ?? true;
            this.userId = userId;
            this.privateSaveRemoteContext();
            // If we have an existing remote cart id, try to pull it
            if (this.remoteCartId && preferRemote) {
                try {
                    await this.pullFromRemote(this.remoteCartId);
                    return;
                }
                catch {
                    // fall through to creating a new remote cart
                }
            }
            // No usable remote cart -> create one from current local state
            const created = await this.createRemoteCart(userId);
            // Some APIs don't echo back products reliably; ensure remote matches local.
            // (If createCart already used local products, this PUT is harmless.)
            this.remoteCartId = created.id;
            this.privateSaveRemoteContext();
            await this.pushToRemote();
        },
        /** Optional convenience: remove remote linkage but keep local cart */
        disconnectRemote() {
            this.remoteCartId = null;
            this.syncError = null;
            this.syncing = false;
            this.privateSaveRemoteContext();
        },
    },
});
//# sourceMappingURL=cart.js.map