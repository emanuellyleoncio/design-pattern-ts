import { Order } from "./Order";

export class EletronicOrder extends Order
{
    private sectorName: string

    constructor() {
        super();
        this.sectorName = 'Eletronics';
    }

    public getSectorName(): string {
        return this.sectorName;
    }

    public setSectorName(value: string): void {
        this.sectorName = value
    }
}
