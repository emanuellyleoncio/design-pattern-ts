import { CommonShipping } from "./CommonShipping";
import { ExpressShipping } from "./ExpressShipping";
import { EletronicOrder } from "./EletronicOrder";

const order = new EletronicOrder();
order.setValue(200)

const commomShipping = new CommonShipping();
const expressShipping = new ExpressShipping();

order.setShippingType(expressShipping)

console.log('Shipping price is $:', order.calculateShipping());