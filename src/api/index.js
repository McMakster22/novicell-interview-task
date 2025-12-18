const API_BASE = import.meta.env?.VITE_API_BASE_URL ?? 'https://fakestoreapi.com';
async function handleResponse(res) {
    if (!res.ok) {
        const msg = await res.text().catch(() => res.statusText);
        throw new Error(msg || `HTTP ${res.status}`);
    }
    return res.json();
}
async function handleVoid(res) {
    if (!res.ok) {
        const msg = await res.text().catch(() => res.statusText);
        throw new Error(msg || `HTTP ${res.status}`);
    }
}
export async function getProducts() {
    const res = await fetch(`${API_BASE}/products`);
    return handleResponse(res);
}
export async function addProduct(payload) {
    const res = await fetch(`${API_BASE}/products`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
    });
    return handleResponse(res);
}
export async function getProduct(id) {
    const res = await fetch(`${API_BASE}/products/${encodeURIComponent(String(id))}`);
    return handleResponse(res);
}
/** CARTS API */
export async function getCarts() {
    const res = await fetch(`${API_BASE}/carts`);
    return handleResponse(res);
}
export async function getCart(id) {
    const res = await fetch(`${API_BASE}/carts/${encodeURIComponent(String(id))}`);
    return handleResponse(res);
}
export async function createCart(payload) {
    const res = await fetch(`${API_BASE}/carts`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
    });
    return handleResponse(res);
}
export async function updateCart(id, payload) {
    const res = await fetch(`${API_BASE}/carts/${encodeURIComponent(String(id))}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
    });
    return handleResponse(res);
}
export async function deleteCart(id) {
    const res = await fetch(`${API_BASE}/carts/${encodeURIComponent(String(id))}`, { method: 'DELETE' });
    return handleVoid(res);
}
export default {
    addProduct,
    getProduct,
    getProducts,
    getCarts,
    getCart,
    createCart,
    updateCart,
    deleteCart,
};
//# sourceMappingURL=index.js.map