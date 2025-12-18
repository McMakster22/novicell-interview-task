export default class ProductModel {
    _data;
    constructor(_data) {
        this._data = _data;
    }
    get id() { return this._data.id; }
    get title() { return this._data.title; }
    get price() { return this._data.price; }
    get description() { return this._data.description; }
    get category() { return this._data.category; }
    get image() { return this._data.image; }
    get rating() { return this._data.rating; }
}
//# sourceMappingURL=ProductModel.js.map