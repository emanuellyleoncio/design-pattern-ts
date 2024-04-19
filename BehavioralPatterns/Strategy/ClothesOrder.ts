import { Order } from "./Order";

export class ClothesOrder extends Order
{
    private sectorName: string

    constructor() {
        super();
        this.sectorName = 'Clothes';
    }

    public getSectorName(): string {
        return this.sectorName;
    }

    public setSectorName(value: string): void {
        this.sectorName = value
    }
}