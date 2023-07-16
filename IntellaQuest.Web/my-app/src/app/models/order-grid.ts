import { OrderStatus } from "./enum/order-status";
import { ShoppingCart } from "./shopping-cart";

export class OrderGridViewModel{
    Id?:string;
    OrderName?: string;
    OrderStatus?: OrderStatus;
    ShoppingCart?: ShoppingCart;
    NumberOfProducts?: number;
    TotalAmount?: number;
    DateCreated?: string;
    //if we need
    //User?: UserDetails;
}