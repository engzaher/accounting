

export class Product {

    constructor (public name: string, public imageUrl: string, public manufacturer: string,
                 public price: number, public qty: number, public addedQty: number, public added: boolean,
                 public year: Number
                ) {
    }

    toString () {
        return `You add the following product ${this.name} with quntity ${this.qty}.`;
    }

    setQty(qty: number) {
        this.qty = qty;
    }
    getQty() {
        return this.qty;
    }
    setPrice(price: number) {
        this.price = price;
    }
    getPrice() {
        return this.price;
    }
    setName(name: string) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
    setAdded(added: boolean) {
        this.added = added;
    }
    getAdded() {
        return this.added;
    }
    setAddedQty(qunt) {
        this.addedQty = qunt;
    }
    getAddedQty() {
        return this.addedQty;
    }
    getYear() {
        return this.year;
    }
}
