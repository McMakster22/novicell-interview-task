
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

    /** Optional: some UIs show stock availability */
    stock?: number
}