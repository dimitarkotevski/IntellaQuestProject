import { LookupViewModel } from "./lookup-view-model";

export class Product{
    Id?:string;
    Name?:string;
    Description?:string;
    Price?:number;
    Image?:any;
    Category?: LookupViewModel
}