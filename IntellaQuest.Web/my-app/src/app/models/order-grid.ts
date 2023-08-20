import { OrderStatus } from "./enum/order-status";
import { LookupViewModel } from "./lookup-view-model";

export class OrderGridViewModel{
    Id?:string;
    OrderName?: string;
    OrderStatus?: OrderStatus;
    ShoppingCart?: LookupViewModel;
    NumberOfProducts?: number;
    TotalAmount?: number;
    DateCreated?: string;
    //if we need
    User?: LookupViewModel;
}