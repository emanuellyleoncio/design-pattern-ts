export interface IShipping {
    calculateShipping(orderPrice: number): number;
}