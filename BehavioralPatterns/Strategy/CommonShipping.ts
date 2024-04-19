import { IShipping } from "./IShipping";

export class CommonShipping implements IShipping {
    calculateShipping(orderPrice: number): number {
        return orderPrice * 0.05;
    }
}