export interface Product {
    id: number
    title: string
    price: number
    description: string
    category: string
    image: string
    rating?: {
        rate: number
        count: number
    }
}

export type ApiCartProduct = Product & {
    /**
     * fakestore docs/examples vary; keep quantity optional and default to 1 in mapping
     */
    quantity?: number
}

export interface ApiCart {
    id: number
    userId: number
    products: ApiCartProduct[]
}

const API_BASE = (import.meta as any).env?.VITE_API_BASE_URL ?? 'https://fakestoreapi.com'

async function handleResponse<T>(res: Response): Promise<T> {
    if (!res.ok) {
        const msg = await res.text().catch(() => res.statusText)
        throw new Error(msg || `HTTP ${res.status}`)
    }
    return res.json() as Promise<T>
}

async function handleVoid(res: Response): Promise<void> {
    if (!res.ok) {
        const msg = await res.text().catch(() => res.statusText)
        throw new Error(msg || `HTTP ${res.status}`)
    }
}

export async function getProducts(): Promise<Product[]> {
    const res = await fetch(`${API_BASE}/products`)
    return handleResponse<Product[]>(res)
}

export async function addProduct(payload: Partial<Product>): Promise<Product> {
    const res = await fetch(`${API_BASE}/products`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
    })
    return handleResponse<Product>(res)
}

export async function getProduct(id: number | string): Promise<Product> {
    const res = await fetch(`${API_BASE}/products/${encodeURIComponent(String(id))}`)
    return handleResponse<Product>(res)
}

/** CARTS API */
export async function getCarts(): Promise<ApiCart[]> {
    const res = await fetch(`${API_BASE}/carts`)
    return handleResponse<ApiCart[]>(res)
}

export async function getCart(id: number | string): Promise<ApiCart> {
    const res = await fetch(`${API_BASE}/carts/${encodeURIComponent(String(id))}`)
    return handleResponse<ApiCart>(res)
}

export async function createCart(payload: Omit<ApiCart, 'id'> & { id?: number }): Promise<ApiCart> {
    const res = await fetch(`${API_BASE}/carts`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
    })
    return handleResponse<ApiCart>(res)
}

export async function updateCart(id: number | string, payload: Omit<ApiCart, 'id'> & { id?: number }): Promise<ApiCart> {
    const res = await fetch(`${API_BASE}/carts/${encodeURIComponent(String(id))}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
    })
    return handleResponse<ApiCart>(res)
}

export async function deleteCart(id: number | string): Promise<void> {
    const res = await fetch(`${API_BASE}/carts/${encodeURIComponent(String(id))}`, { method: 'DELETE' })
    return handleVoid(res)
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
}