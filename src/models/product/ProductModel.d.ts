interface IProduct {
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
export default class ProductModel {
    private _data;
    constructor(_data: IProduct);
    get id(): number;
    get title(): string;
    get price(): number;
    get description(): string;
    get category(): string;
    get image(): string;
    get rating(): {
        rate: number;
        count: number;
    } | undefined;
}
export {};
