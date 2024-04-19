import { IShipping } from "./IShipping";

export abstract class Order {
    private value: number
    private shippingType: IShipping | null

    constructor() {
        this.value = 0;
        this.shippingType = null;
    }

    public getValue(): number {
        return this.value;
    }

    public setValue(value: number): void {
        this.value = value
    }

    public setShippingType(shipping: IShipping) {
        this.shippingType = shipping
    }

    public calculateShipping(): number {
        if (this.shippingType !== null) {
            return this.shippingType.calculateShipping(this.value);
        } else {
            throw new Error('Shipping type is not set.');
        }
    }
}