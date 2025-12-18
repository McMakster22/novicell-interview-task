export interface Product {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating?: {
        rate: number;
        count: number;
    };
}
export type ApiCartProduct = Product & {
    /**
     * fakestore docs/examples vary; keep quantity optional and default to 1 in mapping
     */
    quantity?: number;
};
export interface ApiCart {
    id: number;
    userId: number;
    products: ApiCartProduct[];
}
export declare function getProducts(): Promise<Product[]>;
export declare function addProduct(payload: Partial<Product>): Promise<Product>;
export declare function getProduct(id: number | string): Promise<Product>;
/** CARTS API */
export declare function getCarts(): Promise<ApiCart[]>;
export declare function getCart(id: number | string): Promise<ApiCart>;
export declare function createCart(payload: Omit<ApiCart, 'id'> & {
    id?: number;
}): Promise<ApiCart>;
export declare function updateCart(id: number | string, payload: Omit<ApiCart, 'id'> & {
    id?: number;
}): Promise<ApiCart>;
export declare function deleteCart(id: number | string): Promise<void>;
declare const _default: {
    addProduct: typeof addProduct;
    getProduct: typeof getProduct;
    getProducts: typeof getProducts;
    getCarts: typeof getCarts;
    getCart: typeof getCart;
    createCart: typeof createCart;
    updateCart: typeof updateCart;
    deleteCart: typeof deleteCart;
};
export default _default;
