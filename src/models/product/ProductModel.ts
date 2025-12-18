
interface IProduct {
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

export default class ProductModel {
    constructor(
        private _data: IProduct
    ) {}
    get id() { return this._data.id }
    get title() { return this._data.title }
    get price() { return this._data.price } 
    get description() { return this._data.description }
    get category() { return this._data.category }
    get image() { return this._data.image }
    get rating() { return this._data.rating }
}