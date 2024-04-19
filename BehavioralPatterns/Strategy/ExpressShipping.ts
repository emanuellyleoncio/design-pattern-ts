import { IShipping } from "./IShipping";

export class ExpressShipping implements IShipping {
    calculateShipping(orderPrice: number): number {
        return orderPrice * 0.1;
    }
}